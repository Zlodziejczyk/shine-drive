export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Pakketten', href: '/pakketten' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
];
