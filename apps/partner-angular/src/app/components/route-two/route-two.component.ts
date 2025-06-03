import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pa-route-two',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './route-two.component.html',
})
export class RouteTwoComponent  implements OnInit {
  private readonly modalService = inject(NgbModal);
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.document.defaultView?.dispatchEvent(new Event('perch-widget:init'));
  }



  open(content: TemplateRef<unknown>) {
    const modalR = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })

    modalR.shown.subscribe(() => {
      this.document.defaultView?.dispatchEvent(new CustomEvent('perch-widget:init', { detail: { perchWidgetId: 'xxDu9Zga' } }));
    });
  }
}
