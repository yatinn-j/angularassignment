import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeCount: number = 0;
  inactiveCount: number = 0;

  constructor(private countTrack: CounterService) { }

  setActiveUser = (id: number) => {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeCount = this.countTrack.logSetInactiveActions(this.activeCount);
  }

  setInactiveUser = (id: number) => {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveCount = this.countTrack.logSetActiveActions(this.inactiveCount);
  }
}
