import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projetdelois',
  templateUrl: './projetdelois.page.html',
  styleUrls: ['./projetdelois.page.scss'],
})
export class ProjetdeloisPage implements OnInit {
  fullText: string = "L'avortement se définit comme l'interruption avant son terme du processus de gestation, c'est-à-dire le développement qui commence à la conception par la fécondation d'un ovule par un spermatozoïde formant ainsi un œuf, se poursuit par la croissance de l'embryon, puis du fœtus, et qui s'achève normalement à terme par la naissance d'un nouvel individu de l'espèce.";
  truncateText: string = this.fullText.substring(0, 60) + "...";
  isFullText: boolean = false;

  showFullText() {
    if(this.isFullText) {
      this.isFullText = false;
      this.truncateText = this.fullText.substring(0, 50) + "...";
    } else {
      this.isFullText = true;
      this.truncateText = this.fullText;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
