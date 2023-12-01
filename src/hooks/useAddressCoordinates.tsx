import { useEffect, useState } from "react";

export const useAddressCoordinates = (address: string) => {
  const [latitude, setLatitude] = useState<null | number>(null);
  const [longitude, setLongitude] = useState<null | number>(null);

  const getAddressCoordinates = async (address: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );

      const data = await response.json();
      if (data && data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        setLatitude(latitude);
        setLongitude(longitude);
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getAddressCoordinates(address);
  }, []);

  return {
    longitude,
    latitude,
  };
};
