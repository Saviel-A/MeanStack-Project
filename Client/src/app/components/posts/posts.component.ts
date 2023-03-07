import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
