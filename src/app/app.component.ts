import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  username = '';
  userCreated = false;

  resetName() {
    this.username = '';
  }
  makeUser() {
    this.userCreated = true;
    setTimeout(() => {
      this.userCreated = false;
    }, 3000);
  }
}
