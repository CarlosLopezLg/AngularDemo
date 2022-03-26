import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { GlobalesService } from 'src/app/services/globales.service';

@Component({
  selector: 'app-mi-login',
  templateUrl: './mi-login.component.html',
  styleUrls: ['./mi-login.component.scss']
})
export class MiLoginComponent implements OnInit {

  constructor(
    private variablesGlobales: GlobalesService,
    private authService: AuthUserService,
    private cookie: CookieService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  get f(): { [key: string]: AbstractControl} {return this.loginForm.controls; }

  login(){
    if (this.loginForm.valid){

      //FORMULARIO
      const miRequest = {
        'email':this.f['email'].value, 
        'password':this.f['password'].value 
      }

      this.variablesGlobales.isLoading = true;
      console.log(miRequest);

      this.authService.login(miRequest).subscribe({
        next: (r) => [
        this.cookie.set("Token", "aquí va el token"),
        this.cookie.set("ID", "aquí va la id"),  
        this.variablesGlobales.setIsLogged(true),
        this.router.navigate(['/home'])
      ],
        error: (e) => [console.error(e), this.variablesGlobales.isLoading = false],
        complete: () => [console.info('complete'), this.variablesGlobales.isLoading = false]
    })
    }
  }

}
