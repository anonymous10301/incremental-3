import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'https://8080-ddbbededcbeabcdcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io'

  constructor(private httpclient : HttpClient) { }

  getPlayers():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/showplayers');
  }

  getTeams():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/ShowTeams');
  }


}
