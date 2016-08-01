import {Contact} from "./Contact"

export class Category{
	constructor(
		public id, 
		public name:string, 
		public contacts?:Array<Contact>
	){}

	public getId():string{
		return this.id;
	}
	public getName():string{
		return this.name;
	}
	public getContacts():Array<Contact>{
		return this.contacts;
	}
}