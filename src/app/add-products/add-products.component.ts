import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor( private productsService:ProductsService) { }

  onSubmit(f:NgForm){
    this.productsService.addProduct(f.value)
      .subscribe(
        (result)=>{
          alert("Product Added");
          f.reset()
        },
        (error)=>{
          alert(error.message)
        }
      )

  }


  ngOnInit(): void {
  }

}
