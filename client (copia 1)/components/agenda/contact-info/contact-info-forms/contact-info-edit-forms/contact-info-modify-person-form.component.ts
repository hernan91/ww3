import { Component, Input } from '@angular/core';
import { Person } from "../../../../../classes/Person"

@Component({
	selector: 'contact-info-modify-person-form',
	templateUrl: 'client/components/agenda/contact-info/contact-info-forms/contact-info-edit-forms/contact-info-modify-person-form.component.html'
})
export class ContactInfoModifyPersonFormComponent {
    @Input() person: Person;
    @Input() action: String;
}