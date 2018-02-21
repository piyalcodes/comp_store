import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { forEach } from '@angular/router/src/utils/collection';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any = null;  
  productCart: any = null;  

  constructor(private http: HttpClient) { }

  ngOnInit() { 

    const $this = this;
  
// asinc http://voidcanvas.com/explaining-async-await-es7-examples/
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

        this.productCart = products.length;
        
        $this.productList =  result;

        for (var i = 0; i <= $this.productList.length; i++) {
          $this.productList[i].incart = 'false';

          for (var y = 0; y <= products.length; y++) {  
            if(products[y]) {
              if($this.productList[i].id == products[y].id) {
                $this.productList[i].incart = 'true';
              }
            }  
          }              
        }
    }).catch(result => {
          // call error popup
    }); 
  }

  /**
   *  Add to cart click method
   * 
   * @param {object} e event paramenter
   * @param {number} id id of the current product 
   */
  removeCart(e, id) {  
    
    
    e.preventDefault();
    if (typeof(Storage) !== "undefined") {
      
      if(!localStorage.products) {
          
        localStorage.setItem("products", '[]');
        this.productCart = 0;
      }

      let productsCart = JSON.parse(localStorage.products);

       
      localStorage.removeItem("products");

      let products = [];
      for (var i = 0; i <= productsCart.length; i++) {
        if(productsCart[i]) {
          if(productsCart[i].id != id) {
            let productData = {
              'id' : productsCart[i].id,
              'qnt' : productsCart[i].kg
            }
            products.push(productData);
          }   
        }             
      }

      localStorage.setItem("products", JSON.stringify(products));
      this.productCart = products.length;

      products = JSON.parse(localStorage.products);
       
      for (var i = 0; i <= this.productList.length; i++) {
        if(this.productList[i]) {
          if(this.productList[i].id == id) {
             this.productList[i].incart = 'false';
          }  
        }        
      }
    } 
  }


    /**
   *  Remove cart click method
   * 
   * @param {object} e event paramenter
   * @param {number} id id of the current product 
   */
  addToCart(e, id, qty) { 
    if(qty == '') {
      console.log("empty")
      return true;
    }
    e.preventDefault();
    if (typeof(Storage) !== "undefined") {
      
      if(!localStorage.products) {
          
        localStorage.setItem("products", '[]');
      }

      let productsCart = JSON.parse(localStorage.products);

      let productData = {
        'id' : id,
        'qnt' : qty
      }
      productsCart.push(productData);
      localStorage.removeItem("products");
      localStorage.setItem("products", JSON.stringify(productsCart));
      this.productCart = productsCart.length;

      let products = JSON.parse(localStorage.products);
       
      for (var i = 0; i <= this.productList.length; i++) {
        if(this.productList[i]) {
          if(this.productList[i].id == id) {
             this.productList[i].incart = 'true';
          } 
        }        
      }
    } 
  }
}

