import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RiskLayer from "./RiskLayer";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { locations } from "../../data/locations";

const blueIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const greyIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

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
                height: "550px",
                width: "100%",
                borderRadius: "15px",
                boxShadow: '0 15px 35px rgba(0,0,0,.25)'
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RiskLayer />
            
            {locations.map((location) => {
                // 2. Evaluamos el UID para asignar el icono azul a 'BRK' y gris a cualquier otro (como 'TVS')
                const currentIcon = location.uid === "BRK" ? blueIcon : greyIcon;

                return (
                    <Marker
                        key={location.id}
                        position={location.position}
                        icon={currentIcon} // 3. Pasamos el icono dinámico aquí
                        eventHandlers={{
                            click: () => onSelect(location),
                        }}
                    />
                );
            })}
        </MapContainer>
    );

}