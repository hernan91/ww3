import {Contact} from "./Contact";

export class Organization extends Contact{
	constructor(
		id: number,
		protected trademark: string,
		direction?: string,
		dir_num?: number, 
		phone?: string,
		website?: string,
		observations?: Array<String>,
		email?: string
	){
		super(id, direction, dir_num, phone, website, observations, email);
	}
	nulizar(){
		this.direction = null;
		this.phone = null;
		this.website = null;
		this.observations = null;
		this.email = null;
	}
}