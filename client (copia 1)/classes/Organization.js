System.register(["./Contact"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Contact_1;
    var Organization;
    return {
        setters:[
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            }],
        execute: function() {
            Organization = (function (_super) {
                __extends(Organization, _super);
                function Organization(id, trademark, direction, dir_num, phone, website, observations, email) {
                    _super.call(this, id, direction, dir_num, phone, website, observations, email);
                    this.trademark = trademark;
                }
                Organization.prototype.nulizar = function () {
                    this.direction = null;
                    this.phone = null;
                    this.website = null;
                    this.observations = null;
                    this.email = null;
                };
                return Organization;
            }(Contact_1.Contact));
            exports_1("Organization", Organization);
        }
    }
});
//# sourceMappingURL=Organization.js.map