import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @Input() image!: string;
  @Output() closeImageModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeImageModal.emit();
  }
}
