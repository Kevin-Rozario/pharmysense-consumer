export function generateCircle(
  center: { lat: number; lng: number },
  radius: number,
  points = 64
) {
  const coords = [];
  const earthRadius = 6371e3; // meters

  for (let i = 0; i < points; i++) {
    const angle = (i / points) * 2 * Math.PI;
    const dx = (radius / earthRadius) * (180 / Math.PI) * Math.cos(angle);
    const dy =
      ((radius / earthRadius) * (180 / Math.PI) * Math.sin(angle)) /
      Math.cos((center.lat * Math.PI) / 180);

    coords.push({ lat: center.lat + dy, lng: center.lng + dx });
  }
  return coords;
}
