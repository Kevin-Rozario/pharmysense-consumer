import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";

const CircleOverlay = ({
  center,
  radius,
}: {
  center: google.maps.LatLngLiteral;
  radius: number;
}) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const circle = new google.maps.Circle({
      map,
      center,
      radius,
      fillColor: "#4285F4",
      fillOpacity: 0.15,
      strokeColor: "#4285F4",
      strokeOpacity: 0.8,
      strokeWeight: 2,
    });

    return () => {
      circle.setMap(null);
    };
  }, [map, center, radius]);

  return null;
};

export default CircleOverlay;
