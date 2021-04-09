import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Importacion de modulos de la app
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, GifsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
