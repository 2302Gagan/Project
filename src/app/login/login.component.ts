import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public input: any;

  constructor(private http: HttpClient, private router: Router) {
    this.input = {
        "email": "",
        "password": ""
    };
}
url="http://localhost:8080/api/user";
public login() {
  if(this.input.email && this.input.password) {
      let headers = new Headers({ "content-type": "application/json" });
      this.http.post(this.url, JSON.stringify(this.input))
      .subscribe(result => {
              this.router.navigate(["/account"], { "queryParams": result });
          });
  }
}


  ngOnInit(): void {
  }
  

}
