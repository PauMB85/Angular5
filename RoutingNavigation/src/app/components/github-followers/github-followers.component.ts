
import { Component, OnInit } from '@angular/core';
import {GithubFollowersService} from '../../services/github-followers.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined => {
        const id = combined[0].get('id'); // combined [0] get from the 1st observable (paramMap)
        const page = combined[1].get('page'); // combined[1] get fro,m the 2nd observable (queryParamMap)

        // send parameter to the server
        // this.service.getAll({id: id, page: page});
        this.service.getAll()
          .subscribe(followers => this.followers = followers);
      });
  }
}
