import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
	{
		path: "",
		component: AppComponent,
		pathMatch: "full",
	}, {

		path: "products",
		component: ProductsComponent,
		pathMatch: "full"
	}
]

export const Routing = RouterModule.forRoot(routes);