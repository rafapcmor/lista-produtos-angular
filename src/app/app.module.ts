import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: ProdutoListaComponent }]),
  ],
  declarations: [AppComponent, BarraNavComponent, ProdutoListaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
