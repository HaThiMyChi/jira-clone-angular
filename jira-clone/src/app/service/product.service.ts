import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
    providedIn: 'root',
})

export class ProductService {
    storage = window.localStorage;
    apiUrl = 'http://localhost:4200/assets/data.json';

    constructor(private http: HttpClient) {}

    getProduct(): Observable<Product[]> {
        console.log('get product')
        return this.http.get<Product[]>(this.apiUrl);
    }
}