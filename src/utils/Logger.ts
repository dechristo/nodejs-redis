export class Logger {
    public static info(msg: string) {
        console.info(this.createOutput(msg, "Info"));
    }

    public static error(msg: string, err: object) {
        console.error(this.createOutput(msg, "ERROR"), err);
    }

    private static createOutput(msg: string, type: string): string {
        return `[${(new Date()).toLocaleString()}]: ${type} --> ${msg} `;
    }
}
