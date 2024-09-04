import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // deleteBlog(slug: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpclient:HttpClient) {}

    getData(){
      return this.httpclient.get('http://127.0.0.1:8000/api/Admin/blogs/list');

    }
    insertData(data: any){
      return this.httpclient.post('http://127.0.0.1:8000/api/Admin/blogs/add',data);
    }

    // deleteData(){
    //   return this.httpclient.delete('http://127.0.0.1:8000/blog/delete/${slug}');
    // }

    // deleteBlog(slug: string): Observable<any> {
    //   return this.httpclient.delete<any>(`http://127.0.0.1:8000/blog/delete/${slug}`);
    // }
}
