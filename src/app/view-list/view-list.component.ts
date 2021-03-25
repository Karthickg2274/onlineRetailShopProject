import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import swal from 'sweetalert2';


export class ViewList {
  constructor(
    public productName: String,
    public productId: String,
    public productQuantity: number
  ) {

  }
}

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  listOfProducts: ViewList[] = [];
  displayedColumns: string[] = ['Name', 'Available Quantity'];


  constructor(private product: ProductsService) {

  }

  ngOnInit(): void {

    this.product.getList().subscribe(result => {
      this.listOfProducts = result;
      console.log(this.listOfProducts)

    })
  }

  onDelete(productId) {
    this.product.deleteProduct(productId)
      .subscribe(
        () => {
          swal.fire(" ", "Product Deleted", 'success');

        }
      )
    setTimeout(() => {
      this.product.getList().subscribe(result => {
        this.listOfProducts = result
      })
    }, 3000);
  }
}







