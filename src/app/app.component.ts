import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Angular Project";
  @ViewChild("f", { static: false }) form: NgForm;
  submitted = false;
  defaultSubscription = "advance";
  result = {
    email: "",
    password: "",
    subscription: ""
  };

  onFormSubmit = () => {
    this.submitted = true;
    this.result = {
      email: this.form.value.email,
      password: this.form.value.password,
      subscription: this.form.value.subscription
    };

    this.form.reset();
  };
}
