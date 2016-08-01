System.register(["@angular/core", "./categories-list/categories-list.component", "./contacts-list/contacts-list.component", "./contact-info/contact-info.component", "../../classes/Person"], function(exports_1, context_1) {
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
    var core_1, categories_list_component_1, contacts_list_component_1, contact_info_component_1, Person_1;
    var AgendaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (categories_list_component_1_1) {
                categories_list_component_1 = categories_list_component_1_1;
            },
            function (contacts_list_component_1_1) {
                contacts_list_component_1 = contacts_list_component_1_1;
            },
            function (contact_info_component_1_1) {
                contact_info_component_1 = contact_info_component_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }],
        execute: function() {
            AgendaComponent = (function () {
                function AgendaComponent() {
                    this.selectedContact = new Person_1.Person(0, "Juanchito", "Quiroz");
                    this.infoState = 0;
                }
                AgendaComponent.prototype.onSelectedCategory = function (category) {
                    this.selectedCategory = category;
                };
                AgendaComponent.prototype.onDeletedCategory = function (category) {
                    var idx = this.categories.indexOf(category);
                    (idx != -1) && (this.categories.splice(idx, 1));
                };
                AgendaComponent.prototype.onModifiedCategory = function (category) {
                };
                AgendaComponent.prototype.onAddedContact = function (contact) {
                };
                AgendaComponent.prototype.onDeletedContact = function (contact) {
                };
                AgendaComponent.prototype.onModifiedContact = function (contact) {
                };
                AgendaComponent.prototype.onSelectedContact = function (contact) {
                };
                AgendaComponent = __decorate([
                    core_1.Component({
                        selector: "agenda",
                        templateUrl: "client/components/agenda/agenda.component.html",
                        directives: [
                            categories_list_component_1.CategoriesListComponent,
                            contacts_list_component_1.ContactsListComponent,
                            contact_info_component_1.ContactInfoComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AgendaComponent);
                return AgendaComponent;
            }());
            exports_1("AgendaComponent", AgendaComponent);
        }
    }
});
//# sourceMappingURL=agenda.component.js.map