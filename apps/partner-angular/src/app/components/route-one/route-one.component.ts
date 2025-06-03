import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'pa-route-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-one.component.html',
})
export class RouteOneComponent implements OnInit {
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.document.defaultView?.dispatchEvent(new CustomEvent('perch-widget:init'));
  }
}
