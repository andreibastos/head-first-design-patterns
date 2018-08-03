import { QuackBehavior } from './QuackBehavior';
import { FlyBehavior } from './FlyBehavior';
export abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;
    abstract display();
    performFly() {
        this.flyBehavior.fly();
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    swim() {
        console.log("All ducks float, even decoys!");
    }
}