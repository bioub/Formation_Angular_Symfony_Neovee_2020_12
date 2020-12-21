import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  languages = ['en', 'fr', 'es'];

  selectedLanguage = 'fr';

  changeLanguage(language: string) {
    this.selectedLanguage = language;
  }
}
