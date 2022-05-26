import { Component } from '@angular/core';
import { produtos } from '../produtos';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
})
export class ProdutoListaComponent {
  produtos = produtos;
}
