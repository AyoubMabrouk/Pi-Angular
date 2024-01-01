import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public userForm!:FormGroup;
  username123:string='' 
  password123:string='' 
  constructor() {}

  ngOnInit(): void {window.localStorage.clear();
    }
  userSignIn(){
    //window.location.href = '/(sidebar:index)';
    console.log("------------",this.username123,"---------",this.password123)
    if(this.username123=="admin"&&this.password123=="123456"){
      window.location.href = '/(sidebar:index)';
      fetch('https://ayoub-mabrouk-python-flask.onrender.com/hello') .then(response => console.log("hello Site fetched"))
    }
    else{
      alert('Wrong Username and Password')
    }
    //this.username123=this.userForm.get('username123')?.value;
  }
}
