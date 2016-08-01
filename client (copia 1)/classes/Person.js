System.register(["./Contact"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Contact_1;
    var Person;
    return {
        setters:[
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            }],
        execute: function() {
            Person = (function (_super) {
                __extends(Person, _super);
                function Person(id, name, lastname, direction, dir_num, phone, email, website, observations, birthday) {
                    _super.call(this, id, direction, dir_num, phone, website, observations, email);
                    this.name = name;
                    this.lastname = lastname;
                    this.birthday = birthday;
                }
                return Person;
            }(Contact_1.Contact));
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map