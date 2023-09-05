export interface IPosition {
    coords: {
        latitude: number;
        longitude: number;
    };
}

export interface IOption {
    provider: string;
    httpAdapter: string; // Default
    apiKey: string; // for Mapquest, OpenCage, Google Premier
    formatter: string; // 'gpx', 'string', ...
}
