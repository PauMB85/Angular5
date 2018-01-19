import { Component, OnInit } from '@angular/core';
import {FollowersService} from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any = [];
  constructor(private followersService: FollowersService) { }

  ngOnInit() {
    this.followersService.getAll().
      subscribe(follow => this.followers = follow);
  }
}
