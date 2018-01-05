import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentFormComponent } from './template-driven/comment-form/comment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
