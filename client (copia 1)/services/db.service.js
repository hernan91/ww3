System.register(["@angular/core", "../classes/Category", "../classes/Organization", "../classes/Person"], function(exports_1, context_1) {
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
    var core_1, Category_1, Organization_1, Person_1;
    var DbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Category_1_1) {
                Category_1 = Category_1_1;
            },
            function (Organization_1_1) {
                Organization_1 = Organization_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }],
        execute: function() {
            DbService = (function () {
                function DbService() {
                    this.CATEGORIES = [
                        new Category_1.Category(1, "Familia", [
                            new Person_1.Person(1, "Hernan", "da Silva", "Islas Malvinas 1934", "2974512312", "Hernanunpa@Gmail.com", "hernan.com", ["alto", "flaco"]),
                            new Person_1.Person(2, "Ramiro", "da Silva", "Islas Malvinas 1934", "2974599992", "Ramiro3929@Gmail.com", "ramiro.com", ["asd", "qwe"]),
                        ]),
                        new Category_1.Category(2, "Amigos", [
                            new Person_1.Person(5, "Ramon", "Amigazo", "Calle 231231", "32424324", "asd@Gamilc.om", "asdasd.com", ["Amigacho", "florero"]),
                            new Person_1.Person(8, "Fafo", "Amigazo", "Calle 324234", "11211111", "2222@Gamilc.om", "asdasd.com", ["Amigachoasdad"])
                        ]),
                        new Category_1.Category(3, "Empresas", [
                            new Organization_1.Organization(10, "Carrefour", "Namuncura", "123123132123", "Carrefour.com", ["Feo", "malo"])
                        ])
                    ];
                }
                DbService.prototype.getAllCategories = function (userId) {
                    var out = this.CATEGORIES.slice();
                    out.map(function (category) {
                        delete category.contacts;
                    });
                    return out;
                };
                DbService.prototype.addCategory = function (userId, category) {
                    this.CATEGORIES.push(category);
                };
                //categoryId: Category
                DbService.prototype.deleteCategory = function (userId, category) {
                    var catIdx = this.CATEGORIES.indexOf(category);
                    this.CATEGORIES.splice(catIdx, 1);
                };
                DbService.prototype.modifyCategory = function (userId, category) {
                    this.CATEGORIES.forEach(function (cat) {
                        if (category.id === cat.id) {
                            cat = category;
                        }
                    });
                };
                //categoryId:number
                DbService.prototype.getAllContactsOfCategory = function (userId, categoryId) {
                    var categories = this.CATEGORIES.slice();
                    var selectedCat;
                    /*		if (idx != -1) {
                                selectedCat = categories.slice(idx, 1)[0];
                            }*/
                    selectedCat.contacts.forEach(function (contact) {
                        contact.nulizar();
                    });
                    return selectedCat.contacts;
                };
                //categoryId: number, contactId: number
                DbService.prototype.getContactInfo = function (userId, category, contact) {
                    var catIdx = this.CATEGORIES.indexOf(category);
                    var contArray = this.CATEGORIES[catIdx].contacts;
                    var cont = contArray[contArray.indexOf(contact)];
                    return $.extend(true, {}, cont);
                };
                DbService.prototype.deleteContact = function (userId, category, contact) {
                    var catIdx = this.CATEGORIES.indexOf(category);
                    var contArray = this.CATEGORIES[catIdx].contacts;
                    var contIdx = contArray.indexOf(contact);
                    this.CATEGORIES.splice(contIdx, 1);
                };
                DbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DbService);
                return DbService;
            }());
            exports_1("DbService", DbService);
        }
    }
});
//# sourceMappingURL=db.service.js.map