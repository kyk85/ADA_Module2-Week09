import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {

  constructor() { }
  items = [
    {name:"YK",place:"ADA",completed:true},
    {name:"Batman",place:"GOTHAM",completed:false},
    {name:"Superman",place:"METROPOLIS",completed:true}    
  ]

  getAllItem(){
    return this.items;
  }
}
