import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = `http://localhost:8080/api/elections`;

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http: HttpClient) { }
 

  listerElectionParId(id:any): Observable<any>{
    return this.http.get(`${AUTH_API}/afficher/${id}`);
  }

  ElectionParId(id:any): Observable<any>{
    return this.http.get(`${AUTH_API}/type-vote/${id}`);
  }



















}
