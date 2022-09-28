import { Injectable } from '@angular/core';
import { Email } from '../utils/interfaces/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  //Pre-stored mails  (Map try)
  storedEmails : Email[] = [
    {
      id: 1,
      from: "firstMailFrom@gmail.com",
      to: "firstMailTo@gmail.com", 
      subject: "First mail",
      body: "Try with body" 
    },
    {
      id: 2,
      from: "secondMailFrom@gmail.com",
      to: "secondMailTo@gmail.com", 
      subject: "Second mail",
      body: null 
    },
    {
      id: 3,
      from: "thirdMailFrom@gmail.com",
      to: "thirdMailTo@gmail.com", 
      subject: "Third mail",
      body: null 
    },
  ]; 

  constructor() { }


  //Function to generate a mail ID based on the mails already stored
  genId(emails: Email[]): number {
    return emails.length > 0 ? Math.max(...emails.map(mail => mail.id)) + 1 : 11;
  }

  //Function to store a given mail
  storeEmail(email: Email) {
    email.id = this.genId(this.storedEmails);
    this.storedEmails.push(email);
  }

  // Function to retrive all emails
  getAllEmails(): Email[] {
    return this.storedEmails;
  }

  // Function to retrive one specific email, the one with the given id, give undefined if the id doesn't exist
  getEmail(id: number): Email | undefined {
    return this.storedEmails.find(mail => mail.id == id);
  }

  //Function to delete a specific email from the list
  deleteMail(id: number) {
    this.storedEmails.map(mail => {
      if(mail.id == id) {
        this.storedEmails.splice(this.storedEmails.indexOf(mail), 1)
      }
    });
  }

}
