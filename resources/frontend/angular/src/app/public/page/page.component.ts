import { Component, OnInit } from '@angular/core';
import {Page} from "../../interfaces/page";
import {PageService} from "../../services/page.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: Page;
  constructor(private route: ActivatedRoute,private pageService:PageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        this.loadData(params['name'])
      }
    )

  }

  private loadData(name: string) {
    this.pageService.get(name).subscribe(
      page => this.page = page
    )
  }
}
