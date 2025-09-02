export function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371e3; // Radius of the earth in meters
  const phi1 = (lat1 * Math.PI) / 180; // Convert latitude to radians
  const phi2 = (lat2 * Math.PI) / 180;
  const dPhi = (lat2 - lat1) * (Math.PI / 180);
  const dLambda = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dPhi / 2) * Math.sin(dPhi / 2) +
    Math.cos(phi1) *
      Math.cos(phi2) *
      Math.sin(dLambda / 2) *
      Math.sin(dLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
