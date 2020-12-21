import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SelectComponent, // permet d'utiliser <app-select> dans n'importe quel module qui importe Shared
  ]
})
export class SharedModule { }
