import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-zone-lists',
  templateUrl: './zone-lists.page.html',
  styleUrls: ['./zone-lists.page.scss'],
})
export class ZoneListsPage implements OnInit {

  private pid:number;
  private proj:any;
  private city:any;
  private address:any;
  private zoneLists:any[];
  private zoneObj:any;
  constructor(private route: ActivatedRoute,private db:AngularFireDatabase ) { 
      db.list('customer').valueChanges()
         .subscribe(res => {
          this.proj = res[this.pid];
          this.city = this.proj.address.city;
          this.address = this.proj.address.address;
          this.zoneObj = this.proj.alarm.zone;
          this.zoneLists = Object.keys(this.zoneObj).map(i =>this.zoneObj[i]);

         })
      

  }

  ngOnInit() {

    this.route.paramMap
      .subscribe(params =>{
         this.pid = +params.get('id');

      })
  }

}
