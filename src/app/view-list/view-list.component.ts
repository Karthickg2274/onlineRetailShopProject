import { Component, OnInit } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';

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
  constructor(private http:HttpClient,private product: ProductsService) {
    
   }

  ngOnInit(): void {
    
    this.product.getList().subscribe(result => {console.log(result);
      this.listOfProducts=result
    })

  }
  

}
