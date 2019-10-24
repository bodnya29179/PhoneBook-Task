import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactInfo {
  contact_id: number,
  user_name: string;
  user_surname: string;
  phone_number: string;
}

@Injectable({
  providedIn: 'root'
})

/* Service for working with contact data. */
export class ContactInfoService {

  /* Using HTTP Client for CRUD functions. */
  constructor(private http: HttpClient) { }

  /* Load all data. */
  getAllContactInfo(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>('http://localhost:3000/contactinfo/');
  }

  /* Load data by id. */
  getContactInfoByID(id: number): Observable<ContactInfo> {
    return this.http.get<ContactInfo>('http://localhost:3000/contactinfo/' + id);
  }

  /* Writing data to a table. */
  insertContactInfo(phonenumber: ContactInfo): Observable<ContactInfo> {
    return this.http.post<ContactInfo>('http://localhost:3000/contactinfo/create', phonenumber);
  }

  /* Updating table data. */
  updateContactInfo(phonenumber: ContactInfo): Observable<void> {
    return this.http.put<void>('http://localhost:3000/contactinfo/update/', phonenumber);
  }

  /* Delete table data. */
  deleteContactInfo(id: number) {
    return this.http.delete('http://localhost:3000/contactinfo/delete/' + id);
  }
}
