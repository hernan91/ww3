System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category;
    return {
        setters:[],
        execute: function() {
            Category = (function () {
                function Category(id, name, contacts) {
                    this.id = id;
                    this.name = name;
                    this.contacts = contacts;
                }
                Category.prototype.getId = function () {
                    return this.id;
                };
                Category.prototype.getName = function () {
                    return this.name;
                };
                Category.prototype.getContacts = function () {
                    return this.contacts;
                };
                return Category;
            }());
            exports_1("Category", Category);
        }
    }
});
//# sourceMappingURL=Category.js.map