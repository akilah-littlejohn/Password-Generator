import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  imports:[MatSliderModule]

})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}