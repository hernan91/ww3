import {Component, Input} from "@angular/core";
import {HeaderContactsListComponent} from "./header-contacts-list/header-contacts-list.component";
import {Contact} from "../../../classes/Contact"
import {Category} from "../../../classes/Category"
import {Organization} from "../../../classes/Organization"
import {Person} from "../../../classes/Person"

@Component({
	selector: "contacts-list",
	templateUrl: "client/components/agenda/contacts-list/contacts-list.component.html",
	directives: [HeaderContactsListComponent]
})
export class ContactsListComponent{
	@Input("selectedCategory") category:Category;
	
}