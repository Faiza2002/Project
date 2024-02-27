import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  // navigateToRegistration() {
  //   this.router.navigate(['/Registration']);
  // }
  isRotated: boolean = false;
  isContentVisible: boolean = false;

  toggleArrow() {
    this.isRotated = !this.isRotated;
    this.isContentVisible = !this.isContentVisible;
  }

  type:string="username";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!: FormGroup;
  
  // constructor(private fb:FormBuilder){}

  // ngOnInit(): void {
  //   this.loginForm=this.fb.group({
  //     username:['', ]
  //   })
  // }
}
