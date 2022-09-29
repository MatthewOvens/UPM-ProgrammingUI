import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../utils/interfaces/Email';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {

  actualEmail?: Email;

  constructor(private route: ActivatedRoute, private emailService: EmailService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let emailId = params.get('value');
      if(emailId) {
        this.actualEmail = this.emailService.getEmail(parseInt(emailId));
      }
    })
  }

}
