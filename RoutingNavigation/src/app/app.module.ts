import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {AppErrorHandler} from './common/app-error-handler';
import {GithubFollowersService} from './services/github-followers.service';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {GithubFollowersComponent} from './components/github-followers/github-followers.component';
import {GithubProfileComponent} from './components/github-profile/github-profile.component';
import {GithubProfileService} from './services/github-profile.service';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubFollowersComponent,
    PostsComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'followers/:username', component: GithubProfileComponent},
        {path: 'followers', component: GithubFollowersComponent},
        {path: 'posts', component: PostsComponent},
        {path: '**', component: NotFoundComponent}
      ]
    )
  ],
  providers: [
    PostsComponent,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    GithubFollowersService,
    GithubProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
