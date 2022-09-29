import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Email } from '../utils/interfaces/Email';

@Component({
  selector: 'app-mail-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: Email = {
    id: 0,
    from: "",
    to: "",
    subject: "",
    body: ""
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  //Function to print in an alert the data inside the form and clean the form itself
  open(content: TemplateRef<any>) {
    const modalRef = this.modalService.open(content, { centered: true });

    modalRef.dismissed.subscribe(() => {
      this.clean();
    })

  }

  //Function to clean the form's field
  clean() {
    this.email = {
      id: 0,
      from: "",
      to: "",
      subject: "",
      body: ""
    };
  }

}
