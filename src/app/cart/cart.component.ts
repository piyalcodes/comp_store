import { Component,ViewEncapsulation, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
 
  //cartForm: FormGroup;
   
  productList: any = null;  
  productCartList = [];  
  model = new Cart(18, '', '', '', '', '','', '');
  //model = new Cart(18, '');
  constructor(private http: HttpClient) {
   
   }
  
   ngOnInit() {

    
   const $this = this;
   
   
    function ajaxOverride(url){
      
        return new Promise((resolve, reject) => { 
          
          $this.http.get(url).subscribe(data => {

            const hasData = data != '' ? true : false;
            
            if (hasData) {

              resolve(data);
            }
            else {

              reject("reject");
            }
          });
        });
    }

    //ajaxOverride('https://api.github.com/users/seeschweiler')
    ajaxOverride('assets/data/products.json')
    .then(result => {     
      
      let products;  
      
      if (typeof(Storage) !== "undefined") {          

        products = localStorage.products ? JSON.parse(localStorage.products) : '' ;          
      }
       
      $this.productList =  result;

      for (var i = 0; i <= $this.productList.length; i++) {
         
        for (var y = 0; y <= products.length; y++) {  
        
          if(products[y]) {
            
            if($this.productList[i].id == products[y].id) {
             
              $this.productCartList.push($this.productList[i]);
              
            }
          }  
        }              
      }
  }).catch(result => {
        // call error popup
  }); 


	  } 
     
    submitted = false;
    onSubmit() { this.submitted = true; }
     
    showFormControls(form: any) {
      return form && form.controls['name'] &&
      form.controls['name'].value; 
    }

}


export class Cart {
  
    constructor(
      public id: number,
      public name: string,
      public email: string,
      public mobile: string,
     public time: string,
      public address: string,
      public map: string,
      public km: string

      
    ) {  }
  
  }
  