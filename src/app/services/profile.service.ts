import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class ProfileService {
  private username:string;
  private clientid = 'a99ec64978954de9';
  private clientsecret = 'e988656f40a9e4093b153f250e6bc97c6cceaa90';
  constructor(private http:Http) {
    console.log("service is now ready");
    this.username = "Ali-Mohamud";
   }

   getProfileInfo() {
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "?client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

   getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "?client_secret=" + this.clientsecret)
    .map(res => res.json());
  } 

  updateProfile(username:string){
    this.username = username;
  }
  

}
