import { Component, Input } from '@angular/core';
import { Organization } from "../../../../../classes/Organization"


@Component({
	selector: 'contact-info-modify-organization-form',
	templateUrl: 'client/components/agenda/contact-info/contact-info-forms/contact-info-edit-forms/contact-info-modify-organization-form.component.html'
})
export class ContactInfoModifyOrganizationFormComponent {
	@Input() organization: Organization;
}