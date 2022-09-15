import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Products } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  path="http://localhost:8080/api/products"

  getProducts():Observable<any>{

    return this.http.get<any>(`${this.path}/${"getAll"}`)

  }
}


