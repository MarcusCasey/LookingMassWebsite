import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  name;
  email;
  message;

  constructor() {}

  ngOnInit() {}

  submitForm() {
    const message = `Thank you for contacting us.`;
    alert(message);
    // grab all fields and their values
  }
}
