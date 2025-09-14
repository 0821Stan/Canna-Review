import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ dispensaries }) {
  return (
    <MapContainer
      center={[13.6929, -89.2182]} // San Salvador as default
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dispensaries.map((d) => (
        <Marker key={d.id} position={[d.lat, d.lng]}>
          <Popup>
            <strong>{d.name}</strong>
            <br />
            {d.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
