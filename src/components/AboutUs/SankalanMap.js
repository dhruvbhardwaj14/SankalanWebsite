import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SankalanMap = () => {
  const locations = [
    { id: 1, name: "Delhi University", lat: 28.7041, lng: 77.1025 },
    { id: 2, name: "IIT Bombay", lat: 19.1334, lng: 72.9164 },
  ];

  return (
    <MapContainer center={[22.3511, 78.6677]} zoom={5} className="h-96 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SankalanMap;
