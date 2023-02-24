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
  searchText: any;
  deuxieme: any;
  classements1: any;
  candidat: any;
  voir: any;
  candidats: any;
  liste: any


  constructor( private classement: ClassementelectionService) { }

  ngOnInit() {
    
    console.log(this.classements)
     
    this.classement.classementelection().subscribe(data => {
      console.log(data)
      console.log("classe1")
      console.log(data.nomcandidat)
      this.classements=data;
      this.imagecandidat=data.imagecandidat
      this.nomparti=data.nomparti
      this.pourcentage=data.pourcentage
      this.idcandidat=data.idcandidat
      this.nomcandidat=data.nomcandidat

   console.log("mes ee conhggfffgh"+JSON.stringify( this.classements))
     
    });

    // this.classement.classementelection().subscribe(data => {
    //   console.log(data)
    //   this.classements1=data
    //   console.log(this.classements1)

    
    // });

    this.classement.afficherElectionandidat().subscribe(data =>{
     
      this.candidats=data;
      console.log('dfghjhgfdg', data);
      
      
    for(let moi of this.candidats)
        this.voir = moi.nomcandidat
      console.log("afiche candidatttttttttttttttttttttt")
      console.log(data)
    })


    

}
}