export function DateFormatString(dateInput: Date) {
    const datePart = dateInput.toISOString().substring(0, 10);
    const dateNew = new Date(Date.UTC(parseInt(datePart[0], 10), parseInt(datePart[1], 10) - 1, parseInt(datePart[2], 10) ));
    return dateNew.getUTCDate() + '-' + dateNew.getUTCMonth() + '-' + dateNew.getUTCFullYear();
}