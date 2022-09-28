import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailFormComponent } from './mail-form/mail-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { HighlightDirective } from './utils/directives/highlight.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WithBodyFilterPipe } from './pipes/with-body-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailFormComponent,
    EmailReaderFormComponent,
    HighlightDirective,
    WithBodyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
