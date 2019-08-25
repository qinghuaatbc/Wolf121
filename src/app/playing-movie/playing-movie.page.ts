import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-playing-movie',
  templateUrl: './playing-movie.page.html',
  styleUrls: ['./playing-movie.page.scss'],
})
export class PlayingMoviePage implements OnInit {


    private movie:any;
    private mid:any;
    private year:any;
    private country:any;
    private streamID:string;
    private title:any;
    private image:any;
    private playing:string;
    private serverIP :string= "http://24.80.132.186:5080/LiveApp/streams/";


  constructor(private route: ActivatedRoute,private db:AngularFireDatabase ) { 
    
   
    db.list('movies/movie').valueChanges()
       .subscribe(res => {
        this.movie = res[this.mid];
        this.title = this.movie.title;
        this.country = this.movie.country;
        this.streamID = this.movie.streamID;
       this.year = this.movie.year;
       this.image = this.movie.image;
        this.playing =this.serverIP+this.streamID+".mp4";
       })
    
    
}

  ngOnInit() {

    this.route.paramMap
    .subscribe(params =>{
       this.mid = +params.get('mid');


    })
   
    
  }

}
