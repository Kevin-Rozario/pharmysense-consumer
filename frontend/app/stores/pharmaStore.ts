import { create } from "zustand";

interface IPharmaStore {
  selectedPharmacy: IPharmacy | null;
  radius: number;
  zoom: number;
  userLocation: google.maps.LatLngLiteral | null;
  activeFilter: string | null;

  // actions
  setSelectedPharmacy: (pharmacy: IPharmacy | null) => void;
  setRadius: (radius: number) => void;
  setZoom: (zoom: number) => void;
  setUserLocation: (loc: google.maps.LatLngLiteral) => void;
  setActiveFilter: (filter: string | null) => void;
}

export const usePharmaStore = create<IPharmaStore>()((set) => ({
  selectedPharmacy: null,
  radius: 500,
  zoom: 16,
  userLocation: null,
  activeFilter: null,

  setSelectedPharmacy: (pharmacy) => set({ selectedPharmacy: pharmacy }),
  setRadius: (radius) => set({ radius }),
  setZoom: (zoom) => set({ zoom }),
  setUserLocation: (loc) => set({ userLocation: loc }),
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}));
