import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private httpclient : HttpClient) { }

  private url = 'https://8080-ddbbededcbeabcdcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin'


  httpOptions = {headers : new HttpHeaders({'Content-type': 'application/json'})}
  
  getPlayers() : Observable<Player[]> {
    return this.httpclient.get<Player[]>(this.url + '/ListPlayer')
  }
  
  getOnePlayer(id : number) : Observable<Player> {
    return this.httpclient.get<Player>(this.url + '/ListPlayer/' + id)
  }
  
  getPlayer(teamId : number) : Observable<Player[]> {
    return this.httpclient.get<Player[]>(this.url + '/DisplayTeamPlayers/(id)?id=' + teamId)
  }

  AddPlayer(player : Player) : Observable<Player> {
    return this.httpclient.post<Player>(this.url + '/AddPlayer', player, this.httpOptions)
  }

  EditPlayer(player : Player) : Observable<Player> {
    return this.httpclient.put<Player>(this.url + '/EditPlayer/' + player.id, player, this.httpOptions)
  }

  DeletePlayer(player : Player) : Observable<Player> {
    return this.httpclient.delete<Player>(this.url + '/DeletePlayer/' + player.id, this.httpOptions)
  }

  
  
  

  
  getTeams() : Observable<Team[]> {
    return this.httpclient.get<Team[]>(this.url + '/ListTeam')
  }

  getTeam(id : number) : Observable<Team> {
    return this.httpclient.get<Team>(this.url + '/ListTeam/' + id)
  }
  

  AddTeam(team : Team) : Observable<Team> {
    return this.httpclient.post<Team>(this.url + '/AddTeam', team, this.httpOptions)
  }

  EditTeam(team : Team) : Observable<Team> {
    return this.httpclient.put<Team>(this.url + '/EditTeam/' + team.id, team, this.httpOptions)
  }

  DeleteTeam(team : Team) : Observable<Team> {
    return this.httpclient.delete<Team>(this.url + '/DeleteTeam/' + team.id, this.httpOptions)
  }




}
