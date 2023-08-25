import { useState } from 'react';

const useCounter = () => {
    const [number, setNumber] = useState(0);

    const decNumber: number | any = () => {
        if (number === 0) return 0;
        if (number > 0) {
            setNumber(Number(number) - 1);
            return number;
        }
    };

    const incNumber: number | any = () => {
        setNumber(Number(number) + 1);
    };

    return { decNumber, number, incNumber};
};

export default useCounter;
