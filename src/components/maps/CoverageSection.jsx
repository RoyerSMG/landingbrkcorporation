import { useState } from "react";

import CoverageMap from "./CoverageMap";
import LocationModal from "./LocationModal";

import { locations } from "../../data/locations";

export default function CoverageSection() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLocation = (location) => {
        setSelectedLocation(location);
        setIsModalOpen(true);
    };

    return (
        <>
            <CoverageMap
                locations={locations}
                onSelect={handleLocation}
            />
            <LocationModal
                location={selectedLocation}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}