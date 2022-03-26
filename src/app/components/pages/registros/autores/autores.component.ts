import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  ListaModels: Autor[] = [];

  id: number = 0;
  nombre: string = "";

  Seleccionado: boolean = false;

  

  constructor(private miService:AutoresService, private router: Router) { }

  ngOnInit(): void {
    this.cargarInfo();
  }

  nuevoModelo(){
    this.router.navigate(['/nuevoAutor']);
  }

  miFormulario = new FormGroup({
    nombre : new FormControl('', [Validators.required])
  });

  get f(): { [key: string]: AbstractControl} {return this.miFormulario.controls; }

  cargarInfo(){
    this.miService.index().subscribe({
      next: (r) => [
      console.log(r),
      this.ListaModels = r.data
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

}
