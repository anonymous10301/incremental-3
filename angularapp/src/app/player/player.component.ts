import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: { id: number; name: string; age: number; category: string; biddingPrice: number; }[];

  constructor() { }

  ngOnInit(): void {
    // Initialize players data (you might fetch this from a service or API)
    this.players = [
      { id: 1, name: 'Player 1', age: 25, category: 'Category A', biddingPrice: 100 },
      { id: 2, name: 'Player 2', age: 28, category: 'Category B', biddingPrice: 150 },
     
    ];
  }

  newPlayer: any = {};

  editPlayer(players?: any) {
    alert(`Editing player: ${players.name}`);
  }

  deletePlayer(players?: any) {
    
    alert(`Deleting player: ${players.name}`);
  }
}
