
import 'jest-enzyme';
import {
    timeInStringFormat,
    replaceColonWithEmptyString
} from './utils';

describe('Test timeInStringFormat function', () => {
    let date;
    let timeMeasurement;
    test('to test if function timeInStringFormat returns proper value for 9:00 time and timeMeasurement is hours', () => {
        date = new Date("Mon Dec 13 2021 09:00:00 GMT+0530 (India Standard Time)");
        timeMeasurement = 'hours';
        const result = timeInStringFormat(date, timeMeasurement);
        expect(result).toEqual('9');
    });
    test('to test if function timeInStringFormat returns proper value for 17:00 time timeMeasurement is hours', () => {
        date = new Date("Mon Dec 13 2021 17:00:00 GMT+0530 (India Standard Time)");
        timeMeasurement = 'hours';
        const result = timeInStringFormat(date, timeMeasurement);
        expect(result).toEqual('17');
    });
    test('to test if function timeInStringFormat returns proper value for 17:30 time and timeMeasurement is minutes', () => {
        date = new Date("Mon Dec 13 2021 12:30:00 GMT+0530 (India Standard Time)");
        timeMeasurement = 'minutes';
        const result = timeInStringFormat(date, timeMeasurement);
        expect(result).toEqual('30');
    });
    test('to test if function timeInStringFormat returns proper value for valid Date and timeMeasurement is minutes', () => {
        date = new Date("Mon Dec 13 2021 17:00:00 GMT+0530 (India Standard Time)");
        timeMeasurement = 'minutes';
        const result = timeInStringFormat(date, timeMeasurement);
        expect(result).toEqual('00');
    });
});

describe('Test replaceColonWithEmptyString function', () => {
    let str;
    test('to test if colon is removed from string for string with colon in it', () => {
        str = '09:00';
        const result = replaceColonWithEmptyString(str);
        expect(result).toEqual('0900');
    });
    test('to test if colon is removed from string', () => {
        str = '09-00';
        const result = replaceColonWithEmptyString(str);
        expect(result).toEqual('09-00');
    });
    
})