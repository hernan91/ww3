import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../classes/User";
import {Category} from "../classes/Category"
import {Organization} from "../classes/Organization";
import {Person} from "../classes/Person";
import {Contact} from "../classes/Contact"
declare var $: any;


@Injectable()
export class DbService{
	
	constructor(
		
	) { }
	
	getAllCategories(userId: number):Array<Category>{
		let out: Array<Category> = this.CATEGORIES.slice();
		out.map(category => {
			delete category.contacts;
		});
		return out;
	}
	addCategory(userId: number, category: Category):void {
		this.CATEGORIES.push(category);
	}
	//categoryId: Category
	deleteCategory(userId: number, category: Category):void {
		let catIdx: number = this.CATEGORIES.indexOf(category);
		this.CATEGORIES.splice(catIdx, 1);
	}
	modifyCategory(userId: number, category: Category):void {
		this.CATEGORIES.forEach( cat => {
			if (category.id === cat.id) {
				cat = category;
			} 
		});
	}
	//categoryId:number
	getAllContactsOfCategory(userId: number, categoryId: number): Array<Contact> {
		let categories: Array<Category> = this.CATEGORIES.slice();
		let selectedCat: Category;
/*		if (idx != -1) {
			selectedCat = categories.slice(idx, 1)[0];
		}*/
		selectedCat.contacts.forEach(contact => {
			contact.nulizar();
		});
		return selectedCat.contacts;
	}
	//categoryId: number, contactId: number
	getContactInfo(userId: number, category: Category, contact: Contact): Contact {
		let catIdx: number = this.CATEGORIES.indexOf(category);
		let contArray: Contact[] = this.CATEGORIES[catIdx].contacts;
		let cont: Contact = contArray[contArray.indexOf(contact)];
		return $.extend(true, {}, cont);
	}
	deleteContact(userId: number, category: Category, contact: Contact) {
		let catIdx: number = this.CATEGORIES.indexOf(category);
		let contArray: Contact[] = this.CATEGORIES[catIdx].contacts;
		let contIdx: number = contArray.indexOf(contact);
		this.CATEGORIES.splice(contIdx, 1);
	}

	private CATEGORIES:Array<Category> = [
		new Category(1, "Familia",[
			new Person(
				1, "Hernan", "da Silva", "Islas Malvinas 1934", "2974512312", "Hernanunpa@Gmail.com", "hernan.com", ["alto", "flaco"]),
			new Person(
				2, "Ramiro", "da Silva", "Islas Malvinas 1934", "2974599992", "Ramiro3929@Gmail.com", "ramiro.com", ["asd", "qwe"]),
		]),
		new Category(2, "Amigos", [
			new Person(5, "Ramon", "Amigazo", "Calle 231231", "32424324", "asd@Gamilc.om", "asdasd.com", ["Amigacho", "florero"]),
			new Person(8, "Fafo", "Amigazo", "Calle 324234", "11211111", "2222@Gamilc.om", "asdasd.com", ["Amigachoasdad"])
		]),
		new Category(3, "Empresas", [
			new Organization(
				10, "Carrefour", "Namuncura", "123123132123", "Carrefour.com", ["Feo", "malo"])
		])
	]
	
}

