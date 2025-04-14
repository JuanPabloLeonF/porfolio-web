import { Component, inject, OnInit } from '@angular/core';
import { LinkedinSvgComponent } from "../../components/icons/linkedin-svg/linkedin-svg.component";
import { GithubSvgComponent } from "../../components/icons/github-svg/github-svg.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [
    LinkedinSvgComponent, 
    GithubSvgComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private http: HttpClient = inject(HttpClient);
  protected contactForm!: FormGroup;
  protected formSubmitted = false;
  protected formSuccess = false;
  protected formError = false;

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  protected onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      this.http.post('https://formspree.io/f/xanekeny', this.contactForm.value)
        .subscribe({
          next: () => {
            this.formSuccess = true;
            this.formSubmitted = false;
            this.contactForm.reset();
            alert(`GRACIAS POR PONERTE POR ESCRIBIR ME, TE CONTACTARÉ LO MAS PRONTO POSIBLE ${this.contactForm.value.name}`);
          },
          error: (error) => {
            this.formError = true;
            this.formSubmitted = false;
            console.error('Error al enviar el formulario', error);
          }
        });
    } else {
      alert('Formulario inválido');
    }
  }
}
