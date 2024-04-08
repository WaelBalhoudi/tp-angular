import { Component } from '@angular/core';
import { produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent {
  listeProduit!:produit[];
  produit!:produit;
  constructor(private serviceProduit:ProduitService){

  }
  ngOnInit(){
    this.produit=new produit();
    this.produit.like=0;
    this.serviceProduit.getProduit()
      .subscribe(
        (data:produit[])=>{
          this.listeProduit=data;
          console.log(this.listeProduit)
        },
        err=>{
          console.log(err)
        }
       
      )
  }

  save(){
    this.serviceProduit.ajouterProduit(this.produit)
      .subscribe(
        ()=>{
          this.listeProduit=[this.produit,...this.listeProduit];
          this.ngOnInit();
        }
      )
  }
  deletePoduct(id:any){
    this.serviceProduit.deleteById(id)
      .subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        }
      )
  }
  getProd(product:any){
    this.produit=product;
    console.log(this.produit)
  }
  updateProduct(product:any){
    this.serviceProduit.updateById(product.id,product)
      .subscribe(
        res=>{
          console.log(res);
          
        }
      )
  }
}
 