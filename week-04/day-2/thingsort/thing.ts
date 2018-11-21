import { Comparable } from "./thingsort";

class Thing implements Comparable {
    private _name: string;
    private _completed = false;

    constructor(name: string) {
        this._name = name;
    }

    public complete() {
        this._completed = true;
    }

    get name() {
        return this._name;
    }
    get completed() {
        return this._completed;
    }
    compareTo(other: Thing): number {
        if (this.completed === other.completed) {
            return 0;
        } else if (this.completed > other.completed) {
            return -1;
        } else {
            return 1;
        }
    }
}
export { Thing };
