interface IPharmacy {
  pharmacyId: number;
  pharmacyName: string;
  isOpen: boolean;
  rating: number;
  phoneNumber: string;
  location: google.maps.LatLngLiteral;
  address: string;
}
