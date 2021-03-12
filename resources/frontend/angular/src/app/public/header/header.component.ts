import { Component, OnInit } from '@angular/core';
import {Section} from "../../interfaces/section";
import {SectionService} from "../../services/section.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: Section | undefined;
  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.sectionService.get(1).subscribe(
      section => this.header = section
    )
  }
}
