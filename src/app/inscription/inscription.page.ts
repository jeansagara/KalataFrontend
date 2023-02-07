import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  
  dateValue: any;

  form:any={
    username:null,
        biometrie:null,
        telephone:null,
        sexe:null,
        email:null,
        password:null,
  };

  forme:any={
    username:"",
        biometrie:"",
        telephone:"",
        sexe:"",
        email:"",
        password:"",
  };
  
  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';

  constructor(private authService:AuthService, private route:Router) { }

  
  ngOnInit() {
  }
   onSubmit(): void {
    const { username,biometrie,telephone,sexe,email, password} = this.form;

    console.log("je suis cliqué")
    this.authService.inscription(username,biometrie,this.dateValue,telephone,sexe, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.forme
        this.route.navigateByUrl("/tabs/connexion")

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
