import { Component } from '@angular/core';
import { HeroSlider } from '../hero-slider/hero-slider';

@Component({
  selector: 'app-hero',
  imports: [HeroSlider],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
