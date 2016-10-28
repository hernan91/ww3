export class User{
	constructor(
		protected username: string,
		protected password: string,
		protected id?: number,
		protected name?: string,
		protected lastname?: string,
		protected email?: string,
		protected event_time?: number		
	){}
}