"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friend.prototype.print = function () {
        console.log('${this.name} | ${this.age} | ${this.email} |${this.bff}');
    };
    return Friend;
}());
var friends = [];
friends.push(new Friend("George", 238, "geo@washington.com", true));
friends.push(new Friend("Tom", 237, "tom@jefferson.com"));
friends.push(new Friend("Abe", 236, "abe@lincoln.com"));
friends.push(new Friend("Ronny", 104, "ronny@reagan.com"));
friends.push(new Friend("Billy", 83, "billy@clinton.com"));
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
