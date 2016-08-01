import { Component } from "@angular/core";
import { ContactInfoNewComponent } from "./contact-info-new.component"
import { ContactInfoModifyComponent } from "./contact-info-modify.component"
import { ContactInfoShowComponent } from "./contact-info-show.component"
import { Input } from "@angular/core";
declare var __moduleName: string;
import { Contact } from "@classes/Contact"
import { Person } from "@classes/Person"

@Component({
	selector: "contact-info",
	moduleId: __moduleName || module.id,
	templateUrl: "./contact-info.component.html",
	directives: [ ContactInfoNewComponent, ContactInfoModifyComponent, ContactInfoModifyComponent ]
})
export class ContactInfoComponent{
	@Input() selectedContact: Contact;
	@Input() state: number;
}