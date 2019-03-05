import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  profile: any = {};
  userHeight: any;
  userWeight: any;
  userAge: any;
  TDEE: any;

  activityLevel: any;
  gender: any;

  constructor(public navCtrl: NavController, private storage: Storage){

  }

  getTDEE() {
    return this.profile.tdee
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

  saveProfile() {
    var BMR = 0;
  
    if (this.gender == "m"){
      BMR = (+this.userHeight * 6.25) + (+this.userWeight * 9.99) - (+this.userAge * 4.92) + 5
    }
    if (this.gender == "f"){
      BMR = (+this.userHeight * 6.25) + (+this.userWeight * 9.99) - (+this.userAge * 4.92) - 161
    }
    
    if (this.activityLevel == "s"){
      this.TDEE = BMR * 1.2
    }
    if (this.activityLevel == "l"){
      this.TDEE = BMR * 1.375
    }
    if (this.activityLevel == "m"){
      this.TDEE = BMR * 1.55
    }
    if (this.activityLevel == "v"){
      this.TDEE = BMR * 1.725
    }
    if (this.activityLevel == "e"){
      this.TDEE = BMR * 1.9
    }
    
    let tmpUser = {height: this.userHeight, weight: this.userWeight, age: this.userAge, tdee: Math.round(this.TDEE), gender: this.gender, activityLevel: this.activityLevel};
    this.profile = tmpUser;
    this.storage.set('userProfile', JSON.stringify(tmpUser));

  }

}
