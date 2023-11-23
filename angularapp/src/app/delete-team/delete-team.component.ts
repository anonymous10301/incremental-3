import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {

  constructor(private ms : TeamServiceService, private ar: ActivatedRoute, private router : Router) { }

  id : number
  teamdetail : Team = {id:0, name:'', maximumBudget : 0}

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

  saveData(team : Team) : void {
    this.teamdetail = team
    this.ms.DeleteTeam(this.teamdetail).subscribe(() => {
      alert("Record Deleted")
      this.router.navigate(['/listteams'])
    })
  }

}
