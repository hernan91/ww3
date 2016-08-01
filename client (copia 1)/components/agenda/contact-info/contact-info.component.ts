import { Component } from "@angular/core";
import { ContactInfoModifyFormComponent } from "./contact-info-forms/contact-info-modify-form.component"
import { ContactInfoShowFormComponent } from "./contact-info-forms/contact-info-show-form.component"
import { Input } from "@angular/core";

import { Contact } from "../../../classes/Contact"
import { Person } from "../../../classes/Person"

@Component({
	selector: "contact-info",
	templateUrl: "client/components/agenda/contact-info/contact-info.component.html",
	directives: [ ContactInfoModifyFormComponent ]
})
export class ContactInfoComponent{
	@Input() selectedContact: Contact;
	@Input() state: number;
}