import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GalleryService } from '../gallery/gallery.service';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  galleryList: any[] = [];

  constructor(
    private postsService: PostsService,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.postsService
      .getPosts()
      .pipe(map((data: any[]) => data.slice(0, 10)))
      .subscribe((data: any[]) => {
        this.posts = data;
      });

    this.galleryService
      .getGallery()
      .pipe(map((data: any[]) => data.slice(0, 10)))
      .subscribe((data: any[]) => {
        this.galleryList = data;
      });
  }
}
