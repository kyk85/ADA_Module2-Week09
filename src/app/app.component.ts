import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Dependency Injection
  constructor(public itemServ : ItemService, public userServ : UserService) {

  }

  title = 'YK app';
  number = 0;
  message = "";
  fullname="";
  fullplace="";
  fulldesc="";
    
  items = [];
  users = [];
  httpusers =[];

  newItem = {
    name:'',
    place:'',
    description:'',
    completed:false
  }

  selectedItem = {
    name:'',
    place:'',
    description:'',
    completed:false
  }

  increment(){
    this.number++;
    this.message="";
  }

  decrement(){
    if (this.number!=0){
    this.number--;
    this.message="";
    } else {
      this.message="Error! Cannot count below 0!";
    }
  }

  reset(){
    this.number=0;
    this.message="";
  }

  saveItem(){
    this.items.push(this.newItem);
    alert(this.newItem.name + " has been added!")
    this.newItem = {
      name:'',
      place:'',
      description:'',
      completed:false
    }
  }

  moreInfo(item){
    this.selectedItem=item;
    //alert("clicked")
  }

  ngOnInit() {
    this.items=this.itemServ.getAllItem();
    this.userServ.getAllHttpUsers().subscribe(data=>{
      console.log(data);
      this.httpusers=data.results
    });
  }
}
