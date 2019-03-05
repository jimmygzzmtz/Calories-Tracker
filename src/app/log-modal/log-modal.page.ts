import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.page.html',
  styleUrls: ['./log-modal.page.scss'],
})
export class LogModalPage implements OnInit {
  foodslct: any;
  foodslctSend: any;

  foods: any = [];

  toStr = JSON.stringify;

  qty: string;

  foodQty;

  constructor(public modalController: ModalController, private storage: Storage, public alertController: AlertController ) {

    this.storage.get('foodsArr').then((val) => {
      if (val != "[]"){
       this.foods = JSON.parse(val)
       console.log("orig" + JSON.stringify(this.foods[0]));
      }
      else{
       this.storage.set('foodsArr', JSON.stringify(this.foods));
      }
    });
    
   }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  async save(){
    if (this.qty != undefined && this.foodslct != undefined){
      this.foodslctSend = JSON.parse(this.foodslct);
      this.foodslctSend.quantity = this.qty;
      this.foodslctSend.calories = +this.foodslctSend.calories * +this.qty;
      this.modalController.dismiss(this.foodslctSend);
    }
    else{
      const alert = await this.alertController.create({
        header: 'Please fill in all the inputs',
        buttons: [
          {
              text: 'OK'
          }
      ]
      });
      await alert.present();
    }
    
  }
}
