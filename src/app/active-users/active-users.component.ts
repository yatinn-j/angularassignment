import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  countAction: number = 0;

  constructor(private appService: AppService) { }

  onSetToInactive(id: number) {
    this.appService.setInactiveUser(id);
    this.countAction = this.appService.inactiveCount;
  }
}
