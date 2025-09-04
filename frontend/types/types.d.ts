interface IPharmacy {
  pharmacyId: number;
  pharmacyName: string;
  isOpen: boolean;
  rating: number;
  tags: string[];
  phoneNumber: string;
  website: string;
  email: string;
  distance: number | string; // (you had string "1 km" in one place)
  location: google.maps.LatLngLiteral;
  address: string;
}
