export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }
    get actualDate() {
        return new Date()..getTime;
    }
    get _futureDate() {
        return new Date(this.futureDate).getTime()
    }

}