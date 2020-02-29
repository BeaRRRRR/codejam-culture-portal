export default function getRandomNumber(max: number): number {
    const date: Date = new Date();
    const day = date.getDay();
    return Math.abs(day - max);
}
