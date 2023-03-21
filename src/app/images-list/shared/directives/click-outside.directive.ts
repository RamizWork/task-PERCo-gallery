import {AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {filter, fromEvent, Subscription} from "rxjs";

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();
  documentClickSubscribe: Subscription | undefined;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.documentClickSubscribe = fromEvent(this.document, 'click').pipe(
      filter((event) => {
          return event.target === this.element.nativeElement;
        }
      )
    ).subscribe(() => {
        this.clickOutside.emit();
      }
    );
  }

  ngOnDestroy(): void {
    this.documentClickSubscribe?.unsubscribe();
  }
}
