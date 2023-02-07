import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VotesService } from '../services/votes.service';

@Component({
  selector: 'app-typedevote',
  templateUrl: './typedevote.page.html',
  styleUrls: ['./typedevote.page.scss'],
})
export class TypedevotePage implements OnInit {
  searchTerm: string | undefined;
  candidats = [];

  typeelection: any;
  id:any
  constructor(private service:VotesService,private route:ActivatedRoute ) { }

  ngOnInit() {

    // console.log("avant mes donnees=======================");
    this.service.afficherTypeElection().subscribe(data=>{
      this.typeelection=data;
      console.log(this.typeelection)
      console.log("mes elections"+ JSON.stringify(this.typeelection));
    })
  }
  

}
