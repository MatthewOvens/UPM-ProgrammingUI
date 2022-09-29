import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EmailsListComponent },
  { path: 'form', component: EmailReaderFormComponent },
  { path: 'viewer/:value', component: EmailViewerComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
