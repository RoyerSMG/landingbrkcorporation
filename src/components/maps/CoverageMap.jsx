import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { locations } from "../../data/locations";

export default function CoverageMap({
    locations,
    onSelect
}) {

    return (

        <MapContainer
            center={[4.5709, -74.2973]}
            zoom={6}
            style={{
                height: "500px",
                width: "100%",
                borderRadius: "15px",
                boxShadow: '0 15px 35px rgba(0,0,0,.25)'
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.map(location => (
                    <Marker
                        key={location.id}
                        position={location.position}
                        eventHandlers={{
                            click: () => onSelect(location)
                        }}
                    />
                ))
            }
        </MapContainer>
    );

}