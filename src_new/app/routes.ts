import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
		pathMatch: "full",
	}, {

		path: "products",
		component: ProductsComponent,
		pathMatch: "full"
	}, {

		path: "cart",
		component: CartComponent,
		pathMatch: "full"
	}/*,{

		path: "**",
		component: NotFoundComponent
	}*/
]

export const Routing = RouterModule.forRoot(routes);
