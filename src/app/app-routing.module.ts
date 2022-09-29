import { EmailFormComponent } from './mail-form/email-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EmailsListComponent },
  { path: 'form', component: EmailReaderFormComponent },
  { path: 'viewer/:value', component: EmailViewerComponent }
  // { path: '**', component: ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
