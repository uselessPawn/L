import { Component, Input, NgModule, ViewChild } from '@angular/core';
import Heroes from './configs/hero'

interface Hero {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  phone = '';

  callPhone(value: any) {
    console.log(value)
  }
}
