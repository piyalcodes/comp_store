import { Component,ViewEncapsulation, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  

  constructor() { }
  
   ngOnInit() {
		console.log("ddd");
	  } 
 
}
