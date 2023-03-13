import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImageComponent } from './images-list/image/image.component';
import { AddCommentComponent } from './images-list/image/add-comment/add-comment.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CommentComponent } from './images-list/image/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesListComponent,
    ImageComponent,
    AddCommentComponent,
    CommentComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
