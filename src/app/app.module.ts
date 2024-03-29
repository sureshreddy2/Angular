import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Material.module';
import { SelectedBookToBuyComponent } from './BuyBook/selected-book-to-buy/selected-book-to-buy.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AllBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatFormFieldModule
  ],
 
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SelectedBookToBuyComponent]
})
export class AppModule { }
