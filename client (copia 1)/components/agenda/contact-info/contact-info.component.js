System.register(["@angular/core", "./contact-info-forms/contact-info-modify-form.component", "../../../classes/Contact"], function(exports_1, context_1) {
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
    var core_1, contact_info_modify_form_component_1, core_2, Contact_1;
    var ContactInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (contact_info_modify_form_component_1_1) {
                contact_info_modify_form_component_1 = contact_info_modify_form_component_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            }],
        execute: function() {
            ContactInfoComponent = (function () {
                function ContactInfoComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Contact_1.Contact)
                ], ContactInfoComponent.prototype, "selectedContact", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], ContactInfoComponent.prototype, "state", void 0);
                ContactInfoComponent = __decorate([
                    core_1.Component({
                        selector: "contact-info",
                        templateUrl: "client/components/agenda/contact-info/contact-info.component.html",
                        directives: [contact_info_modify_form_component_1.ContactInfoModifyFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactInfoComponent);
                return ContactInfoComponent;
            }());
            exports_1("ContactInfoComponent", ContactInfoComponent);
        }
    }
});
//# sourceMappingURL=contact-info.component.js.map