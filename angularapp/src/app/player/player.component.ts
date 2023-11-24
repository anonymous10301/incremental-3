import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from '../../models/player.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
playerdata:any[]=[]
player:Player={id:0,name:'',age:0,category:'',biddingPrice:0}
players=[this.player]
newPlayer:Player={id:0,name:'',age:0,category:'',biddingPrice:0}
  constructor(private ms:AdminService) { 
this.ms.getPlayers().subscribe(data=>{
  this.playerdata.push(...data)
})
  }

  ngOnInit(): void {
  }

}
