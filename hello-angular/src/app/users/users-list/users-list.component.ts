import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  toggleExpand(user: User) {
    this.users = this.users.map((u) => ({...u, expanded: user.id === u.id}))
  }
}
