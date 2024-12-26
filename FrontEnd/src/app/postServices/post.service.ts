import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(`http://localhost:3000/posts`);
  }

  getPostsByInterest(){
    return this.http.get(`http://localhost:3000/posts/popular`);
  }

  deletePostById(postId: number){
    return this.http.delete(`http://localhost:3000/postsdelete/${postId}`);
  }

  addInterest(data:any):Observable<any>{
    return this.http.post(`http://localhost:3000/posts/addInterest`,data);
  }

  addPost(data:any):Observable<any>{
    return this.http.post(`http://localhost:3000/posts/addPost`,data);
  }
}
