System.register(["@angular/core", "./contact-info-edit-forms/contact-info-edit-organization-form.component", "./contact-info-edit-forms/contact-info-edit-person-form.component", "./header-contact-info/header-contact-info.component", "../../../../services/typer.service", '../../../../classes/Contact'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, contact_info_edit_organization_form_component_1, contact_info_edit_person_form_component_1, header_contact_info_component_1, typer_service_1, Contact_1;
    var ContactInfoModifyFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (contact_info_edit_organization_form_component_1_1) {
                contact_info_edit_organization_form_component_1 = contact_info_edit_organization_form_component_1_1;
            },
            function (contact_info_edit_person_form_component_1_1) {
                contact_info_edit_person_form_component_1 = contact_info_edit_person_form_component_1_1;
            },
            function (header_contact_info_component_1_1) {
                header_contact_info_component_1 = header_contact_info_component_1_1;
            },
            function (typer_service_1_1) {
                typer_service_1 = typer_service_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            }],
        execute: function() {
            ContactInfoModifyFormComponent = (function () {
                function ContactInfoModifyFormComponent(typerService) {
                    this.typerService = typerService;
                    this.modifiedContact = this.selectedContact;
                    this.fake = "Person";
                }
                ContactInfoModifyFormComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Contact_1.Contact)
                ], ContactInfoModifyFormComponent.prototype, "selectedContact", void 0);
                ContactInfoModifyFormComponent = __decorate([
                    core_1.Component({
                        selector: "contact-info-edit-form",
                        templateUrl: "client/components/agenda/contact-info/contact-info-forms/contact-info-modify-form.component.html",
                        directives: [contact_info_edit_organization_form_component_1.ContactInfoEditOrganizationFormComponent, contact_info_edit_person_form_component_1.ContactInfoEditPersonFormComponent, header_contact_info_component_1.HeaderContactInfoComponent],
                        providers: [typer_service_1.TyperService]
                    }), 
                    __metadata('design:paramtypes', [typer_service_1.TyperService])
                ], ContactInfoModifyFormComponent);
                return ContactInfoModifyFormComponent;
            }());
            exports_1("ContactInfoModifyFormComponent", ContactInfoModifyFormComponent);
        }
    }
});
//# sourceMappingURL=contact-info-edit-form.component.js.map