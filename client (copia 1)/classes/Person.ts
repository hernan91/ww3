import {Contact} from "./Contact";

export class Person extends Contact{
	constructor(
		id: number,
		protected name: string,
		protected lastname: string,
		direction?:string,
		dir_num?: number,
		phone?:string,
		email?: string,
		website?:string,
		observations?: Array<String>,
		protected birthday?:Date
	){
		super(id, direction, dir_num, phone, website, observations, email);
	}
}