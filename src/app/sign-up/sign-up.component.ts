import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  id : BigInteger;
  name : String;
  email : String;
  password : String;
  
  url : 'http://localhost:8080/api/user';
  constructor(private http: HttpClient, private router: Router){
    this.id;
    this.name;
    this.email;
    this.password;
   }
   
   postedData=[{
    "id":this.id,
    "name":this.name,
    "email":this.email,
    "password":this.password
  }]

  postData(){
    let headers = new Headers({ "content-type": "application/json" });
      this.http.post(this.url, JSON.stringify(this.postData))
      .subscribe(result => {
              this.router.navigate(["/login"], { "queryParams": result });
          });
}

  ngOnInit(): void {
  }
  

}
