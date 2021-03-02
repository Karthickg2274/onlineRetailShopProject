import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Products } from './Products';
import{ViewList} from './view-list/view-list.component';
const url = "https://uiexercise.onemindindia.com/api/Product";

const orderUrl = "https://uiexercise.onemindindia.com/api/OrderProducts";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
    
   }
  listProducts?: ViewList[];


  getList(): Observable<ViewList[]> {
    return this.http.get<ViewList[]>(url)
  }

  addProduct(data): Observable<any> {
    return this.http.post(url, data)
  }
  
  orderProduct(data): Observable<any> {
    return this.http.post(orderUrl, data)
  }

}
