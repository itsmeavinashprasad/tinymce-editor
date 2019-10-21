import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EditorService} from './editor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'editing';

  constructor() {}

}
