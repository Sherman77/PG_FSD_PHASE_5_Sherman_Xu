import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login :Login = {
    email:'',
    password:''
  };
  public submitted:boolean = false;
  public show:boolean = false;
  public loginSuccess:boolean = false;

  constructor(private userSrv:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(loginForm:any) {
    if(loginForm.valid) {
      this.submitted = true;
      this.show = true;
      console.log(this.login);
      this.logIn(this.login)
    } else{ 
      console.log("Invalid Form !");
      this.validateForm(loginForm);
    }
  }

  public validateForm(form:any){
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true});
      })
  }

  hasError(field:any){
    return (field.invalid && field.touched && field.errors);
  }

  public logIn(loginBody:Login) {
    this.userSrv.logIn(loginBody).subscribe(
      (res) => {
        console.log(res);
        this.loginSuccess = true;
      },
      (error) => {
        this.loginSuccess = false;
        console.log(error);
      }
    )
  }

}

interface Login {
  email:string;
  password:string;
}
