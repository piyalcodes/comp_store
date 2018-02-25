import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
	{
		path: "",
		component: ProductsComponent,
		pathMatch: "full",
	},
	{
		path: "home",
		component: ProductsComponent,
		pathMatch: "full",
	}, 
	{

		path: "products",
		component: ProductsComponent,
		pathMatch: "full"
	}, {

		path: "cart",
		component: CartComponent,
		pathMatch: "full"
	}, {
		
				path: "contact",
				component: ContactComponent,
				pathMatch: "full"
			}/*,{

		path: "**",
		component: NotFoundComponent
	}*/
]

export const Routing = RouterModule.forRoot(routes);
