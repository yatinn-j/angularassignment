import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Input() oddNumberList: [];
  @Input() evenNumberList: [];
  @Output() startEvent = new EventEmitter<Event>();
  @Output() stopEvent = new EventEmitter<Event>();
  @Input() status: string;

  constructor() {

  }

  ngOnInit(): void {
  }

  eventStarted = (event: Event) => {
    this.startEvent.emit(event);
  }

  eventStopped = (event: Event) => {
    this.stopEvent.emit(event);
  }
}
