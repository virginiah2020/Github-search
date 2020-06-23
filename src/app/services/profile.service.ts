import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = environment.clientid;
  constructor(private http:HttpClient) {
    this.username="virginiah2020";
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/virginiah2020?access_token"+this.clientid )
  }

  findRepository(){
    return this.http.get("https://api.github.com/users/virginiah2020/repos?access_token"+this.clientid)
  }

  updateProfile(username:string){
    this.username = username;
    return this.http.get("https://api.github.com/users/"+this.username+"?access_token"+this.clientid )
  }

  updateRepository(username:string){
    this.username = username;
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?access_token"+this.clientid )
  }
  }


  

