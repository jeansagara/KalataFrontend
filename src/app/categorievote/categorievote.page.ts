import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionsService } from '../services/elections.service';
import { ProjetdeloisService } from '../services/projetdelois.service';
import { StorageService } from '../services/storage.service';
import { VotesService } from '../services/votes.service';

@Component({
  selector: 'app-categorievote',
  templateUrl: './categorievote.page.html',
  styleUrls: ['./categorievote.page.scss'],
})
export class CategorievotePage implements OnInit {
  typeelection: any;
  id: any
  nomelection: any
  description: any
  datefin: any
  datedebut: any
  soustitre: any
  images: any
  elec: any
  teste: any;
  eliste: any
  idelection: any

  electionn: any;
  titre: any;
  lesProjetsDeLois: any;
  truncateText!: string;
  fullText!: any;

  user: any;
  idAdministration: any;
  voterprojet: any;
  vote!: Number;

  constructor(private storageService: StorageService, private election: ElectionsService, private service: VotesService, private route: ActivatedRoute, private router: Router, private projetdeloiService: ProjetdeloisService) { }

  idtypevote: any;

  ngOnInit() {
    this.user = this.storageService.getUser().id;
    console.log(this.user.id);
    this.id = this.route.snapshot.params[`idtypevote`];
    console.log("id path" + this.idtypevote)

    this.election.listerElectionParId(this.id).subscribe(data => {
      this.elec = data,
        console.log("identifuant" + this.elec);

    });
    console.log("successsss" + this.id)
    this.election.ElectionParId(this.id).subscribe(data => {
      this.electionn = data,
        this.titre = this.electionn.nomelection;
      console.log("titre " + this.titre)
      console.log(this.electionn);
      this.idelection = this.electionn.idelection;
      console.log("successsss" + this.idelection)

    });

    //LA METHODE QUI PERMET DE D'AFFICHER UN TYPEDEVOTE PAR SON ID
    this.idtypevote = this.route.snapshot.params['idtypevote']
    console.log("avant mes donnees=======================" + this.idtypevote);

    this.service.afficherTypeElectionType(this.idtypevote).subscribe(data => {
      this.typeelection = data;
      this.eliste = data;
      this.teste = this.typeelection;
      console.log("mes elections dans " + JSON.stringify(this.typeelection));
    })

    // ====================================== RECUPERATION DES PROJETS DE LOI
    if (this.id == 2) {
      this.projetdeloiService.afficherTypeElection().subscribe(data => {
        this.lesProjetsDeLois = data
      })
    }
    // this.projetdelois.afficherTypeElection().subscribe(data =>{
    //   this.proj=data
    //   this.fullText=data[0].descrption
    //   this.truncateText=this.fullText.substring(0, 60) + "...";
    //   this.titre=data.titre
    //   console.log(data)
    // })
  }

  GoCate(id: number) {
    return this.router.navigate(['/vote', id])
  }
  // LES TRUNCATES POUR POUVOIR AFFICHER ET CACHER LE CONTENU

  isFullText: boolean = false;

  showFullText() {

    if (this.isFullText) {
      this.isFullText = false;
      this.truncateText = this.fullText.substring(0, 50) + "...";
    } else {
      this.isFullText = true;
      this.truncateText = this.fullText;
    }
  }

  fairevote(idAdministratio: any) {
    console.log(this.user)
    this.projetdeloiService.creervoteprojet(idAdministratio, this.user, this.vote).subscribe(data => {
      this.voterprojet = data
      console.log(data)

    })
  }

  afficherValuevote() {
    console.log(this.vote);
  }

}
