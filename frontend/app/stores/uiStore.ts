import { create } from "zustand"

interface UIState {
  isMobileMenuOpen: boolean
  isScrolled: boolean
  setMobileMenuOpen: (open: boolean) => void
  setScrolled: (scrolled: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isScrolled: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setScrolled: (scrolled) => set({ isScrolled: scrolled }),
}))
