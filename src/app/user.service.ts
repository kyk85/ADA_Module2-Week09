import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(public http: Http) { }
  /*users = [{
    name:"Captain America",
    alias:"Steve Rogers",
    email:"s.rogers@gmail.com"
  },{
    name:"Spider-Man",
    alias:"Peter Parker",
    email:"webhead@gmail.com"
  },{
    name:"Ironman",
    alias:"Tony Stark",
    email:"i.am.rich@gmail.com"
  }]*/

  /*getAllUsers(){
    return this.users;
  }*/

  getAllHttpUsers(){
    return this.http.get("https://randomuser.me/api?results=5")
    .map((res: Response)=> res.json())
  }
}
