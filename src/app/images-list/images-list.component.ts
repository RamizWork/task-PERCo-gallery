import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ImagesService} from './shared/services/images.service';
import {ImageInterface} from "./shared/interfaces/image.interface";
import {BasketServices} from "../shared/services/basket.services";

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesListComponent implements OnInit {
  private imagesService = inject(ImagesService);
  private basketServices = inject(BasketServices);
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

  addBasket(item: ImageInterface) {
    this.basketServices.addImgToLocalStorage(item);
  }
}
