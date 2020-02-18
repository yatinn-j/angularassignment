import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intervalRef: any = null;
  count: number = 0;
  oddNumbers = [];
  evenNumbers = [];
  title = 'My Angular Project';
  status: string;

  constructor() {
  }

  startEvent = (event: Event) => {
    const { isEven } = this;
    this.status = "Event Started!";
    this.intervalRef = setInterval(() => {
      if (isEven(this.count)) {
        this.evenNumbers.push(this.count);
      } else {
        this.oddNumbers.push(this.count);
      }
      this.count++;
    }, 1000);
  }

  stopEvent = (event: Event) => {
    clearInterval(this.intervalRef);
    this.status = "Event Stoped!";
  }

  /**
   * check whether given number is even or odd
   */
  isEven = (value: number) => {
    return (value % 2 == 0);
  }
}