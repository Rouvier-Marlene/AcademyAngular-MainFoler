import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from 'rxjs/operators'
import { pipe, Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http
      .post//<{name: string}> OPTIONAL BUT RECOMMENDED
      ('https://angular-academy-d77c3-default-rtdb.firebaseio.com/posts.json', 
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        }, 
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-academy-d77c3-default-rtdb.firebaseio.com/posts.json',
        //Adding Headers and Params
        {
          headers: new HttpHeaders ({"Custom-Header": 'Hello'}),
          params: new HttpParams().set('print', 'pretty'),
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
        //convert a Js object to an Array
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }),
      catchError(errorRes => {
        //send to analytics server
        return throwError(errorRes);
      })
    );
  }

  deleteData() {
    return this.http.delete(
      'https://angular-academy-d77c3-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }

}