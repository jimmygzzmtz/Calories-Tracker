import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(public modalController: ModalController, private storage: Storage) {
    
    this.storage.get('foodsArr').then((val) => {
      if (val != "[]"){
       //this.foods = val
       this.foods = JSON.parse(val)
       console.log('Passed to foods');
      }
      else{
       this.storage.set('foodsArr', JSON.stringify(this.foods));
      }
      //console.log('Your foods are', val);
    });
    

   }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  save(){
    console.log('lol ' + this.foodslct)
    this.foodslctSend = JSON.parse(this.foodslct);
    this.foodslctSend.quantity = this.qty;
    this.foodslctSend.calories = +this.foodslctSend.calories * +this.qty;
    this.modalController.dismiss(this.foodslctSend);
  }
}
