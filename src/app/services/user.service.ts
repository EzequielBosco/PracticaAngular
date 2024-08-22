import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, name: 'Ezequiel', photo: 'https://github.com/ezequielBosco.png' },
    { id: 2, name: 'Jeremias', photo: '' }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  addUser(user: { id: number; name: string; photo: string }) {
    this.users.push(user);
  }
}
