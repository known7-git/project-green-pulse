export const formatTimeRemaining = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
};

export const calculateDoomsdayDate = (currentDate: Date, timeRemaining: number): Date => {
    const doomsdayDate = new Date(currentDate);
    doomsdayDate.setSeconds(doomsdayDate.getSeconds() + timeRemaining);
    return doomsdayDate;
};