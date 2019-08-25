import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZoneListsPage } from './zone-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ZoneListsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, //ionic componnet/direcgtive/pipe  organize (declaration)from here
    RouterModule.forChild(routes)
  ],
  declarations: [ZoneListsPage]
})
export class ZoneListsPageModule {}
