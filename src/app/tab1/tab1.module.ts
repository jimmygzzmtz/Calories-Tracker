import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { LogModalPage } from '../log-modal/log-modal.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    IonicStorageModule.forRoot()
  ],
  declarations: [Tab1Page, LogModalPage],
  entryComponents: [LogModalPage]
})
export class Tab1PageModule {}
