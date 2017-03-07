export function DateFormatString(dateInput: Date) {
    return dateInput.toISOString().substring(0, 10);
    //const dateNew = new Date(Date.UTC(parseInt(datePart[0], 10), parseInt(datePart[1], 10) - 1, parseInt(datePart[2], 10) ));
    //return dateNew.getUTCFullYear() + '-' + PadDateFormat(dateNew.getUTCMonth()) + '-' + PadDateFormat(dateNew.getUTCDate());
}

function PadDateFormat(value: number) {
    return (value >= 10 ? value.toString() : '0' + value.toString());
}