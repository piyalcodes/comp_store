import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
    console.log("ddd");
  }
  

}
