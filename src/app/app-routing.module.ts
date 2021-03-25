import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewListComponent } from './view-list/view-list.component';

const routes: Routes = [
  {path:'view-list',component:ViewListComponent},
  {path:'add-products',component:AddProductsComponent},
  {path:'order-products/:index',component:OrderProductComponent},
  {path:'update-product/:productId',component:UpdateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ViewListComponent,AddProductsComponent,OrderProductComponent,UpdateProductComponent]