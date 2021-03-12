import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {
  @Input('page') page: any;
  constructor() { }

  ngOnInit(): void {
  }

}
