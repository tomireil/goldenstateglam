import type { ImageMetadata } from 'astro';
import type { ImageKey } from './facials';
import facialHands from '../assets/facial-hands.jpg';
import facialMask from '../assets/facial-mask.jpg';
import glassSkin from '../assets/glass-skin.jpg';
import mensFacial from '../assets/mens-facial.jpg';
import stillLife from '../assets/still-life.jpg';
import facialSculpt from '../assets/facial-sculpt.jpg';
import facialMassage from '../assets/facial-massage.jpg';
import glowHands from '../assets/glow-hands.jpg';
import studioCover from '../assets/studio-cover.jpg';
import newClient from '../assets/gg-new-client.jpg';
import clearSkin from '../assets/gg-clear-skin.jpg';
import sculptDrain from '../assets/gg-sculpt-drain.jpg';
import backReset from '../assets/gg-back-reset.jpg';
import chemicalPeel from '../assets/gg-chemical-peel.jpg';
import italianPeel from '../assets/gg-italian-peel.jpg';
import exopeel from '../assets/gg-exopeel.jpg';
import exosome from '../assets/gg-exosome.jpg';
import microneedling from '../assets/gg-microneedling.jpg';
import package3 from '../assets/gg-package-3.jpg';
import package6 from '../assets/gg-package-6.jpg';

// Alt text is honest about which photos are reference shots and which come from the studio's booking menu.
//
// Files starting with "gg-" are the photos shown for that service on the GlossGenius booking menu.
// Three booking-menu photos were too small to use at full size (Lift & Firm, Lymphatic Drainage, Deep Relax),
// and the Signature Deep Cleanse photo there carries a stock-site watermark, so those four use other photos.
//
// Stock photo credits (Unsplash License, free for commercial use, no attribution required):
//   still-life.jpg      Mediamodifier   https://unsplash.com/photos/reed-diffuser-with-candles-and-towel-W7AyAs7azHc
//   facial-massage.jpg  Anna Keibalo    https://unsplash.com/s/photos/facial-massage (photo-1706795033728-9232ef548a16)
//   glow-hands.jpg      Dominique Rivas https://unsplash.com/s/photos/facial-massage (photo-1643684391140-c5056cfd3436)
const fromMenu = 'From the studio’s booking menu.';
const reference = 'Reference photo, not the Fair Oaks studio.';

export const images: Record<ImageKey, { src: ImageMetadata; alt: string }> = {
  facialHands: { src: facialHands, alt: `Hands gently cup a person’s jaw and cheeks during a facial. ${fromMenu}` },
  facialMask: {
    src: facialMask,
    alt: `A person reclines with eyes closed while a mask is brushed onto the forehead. ${reference}`,
  },
  glassSkin: { src: glassSkin, alt: `Close view of dewy, glowing skin along a cheek and jaw. ${fromMenu}` },
  mensFacial: { src: mensFacial, alt: `A bearded man rests with his eyes closed during a facial. ${fromMenu}` },
  stillLife: {
    src: stillLife,
    alt: `A rolled white towel, two lit candles and a reed diffuser on a pale surface. ${reference}`,
  },
  facialSculpt: { src: facialSculpt, alt: `Hands rest along a person’s jaw during a face massage. ${reference}` },
  facialMassage: {
    src: facialMassage,
    alt: `A person lies under a blanket with eyes closed while hands massage their temples. ${reference}`,
  },
  glowHands: {
    src: glowHands,
    alt: `Close view of dewy skin along a jaw and neck, with fingertips resting on the face. ${reference}`,
  },
  studioCover: {
    src: studioCover,
    alt: 'The cover portrait from the Golden State Glam booking page: a woman with long blonde hair in a black blazer.',
  },
  newClient: {
    src: newClient,
    alt: `A person lies back in a headband while hands rest lightly on their forehead and chin. ${fromMenu}`,
  },
  clearSkin: { src: clearSkin, alt: `A young person looks closely at breakouts on their cheek. ${fromMenu}` },
  sculptDrain: { src: sculptDrain, alt: `Close view of glowing skin along a jaw, neck and collarbone. ${fromMenu}` },
  backReset: { src: backReset, alt: `Hands smooth a treatment over a person’s back. ${fromMenu}` },
  chemicalPeel: { src: chemicalPeel, alt: `A peel is brushed onto a person’s cheek. ${fromMenu}` },
  italianPeel: {
    src: italianPeel,
    alt: `Gloved hands hold a person’s face during a peel treatment. ${fromMenu}`,
  },
  exopeel: { src: exopeel, alt: `Four small Exopeel vials in different colors. ${fromMenu}` },
  exosome: { src: exosome, alt: `A person touches their smooth, glowing cheek. ${fromMenu}` },
  microneedling: {
    src: microneedling,
    alt: `A microneedling pen is held against a person’s cheek. ${fromMenu}`,
  },
  package3: { src: package3, alt: `A person rests with a cream mask over their face. ${fromMenu}` },
  package6: { src: package6, alt: `Gloved hands apply a mask to a person wrapped in a towel. ${fromMenu}` },
};
