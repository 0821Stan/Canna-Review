import MapView from "../components/MapView";
import DispensaryList from "../components/DispensaryList";

const seedDispensaries = [
  { id: 1, name: "Green Leaf", address: "123 Main St", lat: 13.6929, lng: -89.2182 },
  { id: 2, name: "Herbal Bliss", address: "456 Elm St", lat: 13.70, lng: -89.22 },
];

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dispensary Map</h1>
      <MapView dispensaries={seedDispensaries} />
      <DispensaryList dispensaries={seedDispensaries} />
    </div>
  );
}

export default Home;
