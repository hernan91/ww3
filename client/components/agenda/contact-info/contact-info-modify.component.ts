import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/common"
import { ngFormModel } from "@angular/core"
import { TyperService } from "@services/typer.service"//"../../../services/typer.service"
import { Contact } from "@classes/Contact"
import { Person } from "@classes/Person"
import { Organization } from "@classes/Organization"
import { ErrorPromptComponent } from "../error-prompt-component/error-prompt.component"
declare var __moduleName: string;

@Component({
    selector: 'contact-info-modify',
    moduleId: __moduleName || module.id,
    templateUrl: './contact-info-modify.component.html',
    providers: [ TyperService ],
    directives: [ ErrorPromptComponent ]
})
export class ContactInfoModifyComponent implements OnInit{
    @Input() selectedContact: Contact;
    private storedContact: Contact;
    constructor(
        private typerService: TyperService,
        private formBuilder: FormBuilder,
        private valid: boolean
    ){
        this.personForm = formBuilder.group({
            name: ["", Validators.required],
            lastname: ["", Validators.required],
            email: ["", Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
        });
        this.valid = this.personForm.value
    }
    ngOnInit(){
        this.storedContact = this.selectedContact;
    }

    restoreContact():void{
        console.log(this.storedContact);
        console.log(this.selectedContact);
        this.selectedContact = this.storedContact;
    }
}