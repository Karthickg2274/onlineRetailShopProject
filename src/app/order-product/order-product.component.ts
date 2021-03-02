import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';
import { ViewList } from '../view-list/view-list.component';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  id=0;
  listOfProducts: ViewList[]= [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private http:HttpClient
    
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.index;
    this.service.getList().subscribe(result => {console.log(result);
      this.listOfProducts=result
    })
  


  }
  onSubmit(f:NgForm){
    const orderList={
      productId: this.listOfProducts[this.id].productId,
      ...f.value
    }
    this.service.orderProduct(orderList)
      .subscribe(
        (result)=>{
          alert("Order Placed");
          f.reset()
        },
        (error)=>{
          alert(error.message)
        }
      )

  }

}
