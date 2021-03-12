import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecureComponent} from "./secure.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";




@NgModule({
  declarations: [SecureComponent, DashboardComponent, ContactComponent, PageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class SecureModule { }
