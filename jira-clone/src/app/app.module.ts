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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
