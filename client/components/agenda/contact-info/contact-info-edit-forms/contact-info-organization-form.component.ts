import { Component, Input } from '@angular/core';
import { Organization } from "@classes/Organization"
import { IndividualElementErrorComponent } from "@components/agenda/individual-element-error/individual-element-error.component"
declare var __moduleName: string;

@Component({
	selector: 'contact-info-organization-form',
	templateUrl: "./contact-info-organization-form.component.html",
	moduleId: __moduleName || module.id,
	directives: [ IndividualElementErrorComponent ]
})
export class ContactInfoOrganizationFormComponent {
	@Input() organization: Organization;

	constructor(){
		
	}
}