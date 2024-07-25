import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produit {
  id: number;
  titre: string;
  prix: number;
  imageUrl: string; 
}
@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  produits: Produit[] = [
    { id: 1, titre: 'Produit 1', prix: 29.99, imageUrl: 'https://img.freepik.com/photos-gratuite/fraise-isole-fond-blanc-close-up_93675-128535.jpg?t=st=1721922333~exp=1721925933~hmac=f3bc3ce463e7c932e556e08b2982c235a82e57a41455471872621afd9d9ff5dc&w=900 ' },
    { id: 2, titre: 'Produit 2', prix: 49.99, imageUrl: 'https://img.freepik.com/photos-gratuite/fin-haut-frais-pomme_144627-14640.jpg?ga=GA1.1.1277564984.1709547824&semt=sph' },
    { id: 3, titre: 'Produit 3', prix: 19.99, imageUrl: 'https://img.freepik.com/vecteurs-libre/regime-banane-jaune-mur-vecteur-isole-fond-blanc_1284-45456.jpg?ga=GA1.1.1277564984.1709547824&semt=sph' },
    { id: 4, titre: 'Produit 4', prix: 19.50, imageUrl: 'https://img.freepik.com/photos-gratuite/orange-blanc-blanc_144627-16571.jpg?ga=GA1.1.1277564984.1709547824&semt=sph' },
    { id: 5, titre: 'Produit 5', prix: 19.99, imageUrl: 'https://img.freepik.com/vecteurs-libre/vector-mures-cubes-mangue-jaune-orange-rouge-entier-tranche-feuille-isole-fond-blanc_1284-45465.jpg?ga=GA1.1.1277564984.1709547824&semt=sph' },
    { id: 6, titre: 'Produit 6', prix: 19.99, imageUrl: 'https://img.freepik.com/photos-gratuite/raisins-rouges-frais-feuilles-isolees-blanc_167946-37.jpg?ga=GA1.1.1277564984.1709547824&semt=sph' }

  ];

}
