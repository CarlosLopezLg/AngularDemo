import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { EsperaAnimComponent } from './components/pages/espera-anim/espera-anim.component';
import { RouterModule, Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { MiLoginComponent } from './components/pages/mi-login/mi-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AutoresComponent } from './components/pages/registros/autores/autores.component';
import { CategoriasComponent } from './components/pages/registros/categorias/categorias.component';
import { EditorialesComponent } from './components/pages/registros/editoriales/editoriales.component';
import { LibrosComponent } from './components/pages/registros/libros/libros.component';
import { UsuariosComponent } from './components/pages/master/usuarios/usuarios.component';
import { VerPrestamosComponent } from './components/pages/prestamos/ver-prestamos/ver-prestamos.component';
import { AltaPrestamosComponent } from './components/pages/prestamos/alta-prestamos/alta-prestamos.component';
import { PerfilComponent } from './components/pages/usuario/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EsperaAnimComponent,
    PageNotFoundComponent,
    MiLoginComponent,
    LoadingScreenComponent,
    HomeComponent,
    AutoresComponent,
    CategoriasComponent,
    EditorialesComponent,
    LibrosComponent,
    UsuariosComponent,
    VerPrestamosComponent,
    AltaPrestamosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //Nesesario para forms
    FormsModule, //Necesario para ngModel
    HttpClientModule
  ],
  providers: [
    /*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
