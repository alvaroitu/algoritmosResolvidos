import { PythonComponent } from './python/python.component';
import { LinguagemCComponent } from './linguagem-c/linguagem-c.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JavaComponent } from './java/java.component';
import { AlgoritmosResolvidosComponent } from './algoritmos-resolvidos/algoritmos-resolvidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AlgoritmosResolvidosComponent },
  {path: 'java', component: JavaComponent},
  {path: 'javascript', component: JavascriptComponent},
  {path: 'linguagemC', component: LinguagemCComponent},
  {path: 'python', component: PythonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
