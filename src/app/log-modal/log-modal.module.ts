import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogModalPage } from './log-modal.page';

import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: LogModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot()
  ],
  declarations: [LogModalPage]
})
export class LogModalPageModule {}
