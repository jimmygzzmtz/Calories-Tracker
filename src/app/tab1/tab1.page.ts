import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LogModalPage } from '../log-modal/log-modal.page';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  profile: any = {};
  logs: any = [];

  sum: number = 0;

  constructor(public navCtrl: NavController, public modalController: ModalController, private storage: Storage){

    this.storage.get('logsArr').then((val) => {
      if (val != "[]"){
       this.logs = JSON.parse(val)
      }
      else{
       this.storage.set('logsArr', JSON.stringify(this.logs));
      }
    });
    
  }

  total(){
    this.sum = 0;
    if (this.logs != undefined){
      for(let i = 0; i<this.logs.length; i++){
        this.sum = this.sum + this.logs[i].calories;    
      }
    }
    
    return this.sum;
  }

  ionViewWillEnter(){
    this.storage.get('userProfile').then((val) => {
      if (val != null){
       this.profile = JSON.parse(val)
      }
      else{
       this.storage.set('userProfile', JSON.stringify(this.profile));
      }
    });
  }

  getRemaining() {
    if (this.profile.tdee == undefined){
      return "-";
    }
    else{
      return +this.profile.tdee - +this.sum;
    }
  }
  

  async logFood() {
    const modal = await this.modalController.create({
      component: LogModalPage
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data != undefined){
          if (this.logs == null){
            this.logs = [];
            this.logs.push({
              name: data.data.name,
              calories: data.data.calories,
              quantity: data.data.quantity
            })
          }
          else{
            this.logs.push(data.data);
          }
          this.storage.set('logsArr', JSON.stringify(this.logs));
        }     
    });

    await modal.present(); 

  }

  deleteLog(log) {

    let index = this.logs.indexOf(log);

        if(index > -1){
            this.logs.splice(index, 1);
            this.storage.set('logsArr', JSON.stringify(this.logs));
        }

  }

  async editLog(log) {

    let log2 = {
      name: log.name,
      calories: (+log.calories / +log.quantity).toString()
    }


    const modal = await this.modalController.create({
      component: LogModalPage,
      componentProps: { 
        foodslct: JSON.stringify(log2),
        foodQty: log.quantity
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data != undefined){
          let index = this.logs.indexOf(log);

          if(index > -1){
            this.logs[index] = data.data;
            this.storage.set('logsArr', JSON.stringify(this.logs));
          }
        }     
    });

    await modal.present(); 

  }
}
