import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url='http://localhost:3000/produits';
  constructor(private http:HttpClient) { }
  getProduit(){
    return this.http.get<produit[]>(this.url);
  }
  ajouterProduit(p:produit){
    return this.http.post(this.url,p);
  }
  deleteById(id: string): Observable<any> {
    return this.http.delete(this.url+"/"+id);
  }
  updateById(id: string, updatedProduct: any): Observable<any> {
    return this.http.put(this.url+"/"+id, updatedProduct);
  }
  getById(id: string): Observable<any> {
    return this.http.get(this.url+"/"+id);
  }
  
}
