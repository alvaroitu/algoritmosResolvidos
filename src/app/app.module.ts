import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './header/header.module';
import { ContatoModule } from './contato/contato.module';
import { AlgoritmosResolvidosModule } from './algoritmos-resolvidos/algoritmos-resolvidos.module';
import { LinguagemCModule } from './linguagem-c/linguagem-c.module';
import { PythonModule } from './python/python.module';
import { JavaModule } from './java/java.module';
import { JavascriptModule } from './javascript/javascript.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    NgbModule,
    ContatoModule,
    AlgoritmosResolvidosModule,
    LinguagemCModule,
    PythonModule,
    JavaModule,
    JavascriptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
