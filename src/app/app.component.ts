import { Component } from '@angular/core';
import { ProduitComponent } from './produit/produit.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Communication-entre-les-composants-les-pipes';
}
