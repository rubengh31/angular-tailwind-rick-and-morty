import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditProduct, NewProduct, Product } from './crud.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private API_URL = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}`);
  }

  readProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

  createProduct(body: NewProduct): Observable<NewProduct> {
    return this.http.post<NewProduct>(`${this.API_URL}`, body);
  }

  updateProduct(id: number, body: EditProduct): Observable<EditProduct> {
    return this.http.put<EditProduct>(`${this.API_URL}/${id}`, body);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API_URL}/${id}`);
  }
}
