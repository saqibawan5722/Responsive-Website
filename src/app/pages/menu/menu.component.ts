import { Component, OnInit } from '@angular/core';
import { OrderdetailesService } from 'src/app/service/orderdetailes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  fooddata : any
  constructor( public service:OrderdetailesService) { }

  ngOnInit(): void {
    this.fooddata = this.service.ordersdetails;
  }

}
