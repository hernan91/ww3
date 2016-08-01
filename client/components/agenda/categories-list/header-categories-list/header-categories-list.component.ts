import {Component} from "@angular/core";
import { DropdownMenuComponent } from "../../dropdown-menu/dropdown-menu.component"

@Component({
	selector: "header-categories-list",
	directives: [DropdownMenuComponent],
	templateUrl: "client/components/agenda/categories-list/header-categories-list/header-categories-list.component.html"
})
export class HeaderCategoriesListComponent{
	
}