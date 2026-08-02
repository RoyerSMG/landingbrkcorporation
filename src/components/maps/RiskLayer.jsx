import { GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";

export default function RiskLayer() {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch("../../../public/geojson/municipios.geojson")
            .then(response => response.json())
            .then(data => setGeoData(data));
    }, []);

    if (!geoData) return null;

    return (
        <GeoJSON
            data={geoData}
            style={{
                color: "#C8102E",
                weight: 2,
                fillColor: "#C8102E",
                fillOpacity: 0.35
            }}
        />
    );
}