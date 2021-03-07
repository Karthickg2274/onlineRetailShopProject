import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ViewList } from '../view-list/view-list.component';

const url = environment.apiURL+"/Product";
const orderUrl = environment.apiURL+"/OrderProducts";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  

  constructor(
    private http: HttpClient
  ) { }

  
  listProducts?: ViewList[];


  getList(): Observable<ViewList[]> {
    return this.http.get<ViewList[]>(url)
  }


  orderProduct(data): Observable<any> {
    return this.http.post(orderUrl, data)
  }
}
