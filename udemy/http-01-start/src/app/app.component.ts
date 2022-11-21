import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false
  errorMsg = null;
  private errorSub: Subscription;

  constructor( private postService: PostsService) {}

  ngOnInit() {
    this.errorSub =  this.postService.error.subscribe(err => {
      this.errorMsg = err
    })
    this.isFetching = true
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts
    })
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }



  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title,postData.content)
   
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts
    }, error => {
      this.isFetching = false;
      this.errorMsg = error.message
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = []
    })
  }

  onHandleError(){
    this.errorMsg = null
  }

}
