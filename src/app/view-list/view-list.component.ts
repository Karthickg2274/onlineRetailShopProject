import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

export class ViewList{
  constructor(
    public productName:String,
    public productId:String,
    public availableQuantity:number
  ){

  }
}

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  listOfProducts: ViewList[]= [];
  constructor(private product: ProductsService) {
    
   }

  ngOnInit(): void {
    
    this.product.getList().subscribe(result => {
      this.listOfProducts=result
    })

  }
  

}
