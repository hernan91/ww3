import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Input, OnInit } from "@angular/core";
import { ContactInfoModifyOrganizationFormComponent } from "./contact-info-edit-forms/contact-info-modify-organization-form.component"
import { ContactInfoModifyPersonFormComponent } from "./contact-info-edit-forms/contact-info-modify-person-form.component"
import { HeaderContactInfoComponent } from "./header-contact-info/header-contact-info.component"
import { Person } from "../../../../classes/Person"
import { TyperService } from "../../../../services/typer.service"

import { Contact } from '../../../../classes/Contact';

@Component({
	selector: "contact-info-modify-form",
	templateUrl: "client/components/agenda/contact-info/contact-info-forms/contact-info-modify-form.component.html",
	directives: [ ContactInfoModifyOrganizationFormComponent, ContactInfoModifyPersonFormComponent, HeaderContactInfoComponent ],
	providers: [ TyperService ]
})
export class ContactInfoModifyFormComponent implements OnInit{
	@Input() selectedContact: Contact;
	modifiedContact: Contact = this.selectedContact;
	fake: String = "Person";
	
	constructor(
		private typerService: TyperService
	){}

	ngOnInit(){
		
	}
}
