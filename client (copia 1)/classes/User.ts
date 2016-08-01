export class User{
	constructor(
		id: number,
		protected name: string,
		protected lastname: string,
		protected username: string,
		protected password: string,
		protected email: string,
		protected event_time: number		
	){}
}