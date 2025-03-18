import React, { useEffect, useState } from 'react';
import { fetchDoomsdayData } from '../services/api';

const Clock: React.FC = () => {
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [status, setStatus] = useState<string>('Loading...');

    useEffect(() => {
        const getDoomsdayData = async () => {
            try {
                const data = await fetchDoomsdayData();
                setTimeRemaining(data.timeRemaining);
                setStatus(data.status);
            } catch (error) {
                setStatus('Error fetching data');
            }
        };

        getDoomsdayData();
        const interval = setInterval(getDoomsdayData, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}m ${seconds}s`;
    };

    return (
        <div className="clock">
            <h1>Doomsday Clock</h1>
            <p>Status: {status}</p>
            <p>Time Remaining: {formatTime(timeRemaining)}</p>
        </div>
    );
};

export default Clock;