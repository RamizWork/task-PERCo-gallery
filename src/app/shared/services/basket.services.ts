import {Injectable} from "@angular/core";
import {ImageInterface} from "../../images-list/shared/interfaces/image.interface";

@Injectable()
export class BasketServices {
  constructor() {
  }

  addImgToLocalStorage(item: ImageInterface) {
    const basketData = localStorage.getItem('basket');

    if (basketData) {
      const itemsOfLocalStorage: ImageInterface[] = JSON.parse(basketData);
      const findItem = itemsOfLocalStorage.find((element) => element.id === item.id);

      if (!findItem) {
        const newItemsOfLocalStorage = [...itemsOfLocalStorage, item];
        localStorage.setItem('basket', JSON.stringify(newItemsOfLocalStorage));
      }

    } else {
      localStorage.setItem('basket', JSON.stringify([item]));
    }
  }
}
