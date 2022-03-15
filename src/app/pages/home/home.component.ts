import { Component, OnInit } from '@angular/core';
import { OrderdetailesService } from 'src/app/service/orderdetailes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fooddata : any
  constructor( public service:OrderdetailesService) { }

  ngOnInit(): void {
    this.fooddata = this.service.ordersdetails;
  }


}
