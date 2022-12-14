import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { ProductCategoriesComponent } from './components/products/product-categories/product-categories.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersModule } from './components/users/users.module';
import { ProductsModule } from './components/products/products.module';
import { OrdersModule } from './components/orders/orders.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SideNavbarComponent,
    ProductCategoriesComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
