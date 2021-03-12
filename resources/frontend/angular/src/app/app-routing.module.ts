import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "./public/public.component";
import {LoginComponent} from "./public/login/login.component";
import {SecureComponent} from "./secure/secure.component";
import {AuthGuard} from "./guard/auth.guard";
import {HomepageComponent} from "./public/homepage/homepage.component";
import {ServicepageComponent} from "./public/servicepage/servicepage.component";
import {ContactComponent} from "./public/contact/contact.component";
import {PageComponent} from "./public/page/page.component";
import {DashboardComponent} from "./secure/dashboard/dashboard.component";
import {ContactComponent as AdminContact} from "./secure/contact/contact.component";

const routes: Routes = [

  {path: '', component: PublicComponent, children: [
      {path: '', redirectTo: 'uvod', pathMatch: 'full'},
      {path: 'uvod' , component: HomepageComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'kontakt', component:  ContactComponent},
      {path: 'sluzby/:name', component: ServicepageComponent},
      {path: 'podstranky/:name', component: PageComponent}
  ]},

  {path: '', component: SecureComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'administracia', pathMatch: 'full'},
      {path: 'administracia', component: DashboardComponent},
      {path: 'administracia/kontakt', component: AdminContact}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
