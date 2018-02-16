import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from "./routes";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';


/*
const appRoutes: Routes = [  
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'products List' }
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];*/

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
	CartComponent,
	HomeComponent
  ],
  imports: [
	Routing
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )*/,
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
