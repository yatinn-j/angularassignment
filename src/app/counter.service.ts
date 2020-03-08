import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor() { }

  logSetActiveActions = (count: number) => {
    return count + 1;
  }

  logSetInactiveActions = (count: number) => {
    return count + 1;
  }
}
