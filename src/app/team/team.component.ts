import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() team: string[] = [];
  @Input() index: number = 0;
  
  currentDate: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
