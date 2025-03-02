import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  productCount: string[] = ['1', '2', '3', '4', '5'];
  totalPrice: number | string = '';

  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProduct();
    this.calculateTotal();
  }

  deleteItem(id: number) {
    const storageProducts = this.cartService.getCartProduct();
    const products = storageProducts.filter(
      (product: Product) => product.id !== id
    );
    window.localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
    this.refresh();
    this.calculateTotal();

  }

  selectChange(value:string, product: Product) {
    console.log('value select change', value);
    console.log('value select change product', product);
    const index = this.cartProducts.indexOf(product); // indexOf() là một phương thức được sử dụng để tìm vị trí (chỉ số) của một phần tử trong một mảng hoặc chuỗi
    console.log('index', index)
    this.cartProducts[index] = product;
    this.cartProducts[index].amount = value;
    localStorage.setItem('products', JSON.stringify(this.cartProducts));
    this.calculateTotal();
    this.refresh();

  }

  refresh() : void {
    window.location.reload();
  }

  calculateTotal() {
    this.totalPrice = this.cartProducts.reduce((acc, item) => {
      this.totalPrice = parseFloat(
        (acc + item.price * Number(item.amount)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }

  onSubmit(value: any) {
    this.cartService.clearCart();
    this.route.navigate([`success/${value.firstName}/${this.totalPrice}`])
  }

}
