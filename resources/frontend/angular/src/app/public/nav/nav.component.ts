import {Component, HostListener, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../interfaces/menu";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menus: Menu[] = [];
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    this.menuService.all().subscribe(
      menus => this.menus = menus
    );
  }

}
