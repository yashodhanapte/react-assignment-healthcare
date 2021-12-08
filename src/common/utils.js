/**
 * timeInStringFormat function
 * Description: This function returns the hours / minutes in string format
 * if the timeMeasurement is minutes and date.getMinutes() value is 30, it will return stringified date.getMinutes() value;
 * if the timeMeasurement is minutes and date.getMinutes() value is 0, it will return a stringified double zero '00';
 * if the timeMeasurement is hours, it will return stringified date.getHours() value;
 * @param {*} date - Date object
 * @param {*} timeMeasurement - can be 'hours' or 'minutes'
 * @returns stringified value of hours / minutes from date
 */
export const timeInStringFormat = (date, timeMeasurement = 'hours') => {
    if (timeMeasurement === 'hours') {
        return date.getHours().toString();
    } else if (timeMeasurement === 'minutes') {
        if (date.getMinutes() === 0) {
            return '00';
        }
        return date.getMinutes().toString();
    }
    return null;
}

/**
 * replaceColonWithEmptyString function
 * Description: This function checks if string has a ':' in it and replaces it with an empty string
 * @param {*} str - string to be checked
 * @returns new string by removing all occurences of ':'
 */
export const replaceColonWithEmptyString = (str) => {
    return str.includes(':') ? str.replace(':', '') : str;
}