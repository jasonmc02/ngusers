import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="row">
      <h1>{{title}}</h1>
    </div>
    <div class="row">
      <ul class="nav nav-pills">
        <li [class.active]="currentTab == 1" (click)="currentTab=1">
          <a routerLink="/dashboard">Dashboard</a>
        </li>
        <li [class.active]="currentTab == 2" (click)="currentTab=2">
          <a routerLink="/heroes">Heroes</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
  currentTab = 1;
}