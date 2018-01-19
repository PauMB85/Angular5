import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { GetDataComponent } from './get-data/get-data.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './commons/errors/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import {FollowersService} from './services/followers.service';


@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
