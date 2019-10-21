import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {EditComponent} from './edit/edit.component';
import {GitviewComponent} from './gitview/gitview.component';
import {Edit2Component} from './edit2/edit2.component';


const routes: Routes = [
  {path: '', redirectTo: '/edit', pathMatch: 'full'},
  {path: 'edit', component: EditComponent},
  {path: 'edit2', component: Edit2Component},
  {path: 'preview', component: PreviewComponent},
  {path: 'gitview', component: GitviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
