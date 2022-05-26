import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BarraNavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
