import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {images} from '../consts/images';
import {ImageInterface} from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private images$ = new BehaviorSubject<ImageInterface[]>(images);

  constructor() {
  }

  getImages(): Observable<ImageInterface[]> {
    return this.images$.asObservable();
  }

  toggleLike(id: number): void {
    const oldImages = this.images$.getValue();
    const newImages = oldImages.map(image => {
      if (image.id === id) {
        return {
          ...image,
          isLike: !image.isLike
        }
      }

      return image;
    });

    this.images$.next(newImages);
  }

  addComment(id: number, comment: string) {
    const oldImages = this.images$.getValue();
    const newImages = oldImages.map(image => {
      if (image.id === id) {
        return {
          ...image,
          comments: [comment, ...image.comments]
        }
      }

      return image;
    });

    this.images$.next(newImages);
  }
}
