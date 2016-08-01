System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, name, lastname, username, password, email, event_time) {
                    this.name = name;
                    this.lastname = lastname;
                    this.username = username;
                    this.password = password;
                    this.email = email;
                    this.event_time = event_time;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.js.map