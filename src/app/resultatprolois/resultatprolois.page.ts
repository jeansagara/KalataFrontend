import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassementprojetdeloisService } from '../services/classementprojetdelois.service';
import { ProjetdeloisService } from '../services/projetdelois.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-resultatprolois',
  templateUrl: './resultatprolois.page.html',
  styleUrls: ['./resultatprolois.page.scss'],
})
export class ResultatproloisPage implements OnInit {
  pour: any;
  contre: any;
  neutre: any;
  user: any;
  id: any;
  proj: any
  idtypevote: any;
  idAdministration: any;
  vote!: Number;
  voterprojet: any;
  resultatsprojets: any;
  userLatitude: any;
  userLongitude: any;

  constructor(private projetdelois: ProjetdeloisService,
    private route: ActivatedRoute,
    private serviceClassement: ClassementprojetdeloisService,
    private storageService: StorageService,
    private router: Router) { }



  ngOnInit() {
    this.user= this.id = this.storageService.getUser();
    console.log("id path" + this.user)

    this.serviceClassement.classementprojet().subscribe(data => {
      this.proj = data
    })

  }
  fairevote() {
    this.projetdelois.creervoteprojet(this.idAdministration, this.user, this.vote, this.userLatitude,this.userLongitude).subscribe(data => {
      this.voterprojet = data

    })
  }

}
