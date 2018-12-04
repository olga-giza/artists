import { getDate, getDayOfWeek } from './date';

describe('date', () => {
    describe('getDate', () => {
        it('formats valid date string', () => {
            expect(getDate('2018-12-31T19:00:31')).toBe('Dec 31st, 2018');
        });

        it('detects invalid date string', () => {
            jest.spyOn(console, 'warn').mockImplementationOnce(jest.fn());

            expect(getDate('invalid')).toBe('Invalid date');
        });
    });

    describe('getDate', () => {
        it('formats valid date string', () => {
            expect(getDayOfWeek("Mon, 31 Dec 2018 18:00:31 GMT")).toBe('Mon, 6 PM');
        });

        it('detects invalid date string', () => {
            jest.spyOn(console, 'warn').mockImplementationOnce(jest.fn());

            expect(getDayOfWeek('invalid')).toBe('Invalid date');
        });
    });
});