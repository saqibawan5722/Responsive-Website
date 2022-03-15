import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailesService } from 'src/app/service/orderdetailes.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {
   
  id:any;
  Menudata : any
  constructor( public param:ActivatedRoute, public servic:OrderdetailesService) { }

  ngOnInit(): void {
    this.id = this.param.snapshot.paramMap.get('id')
    console.log(this.id , 'getMenu');

    if(this.id){
     this.Menudata = this.servic.ordersdetails.filter(res => {
        return res.id == this.id
    })
    }
  }

}
