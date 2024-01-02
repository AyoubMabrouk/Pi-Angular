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
    //console.log("------------",this.username123,"---------",this.password123)
    if(this.username123=="visitor"&&this.password123=="visitor"){
      window.location.href = '/(sidebar:index)';
    }
    else{
      alert('Wrong Username and Password')
    }
    //this.username123=this.userForm.get('username123')?.value;
  }
}
