import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header/header.component';
import { CartComponent } from './component/cart/cart/cart.component';
import { ProductListComponent } from './component/product-list/product-list/product-list.component';
import { ProductComponent } from './component/product/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { ProductDetailComponent } from './component/product-detail/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
