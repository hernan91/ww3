System.register(['@angular/core', "../../../../../classes/Person"], function(exports_1, context_1) {
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
    var core_1, Person_1;
    var ContactInfoModifyPersonFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }],
        execute: function() {
            ContactInfoModifyPersonFormComponent = (function () {
                function ContactInfoModifyPersonFormComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Person_1.Person)
                ], ContactInfoModifyPersonFormComponent.prototype, "person", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ContactInfoModifyPersonFormComponent.prototype, "action", void 0);
                ContactInfoModifyPersonFormComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-info-modify-person-form',
                        templateUrl: 'client/components/agenda/contact-info/contact-info-forms/contact-info-edit-forms/contact-info-modify-person-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactInfoModifyPersonFormComponent);
                return ContactInfoModifyPersonFormComponent;
            }());
            exports_1("ContactInfoModifyPersonFormComponent", ContactInfoModifyPersonFormComponent);
        }
    }
});
//# sourceMappingURL=contact-info-modify-person-form.component.js.map