// "Which facial for my skin concern": one entry per concern, each pointing at services on the menu.
// The wording comes from each service's own "Best for" line and description in facials.ts.
// Prices and lengths are read from facials.ts on the page, so they can't drift from the menu.
// The two microneedling services are left out on purpose.

export interface Concern {
  id: string;
  /** The concern in the visitor's words. */
  title: string;
  /** One or two plain sentences. */
  text: string;
  /** Service slugs, best match first. */
  services: string[];
}

export const concerns: Concern[] = [
  {
    id: 'clogged-pores',
    title: 'Clogged pores and blackheads',
    text: 'The Signature Deep Cleanse is my most thorough clean. Exfoliation loosens what’s sitting in your pores, extractions clear it out, and a mask calms everything down. Hydrodermabrasion is part of every visit.',
    services: ['signature-deep-cleanse'],
  },
  {
    id: 'breakouts',
    title: 'Breakouts and congested skin',
    text: 'The Clear Skin Facial is built for skin that breaks out. It’s gentler than the deep cleanse and works best as a series.',
    services: ['clear-skin-facial'],
  },
  {
    id: 'back-breakouts',
    title: 'Breakouts on your back',
    text: 'The Back Reset is a back facial: deep cleansing, extractions and a purifying mask for a spot that’s hard to reach yourself.',
    services: ['back-reset'],
  },
  {
    id: 'dull-dry',
    title: 'Dull, dry or dehydrated skin',
    text: 'The Korean Glass Skin Facial layers hydrating serums for smooth, dewy skin. For dry or mature skin that needs moisture put back, look at Facial Sculpting Therapy.',
    services: ['korean-glass-skin', 'facial-sculpting-therapy'],
  },
  {
    id: 'fine-lines',
    title: 'Fine lines and skin that’s lost some bounce',
    text: 'The Lift & Firm Facial pairs peptides and a firming mask with sculpting massage and LED light. No needles, no downtime.',
    services: ['lift-firm-facial'],
  },
  {
    id: 'puffiness',
    title: 'A puffy face or facial tension',
    text: 'Two massage-led options. The Lymphatic Drainage Facial Massage is hands only. The Sculpt & Drain Facial adds gua sha tools and shoulder massage.',
    services: ['lymphatic-drainage-facial-massage', 'sculpt-drain-facial'],
  },
  {
    id: 'razor-irritation',
    title: 'Razor irritation and men’s skin',
    text: 'The Men’s Deep Clean Facial clears clogged pores and gives extra care to the beard and shaving areas. It’s an easy first facial.',
    services: ['mens-deep-clean'],
  },
  {
    id: 'uneven-tone',
    title: 'Uneven tone, dullness or marks left by breakouts',
    text: 'A Chemical Peel lifts away dull surface skin. New to peels? Start there. For stubborn dark spots or texture, the Advanced Italian Skin Renewal and Exopeel go further.',
    services: ['chemical-peel', 'advanced-italian-skin-renewal', 'exopeel-premium-skin-renewal'],
  },
  {
    id: 'stress',
    title: 'Stress, and trouble switching off',
    text: 'The Deep Relax & Sleep Ritual is a relaxation facial with face, scalp, neck and shoulder massage and a guided sleep meditation.',
    services: ['deep-relax-sleep-ritual'],
  },
  {
    id: 'not-sure',
    title: 'Not sure what your skin needs',
    text: 'Start with the New Client Signature Facial. I look closely at your skin, build the facial around what I find, and tell you what to book next.',
    services: ['new-client-signature'],
  },
];
