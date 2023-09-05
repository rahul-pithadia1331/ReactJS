import { useQuery } from '@tanstack/react-query';
import { IPosition } from './Interface';



const useCoordinates = () => {
    async function getPosition(): Promise<IPosition> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
    const { data } = useQuery<IPosition>(['geolocation'], getPosition);
    console.log(data)
    return data 
};

export default useCoordinates;
