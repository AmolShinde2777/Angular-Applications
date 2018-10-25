import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddContactComponent } from '../../shared/components/add-contact/add-contact.component';
import { PageTitleService } from '../../shared/services/page-title.service';
import { IContact, ContactsService } from '../../shared/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[];
  sequence:number;

  constructor(
    private pageTitle: PageTitleService,
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.pageTitle.title = 'Contacts';
    this.contacts = this.contactsService.getContacts();
    this.sequence = 2;
  }

  add() {
    const dialogRef = this.dialog.open(AddContactComponent);
    dialogRef.afterClosed().subscribe((contact: IContact) => {
      if (contact) {
        this.sequence = this.sequence + 1;
        contact.id = this.sequence;
        this.contacts.push(contact);
      }
    });
  }

  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  edit(contact) {
    const dialogRef = this.dialog.open(AddContactComponent);
    //dialogRef.componentInstance.data = contact;
    debugger
    dialogRef.componentInstance.contactForm.setValue({
      firstname: contact.firstName,
      email: contact.email,
      lastname: contact.lastName,
      phone: contact.phoneNumber,
      status:contact.status,
      id:contact.id
    });
    dialogRef.afterClosed().subscribe((contact: IContact) => {
      debugger
      if (contact) {
        debugger
       let ct = this.contacts.find(function(v) {
          return v.id == +contact.id;
        });
         ct.firstName = contact.firstName;
        ct.lastName = contact.lastName;
        ct.phoneNumber = contact.phoneNumber;
        ct.email = contact.email;
        ct.status = contact.status; 
               
      }
    });
  }

}
