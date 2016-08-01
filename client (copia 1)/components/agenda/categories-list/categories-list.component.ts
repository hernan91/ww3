import { Component } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core"
import { HeaderCategoriesListComponent } from "./header-categories-list/header-categories-list.component"

import { Category } from "../../../classes/Category"

@Component({	
	selector: "categories-list",
	templateUrl: "client/components/agenda/categories-list/categories-list.component.html",
	directives: [HeaderCategoriesListComponent]
})
export class CategoriesListComponent{
	@Input() categories: Array<Category>;
	selectedCategory: Category;
	@Output() selectedCategoryEmitter = new EventEmitter<Category>();
	@Output() deletedCategoryEmitter = new EventEmitter<Category>();
	@Output() modifiedCategoryEmitter = new EventEmitter<Category>();
	

	constructor(
		
	){}
	ngOnInit(){
		
	}
	getNumContacts(categories:Array<Category>):number{
		let out:number = 0;
		categories.forEach( category=>{
			out += category.getContacts().length
		});
		return out;
	}

	onSelectCategory(category:Category){
		this.selectedCategoryEmitter.emit(category);
	}
	onDeleteCategory(){

	}
	onModifyCategory(){

	}
	
}