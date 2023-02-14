import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProjetdeloisService {
  classementprojet: any;

  constructor(private http:HttpClient) { }
  afficherTypeElection(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/projetdelois/afficher`);
  }

  afficherTypeElectionParId(id : number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/projetdelois/afficher/${id}`);
  }

  // projet de lois
  creervoteprojet(idAdministration:Number,idutilisateur : Number, vote : Number,latitude:any,longitude:any): Observable<any> {
    console.log("iduser"+idutilisateur);
    return this.http.post(`http://localhost:8080/api/vote/voteprojets/${idAdministration}/${idutilisateur}/${vote}/${latitude}/${longitude}`,{})  
  }
  


}
