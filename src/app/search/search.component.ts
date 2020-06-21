import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  profile:any;
  repos:any;
  username:string;

  constructor(private profileService:SearchComponent){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
  
    this.profileService.findRepository().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
   
  getProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
  
    this.profileService.findRepository().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }
  
    ngOnInit() {
      this.profileService.updateProfile("omoshthegeek254");
      
      this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
  
      this.profileService.findRepository().subscribe(repos =>  this.repos = repos);
    }
  }  