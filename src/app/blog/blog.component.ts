import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreated_at;
  likeText = 'Like it';
  disLikeText = 'Dislike it';

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.postLoveIts++;
  }
  onDisLike() {
    this.postLoveIts--;
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

}
