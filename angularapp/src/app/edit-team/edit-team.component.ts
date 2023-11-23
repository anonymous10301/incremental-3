import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(private ms : TeamServiceService, private ar : ActivatedRoute, private router : Router) { }

  teamdetail : Team = {id:0,name:'',  maximumBudget : 0}
  id : number

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getTeam(this.id)
  }

  getTeam(id : number) {
    this.ms.getTeam(id).subscribe((data : Team) =>
      this.teamdetail = data
    )
  }

  saveData(movie : Team) : void {
    this.teamdetail = movie
    this.ms.EditTeam(this.teamdetail).subscribe(() => {
      alert("Data Edited")
      this.router.navigate(['/listteam'])
    })
  }

}
