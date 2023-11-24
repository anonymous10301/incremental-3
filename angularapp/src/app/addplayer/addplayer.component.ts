import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
playerdata={id:0,name:'',age:0,category:'',biddingPrice:0,teamId:0}
  constructor(private ps:AdminService,private route:Router) { }
savePlayer(pData:any)
{
  this.playerdata=pData
  this.ps.addPlayer(this.playerdata).subscribe(()=>
  {
     alert('Player Added !!')
     this.route.navigate(['/listPlayer'])
  })
}
  ngOnInit(): void {
  }

}
