
class Pubsub {
    constructor() {
        this.pond = [];
    }
    add(event) {
        let bool = this.pond.some(item => {
            return item === event;
        });
        !bool && this.pond.push(event);
    }
    remove(event) {
        this.pond.filter(item => item !== event);
    }
}