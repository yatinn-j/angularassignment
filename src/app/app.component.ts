import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "My Angular Project";
  sampleform: FormGroup;

  ngOnInit() {
    this.sampleform = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required],
        [this.validNameAsync]
      ),
      projectemail: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      projectStatus: new FormControl("critical")
    });
  }

  onFormSubmit() {
    console.log(this.sampleform.value);
    setTimeout(() => {
      this.sampleform.patchValue({
        projectname: "",
        projectemail: "",
        projectStatus: "critical"
      });
    }, 0);
  }

  validName(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.toLowerCase() == "test") {
      return { invalidName: true };
    } else return { invalidName: false };
  }

  validNameAsync(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value && control.value.toLowerCase() == "test") {
          resolve({ invalidName: true });
        } else resolve({ invalidName: false });
      }, 1500);
    });
    return promise;
  }
}
