System.register(["@angular/core", "./header-categories-list/header-categories-list.component"], function(exports_1, context_1) {
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
    var core_1, core_2, header_categories_list_component_1;
    var CategoriesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (header_categories_list_component_1_1) {
                header_categories_list_component_1 = header_categories_list_component_1_1;
            }],
        execute: function() {
            CategoriesListComponent = (function () {
                function CategoriesListComponent() {
                    this.selectedCategoryEmitter = new core_2.EventEmitter();
                    this.deletedCategoryEmitter = new core_2.EventEmitter();
                    this.modifiedCategoryEmitter = new core_2.EventEmitter();
                }
                CategoriesListComponent.prototype.ngOnInit = function () {
                };
                CategoriesListComponent.prototype.getNumContacts = function (categories) {
                    var out = 0;
                    categories.forEach(function (category) {
                        out += category.getContacts().length;
                    });
                    return out;
                };
                CategoriesListComponent.prototype.onSelectCategory = function (category) {
                    this.selectedCategoryEmitter.emit(category);
                };
                CategoriesListComponent.prototype.onDeleteCategory = function () {
                };
                CategoriesListComponent.prototype.onModifyCategory = function () {
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Array)
                ], CategoriesListComponent.prototype, "categories", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], CategoriesListComponent.prototype, "selectedCategoryEmitter", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], CategoriesListComponent.prototype, "deletedCategoryEmitter", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], CategoriesListComponent.prototype, "modifiedCategoryEmitter", void 0);
                CategoriesListComponent = __decorate([
                    core_1.Component({
                        selector: "categories-list",
                        templateUrl: "client/components/agenda/categories-list/categories-list.component.html",
                        directives: [header_categories_list_component_1.HeaderCategoriesListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CategoriesListComponent);
                return CategoriesListComponent;
            }());
            exports_1("CategoriesListComponent", CategoriesListComponent);
        }
    }
});
//# sourceMappingURL=categories-list.component.js.map