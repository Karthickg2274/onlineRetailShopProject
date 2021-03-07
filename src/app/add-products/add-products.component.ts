import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productName:any;
  productQuantity:any;

  constructor( private productsService:ProductsService) { }

  onSubmit(){
    const addList={
      productName : this.productName,
      availableQuantity:this.productQuantity
    }
    if(this.productName >='a'  && this.productName <= 'z'  && this.productName.length<20 && this.productQuantity >=0  && this.productQuantity <= 10000 || this.productName >='A'  && this.productName <= 'Z'  && this.productQuantity >=0  && this.productQuantity <= 10000 && this.productName.length<20){
      this.productsService.addProduct(addList)
      .subscribe(
        ()=>{
          swal.fire(" ","Product Added",'success');
        },
        (error)=>{
          swal.fire(" ",error,'error');
        }
      )
     }
     else{
      swal.fire(" ","Enter valid Input",'error');
    }
    

  }


  ngOnInit(): void {
  }

  
  checkProductName(updatedValue){
    this.productName=updatedValue;
    if(updatedValue >='a'  && updatedValue <= 'z' && updatedValue.length<20 || updatedValue >='A'  && updatedValue <= 'Z' && updatedValue.length<20){
      
    }
    else{
      swal.fire(" ","Enter valid Input",'error');
    }
    
  }
  checkAddQuantity(updatedValue){
    this.productQuantity=updatedValue;
    if(updatedValue >=0  && updatedValue <= 10000  ){
      
    }
    else{
      swal.fire(" ","Enter valid Input",'error');
    }
  }

}
