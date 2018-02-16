import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Products } from '../products/products';

@Component({
  selector: 'app2',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
    console.log("ddd");
  }
  

}
