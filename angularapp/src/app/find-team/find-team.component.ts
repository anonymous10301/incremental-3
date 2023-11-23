import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/models/team.model';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-find-team',
  templateUrl: './find-team.component.html',
  styleUrls: ['./find-team.component.css']
})
export class FindTeamComponent implements OnInit {

  id : number
  teamdata : Team
  playerId : number
  playerdata : Player[] = []

  constructor(private ms : TeamServiceService, private ar : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.playerId = Number(tid)
    this.getTeam(this.id)
    this.getPlayer(this.playerId)
  }

  getTeam(id : number) {
    this.ms.getTeam(id).subscribe((data : Team) => {
      this.teamdata = data
      console.log(this.teamdata)
    })
  }

  getPlayer(id : number) {
    this.ms.getPlayer(id).subscribe((data : Player[]) => {
      this.playerdata = data
      console.log(this.playerdata)
    })
  }

}
