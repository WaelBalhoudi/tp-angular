import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url='http://localhost:3000/produits';
  constructor(private http:HttpClient) { }
  getProduit(){
    // return this.http.get<produit[]>(this.url);
    return this.http.get(this.url);
  }
  ajouterProduit(p:produit){
    return this.http.post(this.url,p);
  }
  
}
