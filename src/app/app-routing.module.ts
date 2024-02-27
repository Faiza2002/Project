import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login/login.component';
import { RegistrationComponent } from 'src/login/registration/registration.component';


const routes: Routes = [
  { path:'',component:LoginComponent,pathMatch:"full"},
  {path:'LoginPage',component:LoginComponent},
   { path:'RegistrationPage',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
