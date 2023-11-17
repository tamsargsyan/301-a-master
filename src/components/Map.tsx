import { GoogleMap } from "@react-google-maps/api";

interface MapProps {
  isLoaded: any;
}

const Map: React.FC<MapProps> = ({ isLoaded }) => {
  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 40.188515,
    lng: 44.512403,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
