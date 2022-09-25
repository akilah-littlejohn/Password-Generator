import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  imports:[MatCheckboxModule]
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}