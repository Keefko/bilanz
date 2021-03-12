import { Component, OnInit } from '@angular/core';
import {Service} from "../../interfaces/service";
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../services/service.service";
import {JourneyService} from "../../services/journey.service";
import {Journey} from "../../interfaces/journey";
import {RefundService} from "../../services/refund.service";
import {Refund} from "../../interfaces/refund";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css', '../public.component.css']
})
export class ServicepageComponent implements OnInit {
  service: Service;
  name: string;
  journeys: Journey[] = [];
  others: Service[] = [];
  refunds: Refund[] = [];


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false
  };

  constructor(private route: ActivatedRoute, private serviceService: ServiceService,
              private journeyService: JourneyService, private refundService: RefundService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        this.loadData(params['name'])
      }
    )
  }

  loadData(name: string): void{
    this.serviceService.get(name).subscribe(
      service => {
        this.service = service;
        if(service?.journey == true){
          this.loadJourneys()
        }
        if(service?.calc == true){
          this.loadCalc()
        }
        if(service?.others == true){
          this.loadOthers()
        }
      }
    )
  }

  private loadJourneys() {
      this.journeyService.all().subscribe(
        journeys => this.journeys = journeys
      )
  }

  private loadOthers() {
    this.serviceService.all().subscribe(
      services => this.others = services
    )
  }

  private loadCalc() {
    this.refundService.all().subscribe(
      refunds => this.refunds = refunds
    )
  }
}
