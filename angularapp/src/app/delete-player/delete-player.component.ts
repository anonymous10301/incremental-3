import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {

  constructor(private ms : TeamServiceService, private ar : ActivatedRoute, private router : Router) { }

  id : number
  playerdetail : Player = {id : 0, teamid : 0, name : '', age : 0, category : '', biddingprice : 0}

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)
  }

  getPlayer(id : number) {
    this.ms.getOnePlayer(id).subscribe((data : Player) => 
      this.playerdetail = data
    )
  }

  saveData(player : Player) : void {
    this.playerdetail = player
    this.ms.DeletePlayer(this.playerdetail).subscribe(() => {
      alert("Record Deleted")
      this.router.navigate(['/listteams'])
    })
  }

}
