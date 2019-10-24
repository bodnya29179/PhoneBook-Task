/* Import all modules, libraries and services. */
import { Component, OnInit } from '@angular/core';
import { ContactInfoService, ContactInfo } from './services/contact-info.service';

/* Using the @Component decorator to make a class a component. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Module view using class. */
export class AppComponent implements OnInit {

  /* Variable declaration */
  contacts: ContactInfo[] = [];

  visibleForm: string = '';

  data: ContactInfo = {
    contact_id: null,
    user_name: null,
    user_surname: null,
    phone_number: null
  };

  changingData: ContactInfo = {
    contact_id: null,
    user_name: null,
    user_surname: null,
    phone_number: null
  };

  /* Using service. */
  constructor(private contactInfoService: ContactInfoService) { }

  /* Perform component initialization. */
  ngOnInit(): void {
    this.fetchData();
  }

  /* Load data to variable using services. */
  fetchData() {
    this.contactInfoService.getAllContactInfo().subscribe(contact => {
      this.contacts = contact;
    },
      err => {
        console.log(err);
      });
  }

  /* Reset create form after button clicking. */
  resetCreateForm() {
    this.data = {
      contact_id: null,
      user_name: null,
      user_surname: null,
      phone_number: null
    };
  }

  /* Reset update form after button clicking. */
  resetUpdateForm() {
    this.changingData = {
      contact_id: null,
      user_name: null,
      user_surname: null,
      phone_number: null
    };
  }

  /* Create a new contact using service. Writing data to a database table. */
  createContact() {
    if (this.data.user_name && this.data.user_surname && this.data.phone_number) {
      if (!this.contacts.find(contact => contact.user_name == this.data.user_name && contact.user_surname == this.data.user_surname)) {
        this.contactInfoService.insertContactInfo(this.data).subscribe(() => { this.fetchData(); });
        this.contacts.push({
          contact_id: this.contacts[this.contacts.length - 1].contact_id + 1,
          user_name: this.data.user_name,
          user_surname: this.data.user_surname,
          phone_number: this.data.phone_number
        }
        );
        this.visibleForm = "";
      } else {
        alert("User's contact with this name and surname exists!");
      }
    } else {
      alert("Input field must not be empty");
    }
  }

  /* Update contact data using a service. */
  updateContact() {
    if (this.changingData.user_name && this.changingData.user_surname && this.changingData.phone_number) {
      if (!this.contacts.find(contact => contact.user_name == this.changingData.user_name && contact.user_surname == this.changingData.user_surname && contact.contact_id != this.changingData.contact_id)) {
        this.contactInfoService.updateContactInfo(this.changingData).subscribe(() => { this.fetchData(); });
        for (var i = 0; i < this.contacts.length; i++) {
          if (this.changingData.contact_id == this.contacts[i].contact_id) {
            this.contacts[i].user_name = this.changingData.user_name;
            this.contacts[i].user_surname = this.changingData.user_surname;
            this.contacts[i].phone_number = this.changingData.phone_number;
          }
        }
        this.visibleForm = "";
      } else {
        alert("User's contact with this name and surname exists!"); this.visibleForm = "";
      }
    } else {
      alert("Input field must not be empty!"); this.visibleForm = "";
    }
  }

  /* Get data from table for updating contact data. */
  getContactForUpdate(id) {
    this.contactInfoService.getContactInfoByID(id).subscribe(contact => {
      this.changingData.contact_id = contact[0].contact_id;
      this.changingData.user_name = contact[0].user_name;
      this.changingData.user_surname = contact[0].user_surname;
      this.changingData.phone_number = contact[0].phone_number;
    },
      err => {
        console.log(err);
      });
  }

  /* Remove selected contact from database table. */
  deleteContact(id) {
    this.contactInfoService.deleteContactInfo(id).subscribe(() => { this.fetchData(); });
    this.contacts = this.contacts.filter(contact => contact.contact_id != id);
  }
}
