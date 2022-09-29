import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { Email } from '../utils/interfaces/Email';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  id: number = 3;

  //Array of Email to store the sended mails during the session
  emailsList?: Email[] | undefined;

  constructor(private emailService: EmailService) {

    //Populating the email list with emails from the service
    this.emailsList = this.emailService.getAllEmails();

  }

  ngOnInit(): void {
  }

  //Funtion to delete a selected email from the service
  deleteMail(id: number) {
    this.emailService.deleteMail(id);
  }

}
