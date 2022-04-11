import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "" ;
  teams: string[][] = []; // gonna be an array of arrays of strings -> TS is crazy
  
  onInput(member: string){
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage='';
    this.members.push(this.newMemberName);
    this.newMemberName='';
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid number of teams";
      return;
    }

    if ( this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members";
      return;
    }

    this.teams = [];
    this.errorMessage = "";
    const allMembers = [...this.members]; // create a real copy of array

    while(allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0]; // mutates array and returns a new one

        if(!member) break; // just break the loop if...

        if(this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
    }

       
    }
    
    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = '';
    
  }
}
