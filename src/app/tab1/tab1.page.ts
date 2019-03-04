import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LogModalPage } from '../log-modal/log-modal.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  logs: any = [];

  constructor(public navCtrl: NavController, public modalController: ModalController){
    
    this.logs = [
      {name: 'Pizza Slice', calories: 1000, quantity: 4},
      {name: 'Milkshake', calories: 500, quantity: 1},
      {name: 'French Fries', calories: 1200, quantity: 3}
    ];
    
  }

  async logFood() {
    const modal = await this.modalController.create({
      component: LogModalPage
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log("Data =>", data)
        if (data.data != undefined){
          this.logs.push(data);
        }     
    });

    await modal.present(); 

  }
}
