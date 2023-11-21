import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerdata [] = []

  constructor(private ad : AdminService , private ar : ActivatedRoute , private r :Router) {
    this.ad.getPlayers().get(data => (this.playerdata))
   }

  

  ngOnInit(): void {
  }

}
