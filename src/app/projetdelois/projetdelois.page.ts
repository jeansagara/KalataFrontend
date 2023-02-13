import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetdeloisService } from '../services/projetdelois.service';
import { VotesService } from '../services/votes.service';

@Component({
  selector: 'app-projetdelois',
  templateUrl: './projetdelois.page.html',
  styleUrls: ['./projetdelois.page.scss'],
})
export class ProjetdeloisPage implements OnInit {
  idAdministration: any;
  titre: any = '';
  image: any;
  descrption: any;
  datefin: any;
  datedebut: any;
  nbredeselus: any;
  pour: any;
  contre: any;
  neutre: any;
  totalvote: any;
  status: any;
  id: any;
  proj: any
  voterprojet: any;
  user: any;
  vote!: Number;
  fullText!: string
  truncateText!: string

  constructor(private projetdelois: ProjetdeloisService,
    private service: VotesService,
    private route: ActivatedRoute,
    private router: Router) { }
  idtypevote: any;


  ngOnInit() {
    this.user =
      this.id = this.route.snapshot.params[`idtypevote`];
    console.log("id path" + this.idtypevote)

    // this.projetdelois.afficherTypeElection().subscribe(data => {
    //   this.proj = data
    //   console.log("-------------fdattyt---"+data)
    //   this.fullText = data[0].descrption
    //   console.log("---------fulltext------------"+this.fullText)
    //   this.truncateText = this.fullText.substring(0, 60) + "...";
    //   this.titre = data.titre
    //   console.log(data)
    // })
  }

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

    fairevote() {
    this.projetdelois.creervoteprojet(this.idAdministration, this.user, this.vote).subscribe(data => {
      this.voterprojet = data

    })
  }


  afficherValuevote() {
    console.log(this.vote);
  }

}
