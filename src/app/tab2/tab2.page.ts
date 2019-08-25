import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  projects: Observable<any[]>;


  constructor(private angularFireDatabase:AngularFireDatabase) {
     this.projects = angularFireDatabase.list('customer').valueChanges();



  }

}
