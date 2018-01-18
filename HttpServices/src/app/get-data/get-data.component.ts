import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  posts: any = [];
  private  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url, {observe: 'response'})
      .subscribe(response => {
        console.log(response);
        this.posts = response.body;
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post), {observe: 'response'})
      .subscribe(response => {
          console.log(response);
          post['id'] = response.body;
          this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    // patch is used when you update some fields of the object
    this.http.patch(this.url + '/' + post.id, JSON.stringify(post.title), {observe: 'response'})
      .subscribe(response => {
        console.log(response);
      });
    // update is used, when you update all the fields of the object
    this.http.put(this.url + '/' + post.id, JSON.stringify(post), {observe: 'response'})
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id, {observe: 'response'})
      .subscribe(response => {
        console.log(response);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
