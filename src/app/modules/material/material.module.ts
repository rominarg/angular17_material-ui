import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos empresados de Angular Material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatDatepickerModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
