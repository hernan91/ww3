System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contact;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                //type
                //user_id
                function Contact(id, direction, dir_num, phone, website, observations, email) {
                    this.id = id;
                    this.direction = direction;
                    this.dir_num = dir_num;
                    this.phone = phone;
                    this.website = website;
                    this.observations = observations;
                    this.email = email;
                }
                Contact.prototype.setId = function (id) {
                    this.id = id;
                };
                Contact.prototype.setDirection = function (direction) {
                    this.direction = direction;
                };
                Contact.prototype.setPhone = function (phone) {
                    this.phone = phone;
                };
                Contact.prototype.setWebsite = function (website) {
                    this.website = website;
                };
                Contact.prototype.setObservations = function (observations) {
                    this.observations = observations;
                };
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=Contact.js.map