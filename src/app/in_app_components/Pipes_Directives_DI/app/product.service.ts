import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts() {
    return [
      { name: 'wireless mouse', price: 29.99, addedOn: new Date(), inStock: true },
      { name: 'mechanical keyboard', price: 89.5, addedOn: new Date(), inStock: false },
      { name: 'webcam hd', price: 59.0, addedOn: new Date(), inStock: true }
    ];
  }
}
