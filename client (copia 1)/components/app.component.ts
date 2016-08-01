import { Component, OnInit } from '@angular/core';
import { AgendaComponent } from "./agenda/agenda.component";

@Component({
	selector: 'app',
	templateUrl: 'client/components/app.component.html',
	directives: [
		AgendaComponent,
	]
})
export class AppComponent implements OnInit{
	title = 'app works!';

	ngOnInit(){
		
	}
}
