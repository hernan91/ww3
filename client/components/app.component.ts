import { Component, OnInit } from '@angular/core';
import { AgendaComponent } from "./agenda/agenda.component";
declare var __moduleName: string;

@Component({
	selector: 'app',
	moduleId: __moduleName || module.id,
	directives: [AgendaComponent],
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
	title = 'app works!';

	ngOnInit(){
		
	}
}
