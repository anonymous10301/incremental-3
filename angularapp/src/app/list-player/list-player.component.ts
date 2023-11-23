import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { TeamServiceService } from '../services/team-service.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  players : Player[] = []
  newPlayer= { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 100 }

  constructor(private ms : TeamServiceService) {
      this.ms.getPlayers().subscribe(data => {this.players.push(...data)})
      console.log(this.players)
  }
  ngOnInit(): void {
  }

}
