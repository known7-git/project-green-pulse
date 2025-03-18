export const calculateCarbonFootprint = (data: any): number => {
    // Implement the logic to calculate carbon footprint based on the provided data
    let footprint = 0;
    // Example calculation logic
    if (data.transport) {
        footprint += data.transport * 0.5; // Example factor
    }
    if (data.energy) {
        footprint += data.energy * 0.3; // Example factor
    }
    return footprint;
};

export const formatFootprintData = (footprint: number): string => {
    // Format the carbon footprint data for display
    return `${footprint.toFixed(2)} kg CO2`;
};