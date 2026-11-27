import type { ImageMetadata } from 'astro';
import type { ImageKey } from './facials';
import facialHands from '../assets/facial-hands.jpg';
import facialMask from '../assets/facial-mask.jpg';
import glassSkin from '../assets/glass-skin.jpg';
import mensFacial from '../assets/mens-facial.jpg';
import teenSkin from '../assets/teen-skin.jpg';
import stillLife from '../assets/still-life.jpg';
import facialSculpt from '../assets/facial-sculpt.jpg';
import studioCover from '../assets/studio-cover.jpg';

// Alt text is honest about which photos are reference shots and which come from the studio's booking gallery.
export const images: Record<ImageKey, { src: ImageMetadata; alt: string }> = {
  facialHands: {
    src: facialHands,
    alt: 'Hands gently cup a person’s jaw and cheeks, from the studio’s booking gallery.',
  },
  facialMask: {
    src: facialMask,
    alt: 'A person reclines with eyes closed while a mask is brushed onto the forehead. Reference photo, not the Fair Oaks studio.',
  },
  glassSkin: {
    src: glassSkin,
    alt: 'Close view of dewy skin, from the studio’s booking gallery for the Korean Glass Skin Facial.',
  },
  mensFacial: {
    src: mensFacial,
    alt: 'A man rests with his eyes closed during a facial, from the studio’s booking gallery.',
  },
  teenSkin: {
    src: teenSkin,
    alt: 'A smiling person with small dots of cream on the cheek, from the studio’s booking gallery.',
  },
  stillLife: {
    src: stillLife,
    alt: 'A rolled towel, a plain pump bottle, a lit candle and tulips on a white table. Reference photo, not the Fair Oaks studio.',
  },
  facialSculpt: {
    src: facialSculpt,
    alt: 'Hands rest along a person’s jaw during a face massage. Reference photo, not the Fair Oaks studio.',
  },
  studioCover: {
    src: studioCover,
    alt: 'The cover portrait from the Golden State Glam booking page: a woman with long blonde hair in a black blazer.',
  },
};
