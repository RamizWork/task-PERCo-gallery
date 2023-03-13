import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ImagesService} from './shared/services/images.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesListComponent implements OnInit {
  private imagesService = inject(ImagesService);
  public images$ = this.imagesService.getImages();

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike(id: number) {
    this.imagesService.toggleLike(id);
  }

  addComment(id: number, text: string) {
    this.imagesService.addComment(id, text);
  }
}
