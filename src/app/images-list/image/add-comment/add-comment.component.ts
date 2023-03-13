import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output() hideComponent = new EventEmitter();
  form = new FormGroup({comment: new FormControl('', [Validators.required])});
  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    if (!this.form.invalid) {
      const {comment} = this.form.value;
      this.hideComponent.emit(comment);
    }
  }
}
