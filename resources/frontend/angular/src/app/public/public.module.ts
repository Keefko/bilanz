import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { FooterComponent } from './footer/footer.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { ContactComponent } from './contact/contact.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PageComponent } from './page/page.component';
import {CarouselModule} from "ngx-owl-carousel-o";



@NgModule({
  declarations: [PublicComponent, LoginComponent, NavComponent, HomepageComponent, HeaderComponent, ServiceComponent, AboutComponent, PriceComponent, FooterComponent, ServicepageComponent, ContactComponent, PageheaderComponent, PageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule
  ]
})
export class PublicModule { }
