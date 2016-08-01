import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'header-contact-info',
    templateUrl: 'client/components/agenda/contact-info/contact-info-forms/header-contact-info/header-contact-info.component.html'
})
export class HeaderContactInfoComponent{
    @Output() selectedTypeEmitter = new EventEmitter<String>();
    selectedType: String;

    constructor(){
        
    }
}