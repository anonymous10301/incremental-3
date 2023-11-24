import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {
id:number
  constructor(private ts:AdminService,private ar:ActivatedRoute,private router:Router) { 
    const pid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(pid)
    this.ts.deleteTeam(this.id).subscribe(()=>
    {
      alert('Team Deleted!!')
      router.navigate(['/listTeams'])
    })
  }

  ngOnInit(): void {
  }

}
