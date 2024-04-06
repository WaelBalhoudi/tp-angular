import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

const Router:Routes=[
 
];

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Router),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
