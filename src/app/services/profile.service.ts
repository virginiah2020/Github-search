import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = environment.clientid;
  private clientsecret =environment.clientsecret;
  constructor(private http:HttpClient) {
    this.username="virginiah2020";
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }

  findRepository(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }

  updateProfile(username:string){
    this.username = username;
  }

  
}
