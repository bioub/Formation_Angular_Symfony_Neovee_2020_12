import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  search = new FormControl('');

  results: any[] = [];
  loading = false;

  err = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

    this.search.valueChanges
      .pipe(
        filter((term: string) => term.length >= 3),
        map((term: string) => term.toLowerCase()),
        distinctUntilChanged(),
        debounceTime(200),
        tap(() => this.loading = true),
        switchMap((term: string) =>
          this.httpClient.get<any>(
            `https://api.github.com/search/users?q=${term}`
          )
        ),
        tap(() => this.loading = false),
        catchError((err) => this.err = err.message),
        finalize(() => this.loading = false),
      )
      .subscribe((res) => {
        console.log(res);
        this.results = res.items;
      });
  }
}
