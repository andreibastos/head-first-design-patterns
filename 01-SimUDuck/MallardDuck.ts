import { Quack } from './Quack';
import { FlyWithWings } from './FlyWithWings';
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    display() {
        console.log("I'm a real mallard duck");
    }
}