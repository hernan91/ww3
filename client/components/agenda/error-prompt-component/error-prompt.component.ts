import { Component, Input } from '@angular/core';
declare var __moduleName: string;
declare var $:any;

@Component({
	selector: 'error-prompt',
	moduleId: __moduleName || module.id,
	template: `<div class="ui basic red pointing prompt label transition visible">{{errorMessage}}`
})
export class ErrorPromptComponent {
	@Input() errorMessage: string;
}