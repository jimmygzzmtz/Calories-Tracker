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

  currentDate = new Date;

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
    var logs2: any = this.logs.filter(checkDate, this);

    function checkDate(log) {
      var logDate = new Date(log.date);
      return (logDate.getDate() == this.currentDate.getDate() && logDate.getMonth() == this.currentDate.getMonth() && logDate.getFullYear() == this.currentDate.getFullYear());
    } 

    if (logs2 != undefined){
      for(let i = 0; i<logs2.length; i++){
        this.sum = this.sum + logs2[i].calories;    
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
      component: LogModalPage,
      componentProps: { 
        currentDate: this.currentDate
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data != undefined){
          if (this.logs == null){
            this.logs = [];
            this.logs.push({
              name: data.data.name,
              calories: data.data.calories,
              quantity: data.data.quantity,
              date: this.currentDate
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

  previousDay() {
    var result = new Date(this.currentDate.valueOf());
    result.setDate(result.getDate() - 1);
    this.currentDate = result;
  }

  nextDay() {
    var result = new Date(this.currentDate.valueOf());
    result.setDate(result.getDate() + 1);
    this.currentDate = result;
  }

  getLogs() {
    function checkDate(log) {
      var logDate = new Date(log.date);
      return (logDate.getDate() == this.currentDate.getDate() && logDate.getMonth() == this.currentDate.getMonth() && logDate.getFullYear() == this.currentDate.getFullYear());
    } 
    return this.logs.filter(checkDate, this);
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
        foodQty: log.quantity,
        currentDate: this.currentDate
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
