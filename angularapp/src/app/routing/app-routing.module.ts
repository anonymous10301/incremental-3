import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTeamsComponent } from '../list-teams/list-teams.component';
import { FindTeamComponent } from '../find-team/find-team.component';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { AddTeamComponent } from '../add-team/add-team.component';
import { EditTeamComponent } from '../edit-team/edit-team.component';
import { DeleteTeamComponent } from '../delete-team/delete-team.component';
import { ListPlayerComponent } from '../list-player/list-player.component';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { DeletePlayerComponent } from '../delete-player/delete-player.component';
import { AdminComponent } from '../admin/admin.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { OrganizerComponent } from 'src/app/organizer/organizer.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { PlayerComponent } from '../player/player.component';

const routes: Routes = [
  {path : 'listteams', component : ListTeamsComponent},
  {path : 'listteam/:id', component : FindTeamComponent},
  {path : 'addplayer', component : AddPlayerComponent},
  {path : 'addteam', component : AddTeamComponent},
  {path : 'editteam/:id', component : EditTeamComponent},
  {path : 'deleteteam/:id', component : DeleteTeamComponent},
  {path : 'listplayer', component : ListPlayerComponent},
  {path : 'editplayer/:id', component : EditPlayerComponent},
  {path : 'deleteplayer/:id', component : DeletePlayerComponent},
  {path:'admin',component:AdminComponent},
  {path:'error',component:ErrorComponent},
  {path:'organizer',component:OrganizerComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'players',component:PlayerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
