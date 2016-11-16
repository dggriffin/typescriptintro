"use strict";
var snake_1 = require("./snake");
var horse_1 = require("./horse");
var sam = new snake_1.default("Sammy the Python");
var tom = new horse_1.default("Tommy the Palomino");
sam.move();
tom.move(34);
tom.gallop();
tom.gallop();
