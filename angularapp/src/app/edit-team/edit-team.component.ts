import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
id:number
teamdata={id:0,name:''}
  constructor(private ps:AdminService,private ar:ActivatedRoute,private router:Router) {
 
   }

  ngOnInit(): void {
  }

}
