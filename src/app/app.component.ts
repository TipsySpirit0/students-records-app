import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'students-records-app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbHighlight, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'students-records-app';

  sidebarExpanded = true;
  constructor() {}
}
