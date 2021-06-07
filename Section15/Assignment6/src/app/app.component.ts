import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  //selectedSubscription = 'Basic';
  @ViewChild('signupForm') sgnForm: NgForm;

  user = {
    email: '',
    subscription: '',
    password: '',
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.sgnForm.value.email;
    this.user.subscription = this.sgnForm.value.subscription;
    this.user.password = this.sgnForm.value.password;
  }
}
