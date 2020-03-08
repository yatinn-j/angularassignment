import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  countAction: number = 0;

  constructor(private appService: AppService) { }

  onSetToActive(id: number) {
    this.appService.setActiveUser(id);
    this.countAction = this.appService.activeCount;
  }
}
