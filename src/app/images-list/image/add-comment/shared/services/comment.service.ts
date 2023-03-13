import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class CommentService {
  private isShowComponent = new BehaviorSubject(false);

  getShowStatusForComponent(): Observable<boolean> {
    return this.isShowComponent.asObservable();
  }

  showComponent(): void {
    this.isShowComponent.next(true);
  }

  hideComponent(): void {
    this.isShowComponent.next(false);
  }
}
