import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        
        this.sleep(2000).then(() => {
          // Call function after the sleep()
          console.log('Sleep function is working!') 
          this.route.navigate(['/connexion'])
        }
          )
        //=========================================================

       
        

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
            // Swal message de retour lors du clique de botton
            // Swal.fire({

            //   heightAuto: false,
            //   icon: 'success',
            //   title: 'Enregistrer avec succès',
            //   showConfirmButton: false,
            //   timer: 1500
            // })
  }
  // FONCTION POUR PRENDRE UN PEU DE TEMPS AVANT D'ÊTRE REDIRIGER
  sleep(duration:any) {
    return new Promise((resolve) => setTimeout(resolve, duration)); 
  }
}
