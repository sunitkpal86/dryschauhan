import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-slider',
  imports: [CommonModule],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.css',
})
export class HeroSlider implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  slides = [
    {
      title: 'Healing Through Authentic Ayurveda',
      desc: 'Personalized Ayurvedic treatments focused on root-cause healing and long-term wellness.'
    },
    {
      title: '10+ Years of Trusted Ayurvedic Care',
      desc: 'Safe, natural, and effective treatments backed by clinical experience.'
    },
    {
      title: 'Ancient Wisdom. Modern Healing.',
      desc: 'Expert BAMS consultation, Panchakarma, and herbal medicines.'
    }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
