import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {SecureModule} from "./secure/secure.module";
import {PublicModule} from "./public/public.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ExcerptPipe } from './pipes/excerpt.pipe';
import {CarouselModule} from "ngx-owl-carousel-o";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";




@NgModule({
  declarations: [
    AppComponent,
    ExcerptPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    CKEditorModule
  ],
  providers: [],
  exports: [
    ExcerptPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
