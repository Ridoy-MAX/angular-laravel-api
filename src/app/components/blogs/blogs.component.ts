import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  [x: string]: any;
  blogs: any;
  baseUrl: string = 'http://127.0.0.1:8000';
  selectedBlog: any;

  blog = new Blog();

  constructor(private dataSevice: DataService) { }

  ngOnInit(): void {
    this.getBlogd();
    // throw new Error('Method not implemented.');
  }

  getBlogd() {
    console.log('hello');

    this.dataSevice.getData().subscribe(res => {
      this.blogs = res;
      console.log(res);
    }

    );
  }

  getImageUrl(imagePath: string): string {
    return this.baseUrl + imagePath;
  }

  // onFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this['imageFile'] = file;
  //   }
  // }

  truncateDescription(description: string, wordLimit: number = 10): string {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }

  insertData() {
    this.dataSevice.insertData(this.blog).subscribe(res =>{
      console.log(res);
    })
    // console.log(this.blog);
  }


}
