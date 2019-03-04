import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  foods: any = [];

  constructor(public navCtrl: NavController, public alertController: AlertController, private storage: Storage){
    /*
    this.foods = [
      {name: 'Pizza Slice', calories: 250},
      {name: 'Milkshake', calories: 500},
      {name: 'French Fries', calories: 400}
    ];
    */
   // set a key/value
   //this.storage.set('foodsArr', foods);
   //this.storage.set('foodsArr', JSON.stringify(this.foods));
 
   // Or to get a key/value pair
   
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

  async editFood(food) {
    const alert = await this.alertController.create({
      header: 'Edit Food',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: food.name
        },
        {
          name: 'calories',
          type: 'text',
          value: food.calories
        }
      ],
      buttons: [
        {
            text: 'Cancel'
        },
        {
            text: 'Save',
            handler: data => {
                let index = this.foods.indexOf(food);

                if(index > -1){
                  this.foods[index] = data;
                  this.storage.set('foodsArr', JSON.stringify(this.foods));
                }
            }
        }
    ]
    });

    await alert.present();
  }

  async addFood() {
    const alert = await this.alertController.create({
      header: 'Add Food',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Pizza Slice'
        },
        {
          name: 'calories',
          type: 'text',
          placeholder: '250'
        }
      ],
      buttons: [
        {
            text: 'Cancel'
        },
        {
            text: 'Add',
            handler: data => {
                if (this.foods == null){
                  this.foods = [];
                  this.foods.push({
                    name: data.name,
                    calories: data.calories
                  })
                }
                else{
                  this.foods.push(data);
                }
                this.storage.set('foodsArr', JSON.stringify(this.foods));
            }
        }
    ]
    });

    await alert.present();
  }

  deleteFood(food) {
    console.log("Hello delete");

    let index = this.foods.indexOf(food);

        if(index > -1){
            this.foods.splice(index, 1);
            this.storage.set('foodsArr', JSON.stringify(this.foods));
        }

  }
}
