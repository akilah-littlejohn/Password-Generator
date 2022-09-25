import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  imports: [MatInputModule, MatIconModule],
})
export class TextFieldComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
