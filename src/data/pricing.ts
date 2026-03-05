export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  title: string;
  price: string;
  isPopular: boolean;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
}

export interface MechanicalService {
  name: string;
  price: string;
}

export const detailingPackages: PricingPackage[] = [
  {
    id: 'basis',
    title: 'Basis Reiniging',
    price: '€99,-',
    isPopular: false,
    features: [
      { text: 'Handwas exterieur (carrosserie + velgen)', included: true },
      { text: 'Stofzuigen interieur', included: true },
      { text: 'Ramen binnen en buiten', included: true },
      { text: 'Dashboard en panelen reinigen', included: true },
      { text: 'Bandenglans', included: true },
    ],
    ctaText: 'Boek dit pakket →',
    ctaLink: 'https://wa.me/31631793774?text=Hallo!%20Ik%20wil%20graag%20het%20Basis%20Reiniging%20pakket%20boeken.',
  },
  {
    id: 'premium',
    title: 'Premium Reiniging',
    price: '€149,-',
    isPopular: true,
    features: [
      { text: 'Alles uit Basis Reiniging', included: true },
      { text: 'Dieptereiniging stoelen (stof of leer)', included: true },
      { text: 'Kunststof behandeling + bescherming', included: true },
      { text: 'Geurverfijning interieur', included: true },
      { text: 'Wasbehandeling exterieur', included: true },
    ],
    ctaText: 'Boek dit pakket →',
    ctaLink: 'https://wa.me/31631793774?text=Hallo!%20Ik%20wil%20graag%20het%20Premium%20Reiniging%20pakket%20boeken.',
  },
  {
    id: 'exclusive',
    title: 'Exclusive Deep Clean',
    price: '€199,-',
    isPopular: false,
    features: [
      { text: 'Alles uit Premium Reiniging', included: true },
      { text: 'Hemelbekleding reiniging', included: true },
      { text: 'Motorruimte reiniging', included: true },
      { text: 'Lakcorrectie + kleibehandeling', included: true },
      { text: 'Keramische bescherming (basis)', included: true },
    ],
    ctaText: 'Boek dit pakket →',
    ctaLink: 'https://wa.me/31631793774?text=Hallo!%20Ik%20wil%20graag%20het%20Exclusive%20Deep%20Clean%20pakket%20boeken.',
  },
];

export const wrappingPackages: PricingPackage[] = [
  {
    id: 'gedeeltelijk',
    title: 'Gedeeltelijke Wrap',
    price: 'Vanaf €500,-',
    isPopular: false,
    features: [
      { text: 'Spiegelkappen, dak of motorkap', included: true },
      { text: 'Hoogwaardige vinyl folie', included: true },
      { text: 'Professionele montage', included: true },
      { text: 'Inclusief voorbereiding en reiniging', included: true },
    ],
    ctaText: 'Vraag offerte aan →',
    ctaLink: 'https://wa.me/31631793774?text=Hallo!%20Ik%20wil%20graag%20een%20offerte%20voor%20een%20gedeeltelijke%20wrap.',
  },
  {
    id: 'volledig',
    title: 'Volledige Wrap',
    price: 'Vanaf €2.000,-',
    isPopular: true,
    features: [
      { text: 'Volledige kleurverandering', included: true },
      { text: 'Premium merk folies (3M / Avery)', included: true },
      { text: 'Naadloze afwerking', included: true },
      { text: '3+ jaar garantie op folie', included: true },
      { text: 'Ontwerp consultatie', included: true },
    ],
    ctaText: 'Vraag offerte aan →',
    ctaLink: 'https://wa.me/31631793774?text=Hallo!%20Ik%20wil%20graag%20een%20offerte%20voor%20een%20volledige%20wrap.',
  },
  {
    id: 'premium-ppf',
    title: 'Premium Wrap + PPF',
    price: 'Vanaf €3.500,-',
    isPopular: false,
    features: [
      { text: 'Alles uit Volledige Wrap', included: true },
      { text: 'PPF beschermingsfolie op kwetsbare delen', included: true },
      { text: 'Hoogglans of satin finish naar keuze', included: true },
      { text: '5+ jaar garantie', included: true },
      { text: 'Persoonlijk ontwerp + kleuradvies', included: true },
    ],
    ctaText: 'Vraag offerte aan →',
    ctaLink: 'https://wa.me/31631793774?text=Hallo!%20Ik%20wil%20graag%20een%20offerte%20voor%20Premium%20Wrap%20%2B%20PPF.',
  },
];

export const mechanicalServices: MechanicalService[] = [
  { name: 'Olie verversen', price: 'vanaf €59,-' },
  { name: 'Remblokken vervangen', price: 'vanaf €89,-' },
  { name: 'APK-voorbereiding + check', price: 'vanaf €39,-' },
  { name: 'Bandenwissel (4x)', price: 'vanaf €49,-' },
  { name: 'Diagnose & foutcodes uitlezen', price: 'vanaf €39,-' },
  { name: 'Distributieriem', price: 'vanaf €349,-' },
];
