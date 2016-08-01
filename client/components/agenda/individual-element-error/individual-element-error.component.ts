import { Component, Input } from '@angular/core';
declare var __moduleName: string;

@Component({
	selector: 'individual-element-error',
	moduleId: __moduleName || module.id,
	templateUrl: './individual-element-error.component.html'
})
export class IndividualElementErrorComponent {
	@Input() elementName: string; //apellido, nombre
	mensajeError: string;

	onChange(value:string){
		if(value){
			return this.dirty();
		}
		this.untouched();
	}

	private untouched(){
		this.mensajeError = "Debe ingresar un " + this.elementName;
	}
	private dirty(){
		this.mensajeError = "Debe ingresar un " + this.elementName + " válido";
	}

}