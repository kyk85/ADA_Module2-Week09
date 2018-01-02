import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YK app';
  number = 0;
  message = "";
  fullname="";
  fullplace="";
  fulldesc="";
    
  items = [
    {name:"YK",place:"ADA",completed:true},
    {name:"Batman",place:"GOTHAM",completed:false},
    {name:"Superman",place:"METROPOLIS",completed:true}    
  ]

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

  moreInfo(selectedItem){
    this.fullname=selectedItem.name;
    this.fullplace=selectedItem.place;
    this.fulldesc=selectedItem.description;
    //alert("clicked")
  }
}
