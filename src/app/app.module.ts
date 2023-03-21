import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ImagesListComponent} from './images-list/images-list.component';
import {ImageComponent} from './images-list/image/image.component';
import {AddCommentComponent} from './images-list/image/add-comment/add-comment.component';
import {CommentComponent} from './images-list/image/comment/comment.component';
import {ImageModalComponent} from './images-list/image-modal/image-modal.component';
import {ClickOutsideDirective} from "./images-list/shared/directives/click-outside.directive";

@NgModule({
  declarations: [
    AppComponent,
    ImagesListComponent,
    ImageComponent,
    AddCommentComponent,
    CommentComponent,
    ImageModalComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
