import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Premier post',
      content: 'Ceci est le premier post de ce blog',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Second post',
      content: 'Ceci est le second post de ce blog',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Troisième post',
      content: 'Ceci est le troisième post de ce blog',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
