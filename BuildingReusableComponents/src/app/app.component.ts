import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './passing-event-data/passing-event-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body of a tweet',
    isLiked: false,
    likesCount: 0
  };

  /* onFavoriteChanged(isFavorite) {
    console.log('Favorite changed: ' + isFavorite);
  } */

  // event data
  onFavoriteChanged(argsValue: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ' + argsValue.newValue);
  }

  onClickChanged(likesCount: number) {
    console.log('Receive: ' + likesCount);
    this.tweet.likesCount = likesCount;
  }
}
