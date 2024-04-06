import { Component } from '@angular/core';
import { produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent {
  listeProduit:any;
  produit!:produit;
  constructor(private serviceProduit:ProduitService){

  }
  ngOnInit(){
    this.produit=new produit();
    this.produit.like=0;
    this.serviceProduit.getProduit()
      .subscribe(
        (data)=>{
          this.listeProduit=data;
          console.log(this.listeProduit)
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
}
 