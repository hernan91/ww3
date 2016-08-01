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
    var ContactInfoEditPersonFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }],
        execute: function() {
            ContactInfoEditPersonFormComponent = (function () {
                function ContactInfoEditPersonFormComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Person_1.Person)
                ], ContactInfoEditPersonFormComponent.prototype, "person", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ContactInfoEditPersonFormComponent.prototype, "action", void 0);
                ContactInfoEditPersonFormComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-info-edit-person-form',
                        templateUrl: 'client/components/agenda/contact-info/contact-info-forms/contact-info-edit-forms/contact-info-edit-person-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactInfoEditPersonFormComponent);
                return ContactInfoEditPersonFormComponent;
            }());
            exports_1("ContactInfoEditPersonFormComponent", ContactInfoEditPersonFormComponent);
        }
    }
});
//# sourceMappingURL=contact-info-edit-person-form.component.js.map