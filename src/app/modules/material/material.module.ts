import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos empresados de Angular Material
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatDatepickerModule
  ]
})
export class MaterialModule { }
