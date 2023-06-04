import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPostagensComponent } from './components/card-postagens/card-postagens.component';
import { NavPostagemComponent } from './components/nav-postagem/nav-postagem.component';
import { FormPostagemComponent } from './components/form-postagem/form-postagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardPostagensComponent,
    NavPostagemComponent,
    FormPostagemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
