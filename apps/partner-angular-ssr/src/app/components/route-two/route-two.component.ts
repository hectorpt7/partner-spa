import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pas-route-two',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './route-two.component.html',
})
export class RouteTwoComponent  implements OnInit {
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    window.dispatchEvent(new Event('perch-widget:init'));
  }



  open(content: TemplateRef<unknown>) {
    const modalR = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })

    modalR.shown.subscribe(() => {
      window.dispatchEvent(new CustomEvent('perch-widget:init', { detail: { perchWidgetId: '29Jp6zyw' } }));
    });
  }
}
