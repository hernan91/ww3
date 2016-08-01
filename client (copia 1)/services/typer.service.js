System.register(['@angular/core', "../classes/Person", "../classes/Organization"], function(exports_1, context_1) {
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
    var core_1, Person_1, Organization_1;
    var TyperService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            },
            function (Organization_1_1) {
                Organization_1 = Organization_1_1;
            }],
        execute: function() {
            TyperService = (function () {
                function TyperService() {
                }
                TyperService.prototype.typeOfContact = function (obj) {
                    if (obj instanceof Person_1.Person) {
                        return "Person";
                    }
                    else if (obj instanceof Organization_1.Organization) {
                        return "Organization";
                    }
                };
                TyperService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TyperService);
                return TyperService;
            }());
            exports_1("TyperService", TyperService);
        }
    }
});
//# sourceMappingURL=typer.service.js.map