import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectComponent, AutocompleteComponent],
  imports: [CommonModule, ReactiveFormsModule], // toujours des Modules
  exports: [
    CommonModule, // en important Shared on importe aussi CommonModule
    SelectComponent, // permet d'utiliser <app-select> dans n'importe quel module qui importe Shared
    AutocompleteComponent,
    // modules,
    // composants / pipes ou directives
  ],
})
export class SharedModule {}
