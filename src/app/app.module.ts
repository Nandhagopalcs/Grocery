import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import { CategoryComponent } from './component/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SubcatComponent } from './componen/subcat/subcat.component';
import { ProdComponent } from './component/prod/prod.component';
import { SubComponent } from './component/sub/sub.component';
import { SingleComponent } from './pages/single/single.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    CategoryComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    SubcatComponent,
    ProdComponent,
    SubComponent,
    SingleComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
