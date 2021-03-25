import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productName: any;
  productQuantity: any;
  id: any;
  product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  onSubmit() {
    if (this.productName == null) {
      this.productName = this.product.productName;
    }
    if (this.productQuantity == null) {
      this.productQuantity = this.product.productQuantity;
    }
    const addList = {
      productName: this.productName,
      productQuantity: this.productQuantity
    }
    this.productsService.updateProduct(this.product.productId, addList)
      .subscribe(
        () => {
          swal.fire(" ", "Product Updated", 'success');
        },
        (error) => {
          swal.fire(" ", error, 'error');
        }
      )



  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.productId;
    this.productsService.getList().subscribe(result => {

      result.forEach(product => {
        if (product.productId == this.id) {
          this.product = product;
        }
      })
    })
  }


  checkProductName(updatedValue) {
    this.productName = updatedValue;
    if (updatedValue.length > 20) {
      swal.fire(" ", "Enter Valid Product Name", 'error');
      this.productName = "";
    }

  }
  checkAddQuantity(updatedValue) {
    this.productQuantity = updatedValue;
    if (updatedValue <= 0 || updatedValue >= 10000) {
      swal.fire(" ", "Enter Valid Product Quantity Within 10000", 'error');
      this.productQuantity = 1;
    }
  }


}
