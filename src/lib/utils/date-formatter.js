export const formatDate = (date) => {
    const tzDate = new Date(date);
    const userTimezoneOffset = tzDate.getTimezoneOffset() * 60000;
    const newDate = new Date(tzDate.getTime() + userTimezoneOffset);
    return new Intl.DateTimeFormat('en-US').format(newDate);
};

export const formatDateTimeRange = (dateTime1, dateTime2) => {
    const tzDate1 = new Date(dateTime1);
    const tzDate2 = new Date(dateTime2);
    const userTimezoneOffset = tzDate1.getTimezoneOffset() * 60000;
    const newDate1 = new Date(tzDate1.getTime() + userTimezoneOffset);
    const newDate2 = new Date(tzDate2.getTime() + userTimezoneOffset);
    return newDate1.toLocaleTimeString('en-US', { timeStyle: 'short' }) + ' - ' + newDate2.toLocaleTimeString('en-US', { timeStyle: 'short' });
};