import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  username: string = '';
  userCreated = false;
  users: any[] = [];
  userNameError = false;

  resetName() {
    this.username = '';
  }

  makeUser() {
    this.users.map((user) => {
      if (user === this.username) {
        this.userNameError = true;
      }
    });
    if (this.userNameError) {
      return;
    }
    this.userNameError = false;
    this.userCreated = true;
    this.users.push(this.username);
    this.userCreated = false;
    this.username = '';
  }
}
