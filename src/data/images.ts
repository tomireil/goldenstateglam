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
import firstVisit from '../assets/first-visit.jpg';
import deepCleanseFoam from '../assets/deep-cleanse-foam.jpg';
import guaSha from '../assets/gua-sha.jpg';
import backTreatment from '../assets/back-treatment.jpg';
import peelBrush from '../assets/peel-brush.jpg';
import goldMask from '../assets/gold-mask.jpg';
import serumBottle from '../assets/serum-bottle.jpg';
import serumDropper from '../assets/serum-dropper.jpg';
import microneedling from '../assets/microneedling.jpg';
import maskApply from '../assets/mask-apply.jpg';
import rolledTowels from '../assets/rolled-towels.jpg';
import heroFacialMask from '../assets/hero-facial-mask.jpg';

// Every photo here except studio-cover.jpg is a stock photo, and the alt text says so.
// Swap in real photos of the studio and of Veronika at work when they exist: replace the file, then fix the alt text.
//
// Credits (Unsplash License, free for commercial use, no attribution required):
//   still-life.jpg        Mediamodifier     https://unsplash.com/photos/reed-diffuser-with-candles-and-towel-W7AyAs7azHc
//   facial-massage.jpg    Anna Keibalo      photo-1706795033728-9232ef548a16
//   glow-hands.jpg        Dominique Rivas   photo-1643684391140-c5056cfd3436
//   first-visit.jpg       kimia kazemi      https://unsplash.com/photos/a-woman-getting-a-facial-mask-on-her-face-u93nTfWqR9w
//   deep-cleanse-foam.jpg kimia kazemi      https://unsplash.com/photos/womans-face-with-cleansing-foam-during-facial-treatment-J6Hg_YH2tFk
//   peel-brush.jpg        kimia kazemi      https://unsplash.com/photos/facial-treatment-with-brush-applying-white-cream-to-face-Xxs9WvkUPLo
//   gold-mask.jpg         kimia kazemi      https://unsplash.com/photos/beautician-applying-facial-mask-to-womans-face-2OVrIfOXDDY
//   mask-apply.jpg        kimia kazemi      https://unsplash.com/photos/a-person-receiving-a-facial-treatment-RbIcMsh0NSk
//   mens-facial.jpg       Emiliano Vittoriosi https://unsplash.com/photos/sleeping-man-while-having-massage-qTu9DppC3mM
//   glass-skin.jpg        Fleur Kaan        https://unsplash.com/photos/woman-in-white-tank-top-w4Dj3MshHQ0
//   facial-hands.jpg      Angélica Echeverry https://unsplash.com/photos/person-with-gold-ring-on-neck-5KY5LP_zc44
//   gua-sha.jpg           Cherrydeck        https://unsplash.com/photos/a-woman-holding-a-green-object-in-her-hand-4p77t8fzGFo
//   back-treatment.jpg    Jakub Klucký      https://unsplash.com/photos/massage-therapist-giving-a-back-massage-7yeqemd-p90
//   serum-bottle.jpg      Avtar Singh       https://unsplash.com/photos/amber-glass-dropper-bottle-with-blank-label-on-concrete-block-MkuwnDkT1s0
//   serum-dropper.jpg     Mathilde Langevin https://unsplash.com/photos/person-holding-black-glass-bottle-FDRaYqiTY1k
//   microneedling.jpg     Patient Perfect   https://unsplash.com/photos/woman-receiving-microneedling-facial-treatment-2LxO1Wef8wQ
//                         (glove colour toned down from bright pink to match the site)
//   hero-facial-mask.jpg  Ivan S (Pexels License, free for commercial use)  https://www.pexels.com/photo/a-person-applying-facial-mask-on-woman-s-face-5659018/
//   rolled-towels.jpg     iridial           https://unsplash.com/photos/stack-of-white-rolled-towels-0Qv4fUvlSrI
const reference = 'Reference photo, not the Fair Oaks studio.';

// quality is optional. Set it on a photo with a lot of fine detail to keep its file size down.
export const images: Record<ImageKey, { src: ImageMetadata; alt: string; quality?: number }> = {
  facialHands: {
    src: facialHands,
    alt: `Fingertips rest along a person’s jaw, with glowing skin on the neck and collarbone. ${reference}`,
  },
  facialMask: {
    src: facialMask,
    alt: `A person reclines with eyes closed while a mask is brushed onto the forehead. ${reference}`,
  },
  glassSkin: {
    src: glassSkin,
    alt: `A woman with dewy, glowing skin stands in soft sunlight with her eyes closed. ${reference}`,
  },
  mensFacial: {
    src: mensFacial,
    // A beard is fine detail, which makes this the heaviest photo on the site. 70 looks the same and is about 40% smaller.
    quality: 70,
    alt: `A bearded man lies back with his eyes closed while hands massage his forehead. ${reference}`,
  },
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
    src: firstVisit,
    alt: `An esthetician cups a client’s face in both hands during a facial. ${reference}`,
  },
  clearSkin: {
    src: deepCleanseFoam,
    alt: `Side view of a person’s face covered in cleansing foam during a facial. ${reference}`,
  },
  sculptDrain: {
    src: guaSha,
    alt: `A woman with her eyes closed holds a gua sha stone to her cheekbone. ${reference}`,
  },
  backReset: { src: backTreatment, alt: `Two hands press into a person’s upper back in warm light. ${reference}` },
  chemicalPeel: {
    src: peelBrush,
    alt: `A soft brush spreads a treatment across a person’s cheek. ${reference}`,
  },
  italianPeel: {
    src: goldMask,
    alt: `A golden treatment is smoothed along a person’s jaw and chin from a small bowl. ${reference}`,
  },
  exopeel: {
    src: serumBottle,
    alt: `An amber glass dropper bottle with a blank label on a pale stone block. ${reference}`,
  },
  exosome: {
    src: serumDropper,
    alt: `A hand lifts a dropper of serum from a small dark glass bottle. ${reference}`,
  },
  microneedling: {
    src: microneedling,
    alt: `A microneedling pen is held against a person’s cheek by gloved hands. ${reference}`,
  },
  package3: {
    src: maskApply,
    alt: `Gloved hands smooth a cream mask over a person’s chin and jaw. ${reference}`,
  },
  package6: { src: rolledTowels, alt: `A stack of rolled white towels on a wooden surface. ${reference}` },
  hero: {
    src: heroFacialMask,
    alt: `An esthetician brushes a white mask onto a relaxed client’s face in a bright treatment room. ${reference}`,
  },
};
