import { MallardDuck } from './MallardDuck';
import { Duck } from "./Duck";

class MiniDuckSimulator {
    static main() {
        const mallard: Duck = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();
    }
}

MiniDuckSimulator.main();