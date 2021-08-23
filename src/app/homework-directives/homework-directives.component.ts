import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework-directives',
  templateUrl: './homework-directives.component.html',
  styleUrls: ['./homework-directives.component.css']
})
export class HomeworkDirectivesComponent implements OnInit {

  constructor() { }
  showValue = false
  clickedTimestamps: any[] = []

  detailsCLickHandler(): void{
    const date: number = Date.now()
    this.clickedTimestamps.push(date)
  }

  ngOnInit(): void {
  }

}
