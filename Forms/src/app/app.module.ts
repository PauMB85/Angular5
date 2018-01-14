import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CommentFormComponent } from './template-driven/comment-form/comment-form.component';
import { AssignmentFormComponent } from './template-driven/assignment-form/assignment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    AssignmentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
