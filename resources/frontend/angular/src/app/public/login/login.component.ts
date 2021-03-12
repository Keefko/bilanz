import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });
  constructor(
    private router: Router,
  ) { }

  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {

  }

  submit() {

  }
}
