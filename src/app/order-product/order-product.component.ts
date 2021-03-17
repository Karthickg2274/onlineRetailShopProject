import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import swal from 'sweetalert2';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})

export class OrderProductComponent implements OnInit {
  id:any;
  product;
  orderedQuantity=1;
  ProductID:any;


  constructor(
    private route: ActivatedRoute,
    private service: OrdersService,
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.index;
    this.service.getList().subscribe(result => {
      
      result.forEach(product=>{
        if(product.productId==this.id){
          this.product = product;
        }
      })
    })
  


  }
  onSubmit(){
    
    const orderList={
      productId: this.id,
      quantity:this.orderedQuantity
    }
    if(this.orderedQuantity<=this.product.productQuantity&&this.orderedQuantity>0 ){
    this.service.orderProduct(orderList)
      .subscribe(
        ()=>{
          swal.fire(" ","Order Placed",'success');
        }
      )
    }
    else{
      swal.fire(" ","Enter Quantity Within Available Quantity",'error');
    }
  }
  checkOrderedQuantity(updatedValue){
    this.orderedQuantity=updatedValue;
    if(updatedValue > this.product.productQuantity || updatedValue <= 0 ){
      swal.fire(" ","Enter Quantity Within Available Quantity",'error');
    }
  }



}
