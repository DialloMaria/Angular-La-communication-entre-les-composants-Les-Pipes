import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

export interface Produit {
  titre: string;
  prix: number;
  imageUrl: string;
}

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, DetailComponent,DialogModule,ButtonModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  produits: Produit[] = [
    { titre: 'Produit 1', prix: 29.99, imageUrl: 'https://i.pinimg.com/474x/9e/b0/4e/9eb04ed549c3359f41adf80bb6d6450c.jpg' },
    { titre: 'Produit 2', prix: 49.99, imageUrl: 'https://i.pinimg.com/474x/47/de/8f/47de8fddbff5224c3999a010ef629549.jpg' },
    { titre: 'Produit 3', prix: 19.99, imageUrl: 'https://i.pinimg.com/474x/21/44/4c/21444cb090576f991e20ac0fdd5fa568.jpg' },
    { titre: 'Produit 4', prix: 19.50, imageUrl: 'https://i.pinimg.com/474x/2b/ba/3d/2bba3d19b14da1ebec6929e622bd5559.jpg' },
  ];
  
  selectedProduit: Produit | null = null;

  afficherDetail(produit: Produit): void {
    this.selectedProduit = produit;
  }
  
}
