import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/vote';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private http: HttpClient) { }

  // METHODE PERMETTANT D'AFFICHER
  afficherTypeElection(): Observable<any> {
    return this.http.get("http://localhost:8080/typevote/afficher");
  }  

  afficherTypeElectionType(idtypevote:number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/elections/type-vote/${idtypevote}`);
  }

  
  // VOTER POUR UN CANDIDATS AUX CHOIX
  // creervotecandidats(idutilisateur:Number,idelection : Number, id_candidat : Number): Observable<any> {
  // //  let data = new FormData()
  // console.log("iduser"+idutilisateur);
  //  // return this.http.post(`http://localhost:8080/api/vote/creervote/${idutilisateur}/${idelection}/${id_candidat}`,)  
  //  return this.http.post(`http://localhost:8080/api/vote/creervote/${idutilisateur}/${idelection}/${id_candidat}`,{})                         
  // }


    creervotecandidats(idutilisateur:Number,idelection : Number, id_candidat : Number,latitude:any,longitude:any): Observable<any> {
  //  let data = new FormData()
  console.log("iduser"+idutilisateur);
   // return this.http.post(`http://localhost:8080/api/vote/creervote/${idutilisateur}/${idelection}/${id_candidat}`,)  
   return this.http.post(`http://localhost:8080/api/vote/creervote/${idutilisateur}/${idelection}/${id_candidat}/${latitude}/${longitude}`,{})                         
  }
}
