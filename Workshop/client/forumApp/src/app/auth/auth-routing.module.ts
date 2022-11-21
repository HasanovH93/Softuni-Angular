import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/auth.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes:Routes = [
  {
   path: 'auth/login',
   component: LoginComponent,
   canActivate: [AuthActivate],
   data: {
     loginRequired: false

   }
  },
  {
   path: 'auth/register',
   component: RegisterComponent,
   canActivate: [AuthActivate],
   data: {
    loginRequired: false

  }
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    data: {
      loginRequired: true
 
    }
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      loginRequired: true
 
    }
  }
  
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
})

export class AuthRoutingModule {}