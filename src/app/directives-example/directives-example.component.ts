import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  isContentShown = false;
  clicksArray = [];
  numberOfClicks = 1;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick = (event: Event) => {
    this.isContentShown = !this.isContentShown;
    this.clicksArray.push(this.numberOfClicks++)  ;
  }
}
