import { Injectable } from '@angular/core';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private url='https://8080-ddbbededcbeabcdcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin';
  constructor(private httpclient : HttpClient) { }
  httpOptions = {headers : new HttpHeaders({'Content-type': 'application/json'})}
  getTeams() : Observable<Team[]> {
    return this.httpclient.get<Team[]>(this.url + '/ListPlayer')
  }
  getPlayers() : Observable<Player[]> {
    return this.httpclient.get<Player[]>(this.url + '/ListPlayer')
  }

  createTeam(newTeam:Team):Observable<Team>
{
  return this.httpclient.post<Team>(this.url+'/Listmovies',newTeam,this.httpOptions)
}

}
