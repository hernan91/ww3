import { Component } from "@angular/core";
import { CategoriesListComponent } from "./categories-list/categories-list.component"
import { ContactsListComponent } from "./contacts-list/contacts-list.component"
import { ContactInfoComponent } from "./contact-info/contact-info.component"
declare var __moduleName: string
import { Category } from "@classes/Category";
import { Contact } from "@classes/Contact";
import { Person } from "@classes/Person";

@Component({
	selector: "agenda",
	moduleId: __moduleName || module.id,
	templateUrl: "./agenda.component.html",
	directives: [
		CategoriesListComponent, 
		ContactsListComponent,
		ContactInfoComponent
	]
})
export class AgendaComponent{
	categories: Array<Category>;
	selectedCategory: Category;
	selectedContact: Contact;
	infoState: number;
	
	constructor(){
		this.selectedContact = new Person(0, "Juanchito", "Quiroz");
		this.infoState = 0;
	}

	onSelectedCategory(category) {
		this.selectedCategory = category;
	}
	onDeletedCategory(category) {

		let idx:number = this.categories.indexOf(category);
		(idx != -1) && (this.categories.splice(idx, 1));
	}
	onModifiedCategory(category) {
		
	}
	onAddedContact(contact) {
		
	}
	onDeletedContact(contact) {
		
	}
	onModifiedContact(contact) {
		
	}
	onSelectedContact(contact) {
		
	}
}