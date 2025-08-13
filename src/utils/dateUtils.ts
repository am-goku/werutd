// Function to format a Date object to "yyyy-MM-dd"
export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// Function to get last Sunday and coming Saturday based on the rules
export function getWeekRangeFromToday(): { dateFrom: string; dateTo: string } {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday

    let fromDate: Date;
    let toDate: Date;

    if (dayOfWeek === 0) {
        // Today is Sunday
        fromDate = new Date(today);
        toDate = new Date(today);
        toDate.setDate(today.getDate() + 6);
    } else if (dayOfWeek === 6) {
        // Today is Saturday
        fromDate = new Date(today);
        toDate = new Date(today);
        toDate.setDate(today.getDate() + 7);
    } else {
        // Any other day
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - dayOfWeek);
        toDate = new Date(fromDate);
        toDate.setDate(fromDate.getDate() + 6);
    }

    return {
        dateFrom: formatDate(fromDate),
        dateTo: formatDate(toDate)
    };
}