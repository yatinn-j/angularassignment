import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  username = 'Test Input';
  isButtonDisabled = false;

  constructor() {
    this.isButtonDisabled = !Boolean(this.username);
  }

  ngOnInit(): void {
  }

  onInputChange = (event: Event) => {
    this.isButtonDisabled = !Boolean((<HTMLInputElement>event.target).value);
  }

  onResetClick = (event: Event) => {
    this.username = '';
    this.isButtonDisabled = true;
  }
}
