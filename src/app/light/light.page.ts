import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-light',
  templateUrl: './light.page.html',
  styleUrls: ['./light.page.scss'],
})
export class LightPage implements OnInit {

  private lights: Observable<any[]>;
  private lightNode:any;
  private switch:boolean[]=[];
   private length:number;
   
  
  constructor(private adb:AngularFireDatabase) {

    //this.switch=[];
    //find length of list
    adb.database.ref('customer/940 groveland/light/isy/device').on('value',(snapshot)=>{
        console.log(snapshot.numChildren());
        this.length = snapshot.numChildren();

    });
   
    //preset array

    //for (let i=0; i<this.length;i++)
   // {
   //   this.switch[i] =false;
   // }



    this.lights = adb.list('customer/940 groveland/light/isy/device').valueChanges();
     
     this.lights.subscribe(res =>
      {
         for(let i=0;i<this.length;i++)
         {
          console.log(res[i].status.switch);
           if (res[i].status.switch =='On')
           this.switch[i]= true;
           else
           this.switch[i] =false;
         }
      });
     
   //  this.switch=[false,false];
  }

  setOn(i:number){
      
     this.lightNode ="customer/940 groveland/light/isy/device/z"+this.indexToString(i);
     console.log(this.lightNode);
     this.adb.object(this.lightNode).update({command:"DON"});
      
     this.switch[i] = true;
        
  }
  setOff(i:number){

    this.lightNode ="customer/940 groveland/light/isy/device/z"+this.indexToString(i);
    console.log(this.lightNode);
    this.adb.object(this.lightNode).update({command:'DOF'});
    this.switch[i] = false;

  }

  toggle(i:number){

    this.switch[i] = !this.switch[i];
    if (this.switch[i])
       this.setOn(i)
    else
        this.setOff(i)

  }

  indexToString(n:number) 
  {
       if (n<10)
       return 0+(n+1).toString(10)
       else
       return (n+1).toString(10)

  }


  ngOnInit() {
  }

}
