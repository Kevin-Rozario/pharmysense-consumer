import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";

const CircleOverlay = ({
  center,
  radius,
}: {
  center: google.maps.LatLngLiteral;
  radius: number;
}) => {
  const map = useMap();
  const circleRef = useRef<google.maps.Circle | null>(null);

  useEffect(() => {
    if (!map) return;

    // Create circle only once
    if (!circleRef.current) {
      circleRef.current = new google.maps.Circle({
        map,
        center,
        radius,
        fillColor: "#22c55e", // Tailwind green-500
        fillOpacity: 0.12,
        strokeColor: "#16a34a", // Tailwind green-600
        strokeOpacity: 0.9,
        strokeWeight: 2,
      });
    }

    // Update circle properties
    circleRef.current.setCenter(center);
    circleRef.current.setRadius(radius);

    return () => {
      if (circleRef.current) {
        circleRef.current.setMap(null);
        circleRef.current = null;
      }
    };
  }, [map, center, radius]);

  return null;
};

export default CircleOverlay;
