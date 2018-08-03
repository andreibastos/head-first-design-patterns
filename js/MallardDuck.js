"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quack_1 = require("./Quack");
const FlyWithWings_1 = require("./FlyWithWings");
const Duck_1 = require("./Duck");
class MallardDuck extends Duck_1.Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack_1.Quack();
        this.flyBehavior = new FlyWithWings_1.FlyWithWings();
    }
    display() {
        console.log("I'm a real mallard duck");
    }
}
exports.MallardDuck = MallardDuck;
//# sourceMappingURL=MallardDuck.js.map