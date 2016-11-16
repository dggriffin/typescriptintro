"use strict";
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    Animal.prototype.dance = function () {
        console.log('Dance wid me fool!');
    };
    return Animal;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animal;
