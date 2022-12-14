import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'',component:ProductsComponent,pathMatch:'full'},
  {path:'cart',component:CartComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
