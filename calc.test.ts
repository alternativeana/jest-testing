import { describe, expect, test } from '@jest/globals';
import { Calculator } from './calculator'

describe('calculator', () => {

    let calc = new Calculator();
    let calcWithLogger = new Calculator(console)

    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe('add', () => {

        const addition = jest.spyOn(calc, 'add');

        test('adds 1 + 2 to equal 3', () => {
            expect(calc.add(1, 2)).toBe(3);
            expect(addition).toBeCalledTimes(1)
        });
    })

    describe('print', () => {

        const log = jest.spyOn(console, 'log')

        test('prints result if logger exists', () => {
            calcWithLogger.add(1, 2)
            expect(log).toBeCalledTimes(1)
        })

        test('does not print result if no logger ', () => {
            calc.add(1, 2)
            expect(log).toBeCalledTimes(0)
        })

    })

});
