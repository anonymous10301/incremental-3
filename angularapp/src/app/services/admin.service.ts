import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { resourceUsage } from 'process';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string="https://8080-ddbbededcbeabcdcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  constructor(private http:HttpClient) { }
  getPlayers():Observable<any[]>
  {
    return this.http.get<any[]>(this.url+'/ListPlayers')
  }
  getPlayerById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+'/GetPlayer/'+id)
  }
  deletePlayer(id:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'/DeletePlayer/'+id)
  }
  httpOption={headers:new HttpHeaders({'Content-type':'application/json'})}
  addPlayer(pl:any):Observable<any>
  {
    return this.http.post<any>(this.url+'/AddPlayer',pl,this.httpOption)
  }
  editPlayer(p:any):Observable<any>
  {
    return this.http.put<any>(this.url+'/EditPlayer/'+p.id,p,this.httpOption)
  }
  getTeams():Observable<Team[]>
  {
    return this.http.get<Team[]>(this.url+'/ListTeams')
  }
  createTeam(team:any):Observable<any>
  {
     return this.http.post<any>(this.url+'/AddTeam',team,this.httpOption)
  }
  deleteTeam(id:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'/DeleteTeam/'+id)
  }
  editTeam(team:any):Observable<any>
  {
    return this.http.put<any>(this.url+'/EditTeam/'+team.id,team,this.httpOption)
  }

  
}
