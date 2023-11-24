import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { GetTeamsComponent } from './get-teams/get-teams.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DeletePlayerComponent,
    AddplayerComponent,
    EditplayerComponent,
    GetTeamsComponent,
    CreateTeamComponent,
    DeleteTeamComponent,
    EditTeamComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    OrganizerComponent,
    RegistrationComponent,
    ErrorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
