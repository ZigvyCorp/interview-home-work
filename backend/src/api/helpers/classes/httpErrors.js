export default class HTTPError extends Error {
    constructor(status, data) {
        super();
        this.name = this.constructor.name;
        this.status = status;
        this.data = data;
    }
}