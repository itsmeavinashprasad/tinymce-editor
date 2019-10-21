import { Component, OnInit } from '@angular/core';
import {EditorService} from '../editor.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  private html: any;
  constructor(private service: EditorService, private router: Router) {}
  ngOnInit() {
    this.html = JSON.parse(this.service.getHtml());
    console.log('preview: ', this.html);
    document.getElementById('preview').innerHTML = this.html.inputHtml;
  }

  putToGithub() {
    this.service.putToGithub().subscribe(
      data => {
        console.log('Message from github: ', data);
      },
      error => {
        console.log('Error from github', error);
      }
    );
  }

  goToGitView() {
    this.router.navigate(['gitview']);
  }
}
