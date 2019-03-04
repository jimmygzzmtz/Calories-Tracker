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
                this.foods.push(data);
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
        }

  }
}
