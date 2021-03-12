import { Component, OnInit } from '@angular/core';
import {Section} from "../../interfaces/section";
import {SectionService} from "../../services/section.service";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css', '../public.component.css']
})
export class PriceComponent implements OnInit {
  section: Section;
  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData() {
    this.sectionService.get(4).subscribe(
      section => this.section = section
    )
  }
}
