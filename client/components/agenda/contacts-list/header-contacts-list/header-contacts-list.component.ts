import {Component} from "@angular/core";
import { DropdownMenuComponent } from "../../dropdown-menu/dropdown-menu.component"

@Component({
	selector: "header-contacts-list",
	directives: [DropdownMenuComponent],
	templateUrl: "client/components/agenda/contacts-list/header-contacts-list/header-contacts-list.component.html"
})
export class HeaderContactsListComponent{
	
}