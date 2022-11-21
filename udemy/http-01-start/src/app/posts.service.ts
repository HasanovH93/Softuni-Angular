import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();


  constructor(private http: HttpClient) { }

  createAndStorePost(title:string, content:string){
    const postData : Post = {title:title, content:content}
    this.http.post<{name:string}>('https://ng-complete-guide-db172-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
    postData,
    {
      observe: 'response'
    }
    )
    .subscribe(resData => {
      console.log(resData.body)
    }, error => {
      this.error.next(error.message);
    })
  }

  fetchPosts(){
    let searchParams = new HttpParams;
    searchParams =  searchParams.append('print', 'pretty');

   return this.http.get<{[key:string]: Post}>('https://ng-complete-guide-db172-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
   {
    headers: new HttpHeaders({'Custom-Header': 'Hello'}),
    params: new HttpParams().set('print', 'pretty')
   }
   )
    .pipe(map(resData => {
      const postsArray: Post[] = [];
      for(const key in resData){
        if(resData.hasOwnProperty(key)){

          postsArray.push({...resData[key], id: key})
        }
      }
      return postsArray
    }),
    catchError(errorRes => {
       return throwError(errorRes)
    })
    );
   
  }
  deletePosts(){
   return this.http.delete('https://ng-complete-guide-db172-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
   {
    observe: 'events',
    responseType: 'text'
   }
   ).pipe(tap(event => {
    console.log(event)
    if(event.type === HttpEventType.Response){
      console.log(event.body)
    }
   }));
  }

}
