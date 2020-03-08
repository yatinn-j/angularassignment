import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  activeUsers: Array<string> = [];
  inactiveUsers: Array<string> = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.activeUsers = this.appService.activeUsers;
    this.inactiveUsers = this.appService.inactiveUsers;
  }
}
