import { Component, Input } from '@angular/core';
declare var __moduleName: string;
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic"
import { Person } from "@classes/Person"
import { NgForm } from '@angular/forms'

@Component({
	selector: 'contact-info-person-form',
	moduleId: __moduleName || module.id,
	templateUrl: "./contact-info-person-form.component.html",
	directives: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ]
})
export class ContactInfoPersonFormComponent {
	@Input() person: Person;
	constructor(){

	}
}