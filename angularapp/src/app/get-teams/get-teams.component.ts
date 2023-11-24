import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../../models/team.model';
import { AdminService } from '../services/admin.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.css']
})
export class GetTeamsComponent implements OnInit {
teams:Team[]=[]
  constructor(public service:AdminService) { 
    this.service.getTeams().subscribe(data=>{
      this.teams.push(...data)
     })
  }

  ngOnInit(): void {
  }

}
