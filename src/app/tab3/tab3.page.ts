import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movies:Observable<any[]>;
  constructor(private adb:AngularFireDatabase) 
  
    {
      this.movies = adb.list('movies/movie').valueChanges();
 

  }
  }

