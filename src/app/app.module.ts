import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from "./routes";
import { HttpClientModule } from '@angular/common/http';



import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
 

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
	CartComponent,
	HomeComponent,
	ContactComponent
  ],
  imports: [
	Routing,
    BrowserModule, 
    NgbModule, 
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlNpqv6aQIZ6O_RCOhbKbX8hzJgE7_980'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
