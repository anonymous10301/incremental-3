import { Component, IterableDiffers, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  teamdata : Team[] = []

  constructor(private ms : TeamServiceService) {
      this.ms.getTeams().subscribe(data => {this.teamdata.push(...data)})
      console.log(this.teamdata)
  }
  ngOnInit(): void {
    this.getTeams();
  }
  getTeams(): void {
    this.ms.getTeams().subscribe(
      (teams) => {
        this.teamdata = teams;
      },
      (error) => {
        console.error('Error retrieving teams:', error);
      }
    );
 
}
 
}
