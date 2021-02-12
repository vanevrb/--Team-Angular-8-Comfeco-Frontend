import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-modal-terms',
  templateUrl: './modal-terms.component.html',
  styleUrls: ['./modal-terms.component.scss'],
})
export class ModalTermsComponent implements OnInit {
  isOpen$: Observable<boolean>;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.isOpen$ = this.modalService.modalIsOpen$;
  }

  closeModal() {
    this.modalService.closeModal();
  }

  openModal() {
    this.modalService.openModal();
  }
}
