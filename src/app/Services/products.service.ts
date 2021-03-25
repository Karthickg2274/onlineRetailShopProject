import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewList } from '../view-list/view-list.component';
import { environment } from 'src/environments/environment.prod';

const url = environment.apiURL + "/product";



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
    console.log(url)
    return this.http.get<ViewList[]>(url)
  }

  addProduct(data): Observable<any> {
    return this.http.post(url, data)
  }

  deleteProduct(data): Observable<any> {
    console.log({ url, data })
    // return this.http.delete(`${url}/${data}`)
    return this.http.delete(url + "/" + data)
  }
  updateProduct(id,data): Observable<any> {
    console.log({ url, data })
    
    return this.http.put(url + "/" + id,data)
  }



}
