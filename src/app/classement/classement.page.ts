import { Component, OnInit } from '@angular/core';
import { ClassementelectionService } from '../services/classementelection.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.page.html',
  styleUrls: ['./classement.page.scss'],
})
export class ClassementPage implements OnInit {
  classements: any;
  imagecandidat:any=''
  nomparti:any=''
  pourcentage:any
  nomcandidat:any
  idcandidat:any
  premier: any;


  constructor( private classement:ClassementelectionService) { }

  ngOnInit() {
    
    console.log(this.classements)
    this.classement.classementelection().subscribe(data => {
      console.log(data)
     this.classements=data
      this.imagecandidat=data.imagecandidat
      this.nomparti=data.nomparti
      this.pourcentage=data.pourcentage
      this.idcandidat=data.idcandidat
      this.nomcandidat=data.nomcandidat
    })

}
}