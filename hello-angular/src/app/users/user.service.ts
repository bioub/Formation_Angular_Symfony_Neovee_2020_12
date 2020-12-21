import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((users) => users.map((u, i) => ({...u, expanded: i === 0})))
    );
  }

}
