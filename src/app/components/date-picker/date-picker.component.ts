import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit {

 formularioReserva: FormGroup = new FormGroup ({});

 constructor(private formBuilder: FormBuilder) {

  const hoy = new Date();
  const mes = hoy.getMonth();
  const anio = hoy.getFullYear();

  this.formularioReserva = this.formBuilder.group ({
    desde: new FormControl(new Date(anio, mes, 15)),
    hasta: new FormControl(new Date(anio, mes, 19))
 })
}

 ngOnInit(): void {}
 

}
