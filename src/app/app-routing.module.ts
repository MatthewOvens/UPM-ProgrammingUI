import { EmailFormComponent } from './mail-form/email-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { EmailsListComponent } from './emails-list/emails-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: EmailFormComponent },
  { path: 'viewer', component: EmailViewerComponent }, 
  { path: 'list', component: EmailsListComponent }
  // { path: '**', component: ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
