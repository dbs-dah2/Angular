import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  name = 'Susmitha Sanikommu';
  //fav = [];
  actorName = '';
  fav=[
    {
      name:"Vicky Kaushal",
      id:1,
      age:32,
      imgUrl:"./assets/images/vk.jpg",
      active: true,
      movies:0
    },
    {
      name:"Ayushmann Khurrana",
      id:2,
      age:34,
      imgUrl:"./assets/images/ak.jpg",
      active: false,
      movies:0
    },
    {
      name:"Harish Kalyan",
      id:3,
      age:29,
      imgUrl:"./assets/images/hk.jpg",
      active: true,
      movies:0
    },
    {
      name:"Ranbir Kapoor",
      id:4,
      age:31,
      imgUrl:"./assets/images/rk.jpg",
      active: false,
      movies:0
    },
    {
      name:"Anushka",
      id:5,
      age:30,
      imgUrl:"./assets/images/as.jpg",
      active: true,
      movies:0
    }
  ];

  addMovie(c){
    var res = this.fav.filter(function(t){

      return t===c;
    })
    res[0].movies++;
  }
  
  // onActorNameChange(){
  //   console.log(`came inside change event${this.actorName}` )
  // }
}
