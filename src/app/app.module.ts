import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms'; // Para usar forms
import { SearchService } from './search/search.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchCritComponent } from './search/search-crit/search-crit.component';
import { SearchResComponent } from './search/search-res/search-res.component';
import { ContactComponent } from './contact/contact.component';
import {MatGridListModule} from '@angular/material/grid-list'; // Para grillas
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SearchCritComponent,
    SearchResComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
