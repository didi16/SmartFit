import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListwodPage } from './listwod';

@NgModule({
  declarations: [
    ListwodPage,
  ],
  imports: [
    IonicPageModule.forChild(ListwodPage),
  ],
  exports: [
    ListwodPage
  ]
})
export class ListwodPageModule {}
