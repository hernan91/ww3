export abstract class Contact{
	//type
	//user_id
	constructor(
		protected id:number, 
		protected direction?:string,
		protected dir_num?: number,
		protected phone?:string,
		protected website?:string,
		protected observations?: Array<String>,
		protected email?: string
	){}
	public setId(id:number){
		this.id = id;
	}
	public setDirection(direction:string){
		this.direction = direction;
	}
	public setPhone(phone:string){
		this.phone = phone;
	}
	public setWebsite(website:string){
		this.website = website;
	}
	public setObservations(observations:Array<String>){
		this.observations = observations;
	}
}