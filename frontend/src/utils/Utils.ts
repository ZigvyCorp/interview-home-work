export function generateRandomDate(): Date {
    const start = new Date(2023, 0, 1);
    const end = new Date(2024, 0, 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}