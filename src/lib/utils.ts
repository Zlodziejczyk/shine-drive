import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = 'https://wa.me/31631793774?text=Hallo!%20Ik%20heb%20interesse%20in%20jullie%20diensten.';
export const WHATSAPP_NUMBER = '06-317-93774';
export const INSTAGRAM_URL = 'https://instagram.com/shine_drive_studio/';
export const ADDRESS = 'Industrieweg 6E, Zoetermeer';
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.5!2d4.47!3d52.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzM2LjAiTiA0wrAyOCcxMi4wIkU!5e0!3m2!1snl!2snl!4v1';
