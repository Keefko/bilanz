import { Component, OnInit } from '@angular/core';
import {SectionService} from "../../services/section.service";
import {Section} from "../../interfaces/section";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  section: Section;
  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
     this.sectionService.get(3).subscribe(
       section => this.section = section
     )
  }


}
