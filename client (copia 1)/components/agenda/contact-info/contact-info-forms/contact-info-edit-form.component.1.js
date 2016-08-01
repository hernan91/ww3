System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1, core_2;
    var ContactInfoEditFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            ContactInfoEditFormComponent = (function () {
                function ContactInfoEditFormComponent() {
                }
                ContactInfoEditFormComponent.prototype.ngAfterViewInit = function () {
                    $(this.form.nativeElement)
                        .form({
                        fields: {
                            name: {
                                identifier: 'name',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese su nombre'
                                    }
                                ]
                            },
                            lastname: {
                                identifier: 'lastname',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese su apellido'
                                    }
                                ]
                            },
                            direction: {
                                identifier: 'direction',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese una dirección'
                                    }
                                ]
                            },
                            dir_number: {
                                identifier: 'dir_number',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese el número de la dirección'
                                    },
                                    {
                                        type: 'integer',
                                        prompt: 'Ingrese un número de dirección válido'
                                    }
                                ]
                            },
                            phone: {
                                identifier: 'phone',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese un número de telefono'
                                    },
                                    {
                                        type: 'integer',
                                        prompt: 'Ingrese un número de teléfono valido'
                                    }
                                ]
                            },
                            email: {
                                identifier: 'email',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese un email'
                                    },
                                    {
                                        type: 'email',
                                        prompt: 'Ingrese un email válido'
                                    }
                                ]
                            },
                            website: {
                                identifier: 'website',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese un sitio web'
                                    },
                                    {
                                        type: 'url',
                                        prompt: 'Ingrese un url válido (con www)'
                                    }
                                ]
                            },
                            birthday: {
                                identifier: 'birthday',
                                rules: [
                                    {
                                        type: 'empty',
                                        prompt: 'Ingrese una fecha de nacimiento'
                                    }
                                ]
                            }
                        },
                        inline: true,
                        on: 'blur',
                    });
                };
                __decorate([
                    core_2.ViewChild('form'), 
                    __metadata('design:type', core_2.ElementRef)
                ], ContactInfoEditFormComponent.prototype, "form", void 0);
                ContactInfoEditFormComponent = __decorate([
                    core_1.Component({
                        selector: "contact-info-edit-form",
                        templateUrl: "client/components/agenda/contact-info/contact-info-forms/contact-info-edit-form.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactInfoEditFormComponent);
                return ContactInfoEditFormComponent;
            }());
            exports_1("ContactInfoEditFormComponent", ContactInfoEditFormComponent);
        }
    }
});
//# sourceMappingURL=contact-info-edit-form.component.1.js.map