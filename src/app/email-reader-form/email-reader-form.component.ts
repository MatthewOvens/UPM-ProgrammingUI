import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';
import { Email } from '../utils/interfaces/Email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email = {
    id: 0,
    from: "",
    to: "",
    subject: "",
    body: null
  };

  term: string;
  withBody: boolean;

  //Array of Email to store the sended mails during the session
  emailsList?: Email[] | undefined;

  @ViewChild('mailForm') mailForm: any;

  constructor(private emailService : EmailService) { 

    //Populating the email list with emails from the service
    this.emailsList = this.emailService.getAllEmails();
    this.term = "";
    this.withBody = false; 

  }

  ngOnInit(): void { }

  //Function to submit the mail, show a sending message, store the actual mail into the service and clear the form
  sendForm() {
    window.alert("The email \"" + this.email.subject +  "\" has been sent to " + this.email.to);

    this.emailService.storeEmail(
      {
        id: this.email.id,
        from: this.email.from,
        to: this.email.to,
        subject: this.email.subject,
        body: this.email.body,
      }
    );
    this.clear();

  }

  //Funtion to delete a selected email from the service
  deleteMail(id: number) {
    this.emailService.deleteMail(id);
  }

  //Function to reset form's fields
  clear() {
    this.mailForm.reset();
  }

}
