import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  constructor(private http: HttpClient) { }
  private headers = {
    Authorization: 'Token efa18b648abec43c32e4663cc1fc7f2515660b98'
  };
  private httpOptions = {
    headers : this.headers
  };
  private body;
  private html;
  setHtml(html) {
    this.html = html;
  }
  getHtml() {
    return this.html;
  }

  setBody(body) {
    this.body = body;
    console.log('service: ', this.body);
  }
  getBody() {
    return this.body;
  }
  putToGithub(): Observable<any> {
    const url = 'https://api.github.com/repos/itsmeavinashprasad/sample1/contents/chapter1/htmlfile.html';
    const sha = this.body.sha;
    this.body = {
      message: 'my commit message',
      committer: {
        name: 'Author Name',
        email: 'author@github.com'
      },
      sha,
      content: btoa(this.html)
    };
    console.log('putToGithub: ', this.body);
    return this.http.put(url, this.body, this.httpOptions);
  }
  getFromGithub() {
    const url = 'https://api.github.com/repos/itsmeavinashprasad/sample1/contents/chapter1/htmlfile.html';
    return this.http.get(url, this.httpOptions);
  }
}
