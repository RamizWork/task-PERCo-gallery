import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {ImageInterface} from '../shared/interfaces/image.interface';
import {CommentService} from './add-comment/shared/services/comment.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CommentService]
})
export class ImageComponent implements OnInit {
  @Input() image!: ImageInterface;
  @Output() toggleLike$ = new EventEmitter<number>();
  @Output() addComment$ = new EventEmitter();
  @Output() addBasket$ = new EventEmitter<ImageInterface>();

  private commentService = inject(CommentService);
  statusShow$ = this.commentService.getShowStatusForComponent();
  isShowImageModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike(): void {
    this.toggleLike$.emit(this.image.id);
  }

  showCommentComponent() {
    this.commentService.showComponent();
  }

  hideComponent(text: string) {
    this.commentService.hideComponent();
    this.addComment$.emit(text);
  }

  showImageModal() {
    this.isShowImageModal = !this.isShowImageModal;
  }

  closeModal() {
    this.isShowImageModal = false;
  }

  addBasket(image: ImageInterface) {
    this.addBasket$.emit(image);
  }
}
