import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  product!: Product;
  products!: Product[];
  quality: number = 1;
  id!: number;
  productCount: string[] = ['1', '2', '3', '4', '5'];
  selectedItem = '1';

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.productService
      .getProduct()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res) => {
          this.products = res;
          console.log('products', this.products)
          this.product = this.getProductDetails(this.id);
        },
        error: (err) => console.log(err),
      });
  }

  getProductDetails(id: any) {
    return this.products.filter((item) => item.id === id)[0]; // [0] được sử dụng để lấy phần tử đầu tiên của mảng kết quả từ filter()
    // vi filter() tra ve mot mang, neu co it nhat mot san pham thoa man dieu kien, phan tu dau tien cua mang o vi tri 0 se duoc lay ra
    // neu ko co san pham nao thoa man filter() tra ve []
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }

  addProductToCart(product: Product) : void {
    console.log('product ====', product)
    const cartProducts: Product[] = this.cartService.getCartProduct();
    let productInCart = cartProducts.find((element) => element.id === product.id);
    if (productInCart) {
      productInCart.amount = this.selectedItem;
      productInCart ? this.productService.addProduct(cartProducts) : null;
    } else {
      cartProducts.push(Object.assign(product, {amount: this.selectedItem}));
      this.productService.addProduct(cartProducts);
      const message = `${product.name} has been added to your cart.`;
      alert(message)
    }
    this.router.navigate(['/cart']);
  }

}
