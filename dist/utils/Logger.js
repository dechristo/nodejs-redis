"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static info(msg) {
        console.info(this.createOutput(msg, "Info"));
    }
    static error(msg, err) {
        console.error(this.createOutput(msg, "ERROR"), err);
    }
    static createOutput(msg, type) {
        return `[${(new Date()).toLocaleString()}]: ${type} --> ${msg} `;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map