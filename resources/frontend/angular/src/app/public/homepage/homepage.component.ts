import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../interfaces/menu";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
