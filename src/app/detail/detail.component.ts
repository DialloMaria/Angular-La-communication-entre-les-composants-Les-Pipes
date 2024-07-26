import { Component, Input } from '@angular/core';
import { Produit } from '../produit/produit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() produit: Produit | null = null;
}
