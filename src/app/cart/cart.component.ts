import { Component,ViewEncapsulation, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

  

  constructor() { }
  
   ngOnInit() {
		console.log("ddd");
	  } 
 
}
