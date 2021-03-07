import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ViewList} from '../view-list/view-list.component';
import { environment } from 'src/environments/environment.prod';

const url = environment.apiURL+"/Product";



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
  


}
