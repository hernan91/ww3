import { Component, Input } from '@angular/core';
import { TyperService } from "@services/typer.service"//"../../../services/typer.service"
import { Contact } from "@classes/Contact"
declare var __moduleName: string;

import { ContactInfoOrganizationFormComponent } from "./contact-info-edit-forms/contact-info-organization-form.component"
import { ContactInfoPersonFormComponent } from "./contact-info-edit-forms/contact-info-person-form.component" 

@Component({
    selector: 'contact-info-modify',
    moduleId: __moduleName || module.id,
    templateUrl: './contact-info-modify.component.html',
    providers: [ TyperService ],
    directives: [ ContactInfoOrganizationFormComponent, ContactInfoPersonFormComponent ]
})
export class ContactInfoModifyComponent {
    @Input() selectedContact: Contact;
    constructor(
        private typerService: TyperService
    ){}
}