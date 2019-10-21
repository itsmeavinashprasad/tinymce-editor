import { Component, OnInit } from '@angular/core';
import {EditorService} from '../editor.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private html;
  private body;
  constructor(private service: EditorService, private router: Router) {}

  ngOnInit() {
    this.service.getFromGithub().subscribe(
      data => {
        this.body = data;
        this.html = JSON.parse(atob(this.body.content));
        this.service.setBody(this.body);
        console.log('body.content: ', this.html);
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onSubmit(myForm: NgForm) {
    this.html = myForm.value;
    console.log('submit: ', this.html);
    this.service.setHtml(JSON.stringify(this.html));
    this.router.navigate(['/preview']).then( );
  }
}
