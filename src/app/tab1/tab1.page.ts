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
  logs: any = [];

  sum: number = 0;

  constructor(public navCtrl: NavController, public modalController: ModalController, private storage: Storage){
    
    /*
    this.logs = [
      {name: 'Pizza Slice', calories: 1000, quantity: 4},
      {name: 'Milkshake', calories: 500, quantity: 1},
      {name: 'French Fries', calories: 1200, quantity: 3}
    ];
    */

    this.storage.get('logsArr').then((val) => {
      if (val != "[]"){
       //this.foods = val
       this.logs = JSON.parse(val)
       console.log('Passed to logs');
      }
      else{
       this.storage.set('logsArr', JSON.stringify(this.logs));
      }
      //console.log('Your foods are', val);
    });
    
  }

  total(){
    this.sum = 0;
    for(let i = 0; i<this.logs.length; i++){
      this.sum = this.sum + this.logs[i].calories;    
    }
    return this.sum;
  }
  

  async logFood() {
    const modal = await this.modalController.create({
      component: LogModalPage
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log("Data =>", data)
        if (data.data != undefined){
          //this.logs.push(JSON.parse(data.data));
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
    console.log("Hello delete");

    let index = this.logs.indexOf(log);

        if(index > -1){
            this.logs.splice(index, 1);
            this.storage.set('logsArr', JSON.stringify(this.logs));
        }

  }

  async editLog(log) {
    console.log("Hello edit");

    const modal = await this.modalController.create({
      component: LogModalPage
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log("Data =>", data)
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
