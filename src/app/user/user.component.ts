import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: { id: number; name: string, photo: string }[] = []

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
