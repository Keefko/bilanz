import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {SectionService} from "../../services/section.service";
import {Section} from "../../interfaces/section";
import {Service} from "../../interfaces/service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css', '../public.component.css']
})
export class ServiceComponent implements OnInit {
  section: Section | undefined;
  services: Service[] = []
  constructor(private serviceService: ServiceService, private sectionService:SectionService ) { }

  ngOnInit(): void {
    this.loadDataSection();
    this.loadData();
  }

  private loadData() {
    this.serviceService.all().subscribe(
      services => this.services = services
    )
  }

  private loadDataSection() {
    this.sectionService.get(2).subscribe(
      section => this.section = section
    )
  }
}
