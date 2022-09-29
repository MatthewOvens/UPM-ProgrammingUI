import { EmailFormComponent } from './mail-form/email-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/email-form', pathMatch: 'full' },
  { path: 'email-form', component: EmailFormComponent }
  // { path: 'basichtml', component: BasicHtmlComponent }, 
  // { path: '**', component: <component-name> }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
