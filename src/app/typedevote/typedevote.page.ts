import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { VotesService } from '../services/votes.service';

@Component({
  selector: 'app-typedevote',
  templateUrl: './typedevote.page.html',
  styleUrls: ['./typedevote.page.scss'],
})
export class TypedevotePage implements OnInit {
  searchTerm: string | undefined;
  candidats = [];

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  showElecteur = false;

  typeelection: any;
  projetdelois: any;
  election: any;
  id:any
  user: any;
  constructor(private service:VotesService,private route:ActivatedRoute,private storageService:StorageService ) { }

  ngOnInit() {
    this.user = this.storageService.getUser().roles;
    console.log(this.user)
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.showElecteur = this.roles.includes('ROLE_ELECTEUR');
    }
    


    // console.log("avant mes donnees=======================");
    this.service.afficherTypeElection().subscribe(data=>{
      this.typeelection=data;
      console.log(this.typeelection)
      this.projetdelois = this.typeelection[1],
      this.election = this.typeelection[0]
      console.log(this.typeelection[0])
      console.log("mes elections"+ JSON.stringify(this.typeelection));
    })
  }
  

}
