import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { TeamServiceService } from '../services/team-service.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  playerdata : Player[] = []

  constructor(private ms : TeamServiceService) {
      this.ms.getPlayers().subscribe(data => {this.playerdata.push(...data)})
      console.log(this.playerdata)
  }
  ngOnInit(): void {
  }

}
