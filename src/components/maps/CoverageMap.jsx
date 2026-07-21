import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { locations } from "../../data/locations";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

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