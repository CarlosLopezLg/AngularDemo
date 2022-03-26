import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { EsperaAnimComponent } from './components/pages/espera-anim/espera-anim.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MiLoginComponent } from './components/pages/mi-login/mi-login.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AltaPrestamosComponent } from './components/pages/prestamos/alta-prestamos/alta-prestamos.component';
import { VerPrestamosComponent } from './components/pages/prestamos/ver-prestamos/ver-prestamos.component';
import { AutoresComponent } from './components/pages/registros/autores/autores.component';
import { CategoriasComponent } from './components/pages/registros/categorias/categorias.component';
import { EditorialesComponent } from './components/pages/registros/editoriales/editoriales.component';
import { LibrosComponent } from './components/pages/registros/libros/libros.component';
import { PerfilComponent } from './components/pages/usuario/perfil/perfil.component';


const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'secret', component: EsperaAnimComponent},
  //PRESTAMOS
  {path: 'altaPrestamo', component: AltaPrestamosComponent},
  {path: 'verPrestamo', component: VerPrestamosComponent},
  //REGISTROS
  {path: 'autores', component: AutoresComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'editoriales', component: EditorialesComponent},
  {path: 'libros', component: LibrosComponent},
  //USUARIO
  {path: 'miPerfil', component: PerfilComponent},
  //MASTER
  {path: 'usuarios', component: EsperaAnimComponent},
  //LOGIN
  {path: 'login', component: MiLoginComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
