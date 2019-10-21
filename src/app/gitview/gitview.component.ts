import { Component, OnInit } from '@angular/core';
import {EditorService} from '../editor.service';

@Component({
  selector: 'app-gitview',
  templateUrl: './gitview.component.html',
  styleUrls: ['./gitview.component.css']
})
export class GitviewComponent implements OnInit {

  constructor(private service: EditorService) { }
  private html;
  private body;
  ngOnInit() {
    this.service.getFromGithub().subscribe(
      data => {
        console.log(data);
        // console.log('content: ',data.content);
        this.body = data;
        this.html = JSON.parse(atob(this.body.content));
        console.log('html', this.html.inputHtml);
        document.getElementById('gitview').innerHTML = this.html.inputHtml;
        this.service.setHtml(JSON.stringify(this.html));
      },
      error => {
        console.log('Error from github: ', error);
      }
    );

  }

}
