import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {GithubProfileComponent} from './components/github-profile/github-profile.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostService} from './services/post.service';
import {GithubFollowersService} from './services/github-followers.service';
import {AppErrorHandler} from './common/app-error-handler';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {GithubFollowersComponent} from './components/github-followers/github-followers.component';
import {HttpClient} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    PostsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'profile/:username', component: GithubProfileComponent},
      { path: 'followers', component: GithubFollowersComponent},
      { path: 'posts', component: PostsComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
