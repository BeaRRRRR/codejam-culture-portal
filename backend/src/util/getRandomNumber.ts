export default function getRandomNumber(max: number): number {
    const date: Date = new Date();
    const day = date.getDate();
    return Math.abs(day % max);
}
