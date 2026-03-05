import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_BASE = 'https://wa.me/31631793774';
export const WHATSAPP_URL = 'https://wa.me/31631793774?text=Hallo!%20Ik%20heb%20interesse%20in%20jullie%20diensten.';
export const WHATSAPP_NUMBER = '06-317-93774';
export const INSTAGRAM_URL = 'https://instagram.com/shine_drive_studio/';
export const ADDRESS = 'Industrieweg 6E, Zoetermeer';
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.2!2d4.5069211!3d52.0482245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cecee9c12487%3A0x8d3037719600177!2sIndustrieweg%206%2C%202712%20LB%20Zoetermeer!5e0!3m2!1snl!2snl!4v1';

/** Build a WhatsApp URL with a translated pre-filled message */
export function getWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
