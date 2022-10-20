export class Calculator {

    private logger: Logger | void

    constructor(logger?: Logger) {
        this.logger = logger;
    }

    /**
     * add two numbers, return result
     * 
     * @param n1 first number
     * @param n2 second number
     * @returns <number> result
     */
    public add(n1: number, n2: number): number {
        let result: number = n1 + n2
        this.print(result)
        return result
    }

    private print(data: string | number) {
        if (this.logger) {
            this.logger.log(data)
        }
    }

}

export interface Logger {
    log: (message?: string | number) => void
}