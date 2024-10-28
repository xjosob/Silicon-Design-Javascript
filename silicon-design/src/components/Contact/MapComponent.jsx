// Component copied from ChatGPT
import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ThemeContext } from "../../contexts/ThemeContext";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const { theme } = useContext(ThemeContext);
  const defaultPosition = [37.72764010205873, -122.4105193681904];
  const locations = [
    { name: "430 B Road", position: [37.73018138790294, -122.4037805200484] },
    {
      name: "Cornerstone Academy",
      position: [37.72509881821451, -122.41725821633239],
    },
  ];

  const tileLayerUrl =
    theme === "dark-theme"
      ? "https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=LywqVa091pwiCgIlp0AD3Q8i7oxy7d21uNRSvxcdjQhLWsdpWUdCeCev9OrQq7sE"
      : "https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=LywqVa091pwiCgIlp0AD3Q8i7oxy7d21uNRSvxcdjQhLWsdpWUdCeCev9OrQq7sE";
  const tileLayerAttribution =
    theme === "dark-theme"
      ? '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      : '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  return (
    <MapContainer
      center={defaultPosition}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url={tileLayerUrl} attribution={tileLayerAttribution} />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={customIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
