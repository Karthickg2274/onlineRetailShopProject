import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import  { HttpClientModule } from '@angular/common/http';
import { OrderProductComponent } from './order-product/order-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
// import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // MatTableModule,
    OrderProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
