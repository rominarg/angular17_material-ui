import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements OnInit {

 formularioReserva: FormGroup = new FormGroup ({});

 constructor(private formBuilder: FormBuilder) {}

 ngOnInit(): void {
     
 }
}
