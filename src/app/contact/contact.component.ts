// contact.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Formspree endpoint
      const formSpreeEndpoint = 'https://formspree.io/f/xzbllqbl';

      // Send form data to Formspree using HTTP POST
      this.http.post(formSpreeEndpoint, this.contactForm.value).subscribe(response => {
        console.log('Form submitted successfully!', response);
        alert('Form submitted successfully');
      }, error => {
        console.error('Error submitting form:', error);
      });
    }
  }
}
