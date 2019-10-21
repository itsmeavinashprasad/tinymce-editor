import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';
import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';
import { GitviewComponent } from './gitview/gitview.component';
import { HttpClientModule } from '@angular/common/http';
import { Edit2Component } from './edit2/edit2.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditComponent,
    GitviewComponent,
    Edit2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
