import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CommentFormComponent } from './template-driven/comment-form/comment-form.component';
import { AssignmentFormComponent } from './template-driven/assignment-form/assignment-form.component';
import {SignupFormComponent} from './reactive/signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    AssignmentFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
