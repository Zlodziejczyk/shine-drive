/**
 * Pexels Video Data — fetched via Pexels API
 * Photographer: Pavel Danilyuk (https://www.pexels.com/@pavel-danilyuk)
 * License: Free to use (Pexels license) — attribution appreciated
 *
 * To refresh: run `bash fetch_pexels.sh` from the project root
 * and update the URLs below with new data.
 */

export interface PexelsVideo {
  id: number;
  /** Descriptive label for the video (Dutch) */
  title: string;
  /** Service category for filtering */
  category: 'detailing' | 'wrapping' | 'exterieur' | 'interieur' | 'resultaat';
  /** Pexels page URL (for attribution) */
  pexelsUrl: string;
  /** Cover/thumbnail image */
  poster: string;
  /** 720p HD video URL — best balance between quality & bandwidth */
  videoHd: string;
  /** Duration in seconds */
  duration: number;
}

export const pexelsVideos: PexelsVideo[] = [
  // ─── Interieur ──────────────────────────────────────
  {
    id: 6158070,
    title: 'Interieur reiniging met borstel & product',
    category: 'interieur',
    pexelsUrl: 'https://www.pexels.com/video/person-cleaning-the-car-interior-with-a-brush-and-a-cleaning-product-6158070/',
    poster: 'https://images.pexels.com/videos/6158070/auto-brush-car-car-care-6158070.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6158070/6158070-hd_1280_720_30fps.mp4',
    duration: 17,
  },
  {
    id: 6158064,
    title: 'Interieur afwerking — handmatig poetsen',
    category: 'interieur',
    pexelsUrl: 'https://www.pexels.com/video/man-wiping-car-interiors-6158064/',
    poster: 'https://images.pexels.com/videos/6158064/auto-brush-car-car-care-6158064.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6158064/6158064-hd_1280_720_30fps.mp4',
    duration: 19,
  },
  {
    id: 6158119,
    title: 'Dashboard stofzuigen — dieptereiniging',
    category: 'interieur',
    pexelsUrl: 'https://www.pexels.com/video/cleaning-the-dashboard-using-a-vacuum-6158119/',
    poster: 'https://images.pexels.com/videos/6158119/auto-brush-car-car-care-6158119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6158119/6158119-hd_1280_720_30fps.mp4',
    duration: 11,
  },

  // ─── Detailing / Polijsten ──────────────────────────
  {
    id: 6159207,
    title: 'Polijsten — zwarte lak tot spiegelglans',
    category: 'detailing',
    pexelsUrl: 'https://www.pexels.com/video/polishing-a-black-car-6159207/',
    poster: 'https://images.pexels.com/videos/6159207/auto-brush-car-car-care-6159207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6159207/6159207-hd_1280_720_30fps.mp4',
    duration: 10,
  },
  {
    id: 6157968,
    title: 'Machinaal polijsten — buffer & pad',
    category: 'detailing',
    pexelsUrl: 'https://www.pexels.com/video/man-buffing-a-car-6157968/',
    poster: 'https://images.pexels.com/videos/6157968/auto-brush-car-car-care-6157968.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6157968/6157968-hd_1280_720_30fps.mp4',
    duration: 16,
  },

  // ─── Wrapping / Tape ────────────────────────────────
  {
    id: 6157983,
    title: 'Tape aanbrengen — wrapping voorbereiding',
    category: 'wrapping',
    pexelsUrl: 'https://www.pexels.com/video/man-putting-tape-on-the-side-of-a-car-6157983/',
    poster: 'https://images.pexels.com/videos/6157983/pexels-photo-6157983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6157983/6157983-hd_1280_720_30fps.mp4',
    duration: 11,
  },

  // ─── Exterieur close-ups ────────────────────────────
  {
    id: 6157787,
    title: 'Close-up — lak reflectie detail',
    category: 'exterieur',
    pexelsUrl: 'https://www.pexels.com/video/close-up-video-of-a-car-6157787/',
    poster: 'https://images.pexels.com/videos/6157787/pexels-photo-6157787.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6157787/6157787-hd_1280_720_30fps.mp4',
    duration: 8,
  },
  {
    id: 6157786,
    title: 'Close-up — exterieur verfomlijning',
    category: 'exterieur',
    pexelsUrl: 'https://www.pexels.com/video/close-up-video-of-a-car-6157786/',
    poster: 'https://images.pexels.com/videos/6157786/pexels-photo-6157786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6157786/6157786-hd_1280_720_30fps.mp4',
    duration: 14,
  },
  {
    id: 6157781,
    title: 'Lak close-up — diepglans resultaat',
    category: 'exterieur',
    pexelsUrl: 'https://www.pexels.com/video/video-of-a-car-shining-paint-6157781/',
    poster: 'https://images.pexels.com/videos/6157781/pexels-photo-6157781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6157781/6157781-hd_1280_720_30fps.mp4',
    duration: 21,
  },

  // ─── Resultaat / Showroom ───────────────────────────
  {
    id: 6159201,
    title: 'Resultaat — glanzende zwarte lak',
    category: 'resultaat',
    pexelsUrl: 'https://www.pexels.com/video/shining-black-car-6159201/',
    poster: 'https://images.pexels.com/videos/6159201/auto-brush-car-car-care-6159201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6159201/6159201-hd_1280_720_30fps.mp4',
    duration: 7,
  },
  {
    id: 6159204,
    title: 'Resultaat — schone auto klaar voor aflevering',
    category: 'resultaat',
    pexelsUrl: 'https://www.pexels.com/video/shiny-black-car-6159204/',
    poster: 'https://images.pexels.com/videos/6159204/auto-brush-car-car-care-6159204.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6159204/6159204-hd_1280_720_30fps.mp4',
    duration: 6,
  },
  {
    id: 6159374,
    title: 'Resultaat — diepe reflectie op lak',
    category: 'resultaat',
    pexelsUrl: 'https://www.pexels.com/video/shiny-black-car-6159374/',
    poster: 'https://images.pexels.com/videos/6159374/pexels-photo-6159374.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6159374/6159374-hd_1280_720_30fps.mp4',
    duration: 10,
  },
  {
    id: 6161372,
    title: 'Resultaat — perfecte afwerking',
    category: 'resultaat',
    pexelsUrl: 'https://www.pexels.com/video/shiny-black-car-6161372/',
    poster: 'https://images.pexels.com/videos/6161372/pexels-photo-6161372.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6161372/6161372-hd_1280_720_30fps.mp4',
    duration: 11,
  },
  {
    id: 6159208,
    title: 'Resultaat — showroom-klare auto',
    category: 'resultaat',
    pexelsUrl: 'https://www.pexels.com/video/shiny-black-car-6159208/',
    poster: 'https://images.pexels.com/videos/6159208/auto-brush-car-car-care-6159208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    videoHd: 'https://videos.pexels.com/video-files/6159208/6159208-hd_1280_720_30fps.mp4',
    duration: 10,
  },
];

export const videoCategories = [
  { key: 'all', label: 'Alles' },
  { key: 'interieur', label: 'Interieur' },
  { key: 'detailing', label: 'Detailing' },
  { key: 'exterieur', label: 'Exterieur' },
  { key: 'wrapping', label: 'Wrapping' },
  { key: 'resultaat', label: 'Resultaat' },
] as const;

/** Best video to use as hero background (long, cinematic) */
export const heroVideo = pexelsVideos.find((v) => v.id === 6157781)!;

/** Showreel video — dramatic polishing footage for ambient background sections */
export const showreelVideo = pexelsVideos.find((v) => v.id === 6157968)!;
