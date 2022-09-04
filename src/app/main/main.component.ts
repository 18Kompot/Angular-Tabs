import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  imagesArr: Card[] = [];
  selectedTab: string = 'images';
  @ViewChild('url') url!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  isButtonDisabled = true;
  // imgArr: any[] = [];

  ngOnInit(): void {
    setTimeout(() => (this.name.nativeElement.value = 'nuu'), 3000);
  }

  addImage(name: HTMLInputElement, url: HTMLInputElement) {
    //   this.imgArr.push({
    //     download_url: url.value,
    //   });
    console.log(this.url.nativeElement.value);
    console.log(this.name.nativeElement.value);
    this.imagesArr.push(new Card(name.value, url.value));
    name.value = '';
    url.value = '';
  }

  onInput() {
    if (
      this.name.nativeElement.value.length >= 3 &&
      this.url.nativeElement.value.length >= 3
    ) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
