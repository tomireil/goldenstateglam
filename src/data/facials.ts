// The service menu.
//
// SOURCE OF TRUTH: the GlossGenius booking menu at https://goldenstateglam.glossgenius.com/services
// Every name, price, length, deposit and description here is taken from it. When the booking menu changes,
// change this file to match. Don't add services here that can't be booked there.
//
// Last synced with GlossGenius: 2026-11-27.

export type ImageKey =
  | 'facialHands'
  | 'facialMask'
  | 'glassSkin'
  | 'mensFacial'
  | 'stillLife'
  | 'facialSculpt'
  | 'facialMassage'
  | 'glowHands'
  | 'studioCover'
  | 'newClient'
  | 'clearSkin'
  | 'sculptDrain'
  | 'backReset'
  | 'chemicalPeel'
  | 'italianPeel'
  | 'exopeel'
  | 'exosome'
  | 'microneedling'
  | 'package3'
  | 'package6';

export type CategoryId = 'signature' | 'glow' | 'body' | 'peels' | 'premium' | 'advanced';

// Category names as they appear on the booking menu. "Advanced treatments" is ours: those two have no category there.
export const categories: { id: CategoryId; name: string; filter: string }[] = [
  { id: 'signature', name: 'Signature & Deep Cleansing', filter: 'signature and deep cleansing' },
  { id: 'glow', name: 'Hydration & Glow', filter: 'hydration and glow' },
  { id: 'body', name: 'Body Skin Treatments', filter: 'body treatments' },
  { id: 'peels', name: 'Peelings', filter: 'peels' },
  { id: 'premium', name: 'Exopeel & Dermoaroma', filter: 'premium peels' },
  { id: 'advanced', name: 'Advanced treatments', filter: 'advanced treatments' },
];

export interface Service {
  slug: string;
  name: string;
  short: string;
  category: CategoryId;
  price: string;
  /** Numeric price for structured data. */
  offerPrice: string;
  time: string;
  deposit?: string;
  image: ImageKey;
  /** object-position for cropped photos */
  focus: string;
  /** One-line summary from the booking menu. */
  lead: string;
  /** Further intro paragraphs from the booking menu. */
  intro?: string[];
  includes: string[];
  expect: string[];
  goodToKnow: string[];
  bestFor?: string;
  /** Variants the client picks between when booking (the Italian peel systems). */
  options?: { name: string; desc: string; bestFor: string }[];
  /** Homepage picker: pill label and short tag. Only the featured facials have these. */
  need?: string;
  tag?: string;
}

const peelAftercare =
  'Stop retinol and exfoliating acids five days before your visit. Afterward, avoid sun, heavy sweating, and picking for a week, and wear sunscreen every day.';
const peelNotFor = 'Not suitable during pregnancy, on sunburned skin, or within six months of isotretinoin.';

export const services: Service[] = [
  // ---- Signature & Deep Cleansing
  {
    slug: 'new-client-signature',
    name: 'New Client Signature Facial',
    short: 'New Client Signature',
    category: 'signature',
    price: '$150',
    offerPrice: '150.00',
    time: '80 min',
    deposit: '$50 deposit',
    image: 'newClient',
    focus: '50% 45%',
    lead: 'New to Golden State Glam? Start here.',
    intro: [
      'We begin with a short consultation and a close look at your skin. Then you get a full facial built around what your skin needs that day.',
    ],
    includes: [
      'Consultation and skin assessment',
      'Double cleanse',
      'Gentle exfoliation',
      'Nourishing mask',
      'Facial massage',
      'Hydration and SPF',
      'A home care plan',
    ],
    expect: [
      'Clean, soft, hydrated skin the same day, with no downtime.',
      'You leave knowing which facial fits you best and how often to come.',
    ],
    goodToKnow: [
      'Come with or without makeup.',
      'When you book, tell us about any allergies, prescriptions, or recent skin treatments.',
    ],
    bestFor: 'first visits, and anyone not sure which facial to choose',
    need: 'A first visit',
    tag: 'Start here',
  },
  {
    slug: 'signature-deep-cleanse',
    name: 'Signature Deep Cleanse',
    short: 'Signature Deep Cleanse',
    category: 'signature',
    price: '$180',
    offerPrice: '180.00',
    time: '90 min',
    deposit: '$50 deposit for new clients',
    image: 'facialMask',
    focus: '32% 50%',
    lead: 'Our signature facial for deeply clean, refreshed skin.',
    includes: [
      'Double cleanse',
      'Professional exfoliation',
      'Hydrodermabrasion when it suits your skin',
      'Extractions where needed',
      'A targeted mask',
      'Facial massage',
      'Hydration with SPF',
    ],
    expect: [
      'Clearer, smoother, brighter looking skin after the first visit.',
      'Slight redness after extractions usually fades within a few hours.',
    ],
    goodToKnow: [
      'Skip retinol and exfoliating acids for three days before your visit.',
      'Most clients return every four to six weeks.',
    ],
    bestFor: 'congested pores, blackheads, oily skin, and uneven texture',
    need: 'A deep clean',
    tag: 'Deep clean',
  },
  {
    slug: 'clear-skin-facial',
    name: 'Clear Skin Facial',
    short: 'Clear Skin Facial',
    category: 'signature',
    price: '$160',
    offerPrice: '160.00',
    time: '75 min',
    deposit: '$50 deposit for new clients',
    image: 'clearSkin',
    focus: '50% 35%',
    lead: 'A facial for breakouts and congestion.',
    includes: [
      'Skin assessment',
      'Deep cleanse',
      'Superficial exfoliation',
      'Gentle extractions',
      'A calming mask',
      'LED light when appropriate',
      'A simple home routine',
    ],
    expect: [
      'Less visible congestion and calmer looking skin after the first visit.',
      'Some redness after extractions is normal and settles within a day.',
    ],
    goodToKnow: [
      'Breakout prone skin responds best to a series. Most clients start with six visits, two weeks apart.',
      'This is a cosmetic treatment, and severe or painful acne is best seen by a dermatologist first.',
      'Tell us if you use prescription acne medication.',
    ],
    bestFor: 'oily, congested, and breakout prone skin',
    need: 'Clearer skin',
    tag: 'Breakouts',
  },
  {
    slug: 'mens-deep-clean',
    name: 'Men’s Deep Clean Facial',
    short: 'Men’s Deep Clean',
    category: 'signature',
    price: '$180',
    offerPrice: '180.00',
    time: '90 min',
    deposit: '$80 deposit for new clients',
    image: 'mensFacial',
    focus: '60% 40%',
    lead: 'A no fuss facial made for men’s skin.',
    includes: [
      'Double cleanse',
      'Exfoliation',
      'Extractions',
      'A mask',
      'Hydration with SPF',
      'Extra attention to the beard and shaving areas',
    ],
    expect: ['Skin looks cleaner and feels calmer.', 'Mild redness after extractions fades within a few hours.'],
    goodToKnow: ['Shave the day before, not the morning of your visit.', 'Beards are welcome.'],
    bestFor: 'clogged pores, razor irritation, and a first facial',
    need: 'Something for men',
    tag: 'For men',
  },

  // ---- Hydration & Glow
  {
    slug: 'korean-glass-skin',
    name: 'Korean Glass Skin Facial',
    short: 'Korean Glass Skin',
    category: 'glow',
    price: '$165',
    offerPrice: '165.00',
    time: '75 min',
    deposit: '$50 deposit for new clients',
    image: 'glassSkin',
    focus: '60% 40%',
    lead: 'A hydration focused facial for a smooth, dewy finish.',
    includes: [
      'Cleanse',
      'Gentle exfoliation',
      'Layered hydrating serums',
      'A soothing treatment',
      'A nourishing mask',
      'Moisturizer with SPF',
    ],
    expect: [
      'Plump, luminous skin the same day.',
      'Nothing harsh is used, so there is no redness and no downtime.',
    ],
    goodToKnow: ['Gentle enough for sensitive skin.', 'A good choice in winter, after travel, or before photos.'],
    bestFor: 'dull, dehydrated, or rough feeling skin',
    need: 'Glow and hydration',
    tag: 'Glow',
  },
  {
    slug: 'lift-firm-facial',
    name: 'Lift & Firm Facial',
    short: 'Lift & Firm Facial',
    category: 'glow',
    price: '$185',
    offerPrice: '185.00',
    time: '75 min',
    deposit: '$50 deposit for new clients',
    image: 'glowHands',
    focus: '55% 25%',
    lead: 'A firming facial for skin that has lost some bounce.',
    includes: [
      'Cleanse',
      'Enzyme exfoliation',
      'A peptide treatment',
      'A lifting facial massage',
      'LED light',
      'A firming mask',
      'SPF',
    ],
    expect: ['Skin looks tighter and more awake the same day.', 'The effect builds with regular visits.'],
    goodToKnow: ['No needles and no downtime.', 'Book it three to five days before an event.'],
    bestFor: 'fine lines, dullness, and early signs of aging',
    need: 'A lift',
    tag: 'Firming',
  },
  {
    slug: 'lymphatic-drainage-facial-massage',
    name: 'Lymphatic Drainage Facial Massage',
    short: 'Lymphatic Drainage Facial Massage',
    category: 'glow',
    price: '$110',
    offerPrice: '110.00',
    time: '70 min',
    deposit: '$50 deposit',
    image: 'facialSculpt',
    focus: '60% 40%',
    lead: 'Relax, refresh, and rediscover your natural glow.',
    intro: [
      'A relaxing hands-on facial experience combining gentle lymphatic-style massage and customized facial sculpting techniques.',
    ],
    includes: [
      'Gentle cleansing',
      'Gentle lymphatic-style massage',
      'Customized facial sculpting techniques',
      'Moisturizing skincare',
      'A calming finishing ritual',
    ],
    expect: [
      'This treatment focuses on releasing the feeling of facial tension, temporarily reducing the appearance of puffiness, and promoting a refreshed, well-rested look.',
    ],
    goodToKnow: ['Not a medical lymphatic drainage treatment or a permanent facial lifting procedure.'],
    bestFor: 'facial puffiness, tension, stress, and clients who enjoy hands-on facial massage',
  },
  {
    slug: 'deep-relax-sleep-ritual',
    name: 'Deep Relax & Sleep Ritual',
    short: 'Deep Relax & Sleep Ritual',
    category: 'glow',
    price: '$180',
    offerPrice: '180.00',
    time: '90 min',
    deposit: '$80 deposit for new clients',
    image: 'facialMassage',
    focus: '50% 45%',
    lead: 'A deeply immersive relaxation experience designed to calm your body and mind.',
    intro: [
      'This signature ritual releases tension, soothes the nervous system, and gently guides you into a peaceful, sleep-like state. If you’re stressed, this is your reset.',
    ],
    includes: [
      'Gentle cleansing',
      'Slow facial massage, lifting and calming',
      'Neck and shoulder massage',
      'Scalp and face massage',
      'Hand and ear massage',
      'Warm towels and aromatherapy',
      'A firming face mask',
    ],
    expect: [
      'Guided sleep meditation with soft sound therapy and high-vibration music helps your mind fully disconnect and enter a deep state of rest.',
      'You feel relaxed, recharged, and restored with a deep sense of calm.',
    ],
    goodToKnow: ['More than a facial: it’s your escape from stress and a reset for your entire body.'],
    bestFor:
      'feeling tired or overwhelmed, stress or anxiety, tension in the face, neck, or shoulders, and anyone who struggles to relax',
    need: 'Pure relaxation',
    tag: 'Relax',
  },
  {
    slug: 'facial-sculpting-therapy',
    name: 'Facial Sculpting Therapy',
    short: 'Facial Sculpting Therapy',
    category: 'glow',
    price: '$150',
    offerPrice: '150.00',
    time: '80 min',
    deposit: '$50 deposit for new clients',
    image: 'facialHands',
    focus: '50% 40%',
    lead: 'A luxurious approach to smoother, firmer-looking, radiant skin.',
    intro: [
      'This personalized facial is created to address the visible appearance of dryness, fine lines, dullness, and loss of skin suppleness.',
    ],
    includes: [
      'Gentle exfoliation',
      'Peptide-rich skincare',
      'A nourishing treatment mask',
      'Relaxing facial massage',
      'Hydrating finishing products',
    ],
    expect: [
      'Each step is selected to support moisture retention and enhance the appearance of smoother, more refreshed skin.',
    ],
    goodToKnow: ['Your experience may include any of the steps listed, chosen for your skin.'],
    bestFor: 'mature skin, visible fine lines, dullness, and loss of radiance',
  },
  {
    slug: 'sculpt-drain-facial',
    name: 'Sculpt & Drain Facial',
    short: 'Sculpt & Drain Facial',
    category: 'glow',
    price: '$150',
    offerPrice: '150.00',
    time: '60 min',
    deposit: '$50 deposit',
    image: 'sculptDrain',
    focus: '50% 40%',
    lead: 'A hands on facial built around massage.',
    includes: [
      'Warm towels',
      'Cleanse',
      'Gua sha',
      'Lymphatic style massage for the face, neck, and shoulders',
      'A cooling mask',
      'SPF',
    ],
    expect: [
      'Less puffiness, a more defined jawline, and a face that feels relaxed.',
      'Results are temporary and build with regular visits.',
    ],
    goodToKnow: [
      'This is a cosmetic massage, not medical lymphatic drainage.',
      'Drink plenty of water afterward.',
      'Not recommended over active breakouts or irritated skin.',
    ],
    bestFor: 'puffiness, facial tension, and stress',
  },

  // ---- Body Skin Treatments
  {
    slug: 'back-reset',
    name: 'Back Reset',
    short: 'Back Reset',
    category: 'body',
    price: '$160',
    offerPrice: '160.00',
    time: '60 min',
    deposit: '$50 deposit for new clients',
    image: 'backReset',
    focus: '50% 50%',
    lead: 'The same care as a facial, for your back.',
    includes: [
      'Deep cleanse',
      'An enzyme or light peel',
      'Steam',
      'Extractions',
      'High frequency or LED light',
      'A purifying mask',
      'Hydration',
    ],
    expect: ['Skin feels smoother and looks clearer.', 'Mild redness can last a few hours.'],
    goodToKnow: [
      'Wear a loose top to your appointment.',
      'Skip heavy workouts and hot showers for the rest of the day.',
      'Book one to two weeks before a wedding or vacation.',
    ],
    bestFor: 'back breakouts, clogged pores, and rough texture',
  },

  // ---- Peelings
  {
    slug: 'chemical-peel',
    name: 'Chemical Peel',
    short: 'Chemical Peel',
    category: 'peels',
    price: '$120',
    offerPrice: '120.00',
    time: '45 min',
    deposit: '$50 deposit for new clients',
    image: 'chemicalPeel',
    focus: '50% 40%',
    lead: 'A professional peel that lifts away the dull outer layer of skin.',
    includes: [
      'Skin assessment',
      'Cleanse and prep',
      'A peel chosen for your skin',
      'A calming finish',
      'SPF',
      'Aftercare instructions',
    ],
    expect: [
      'Light tingling during the peel.',
      'Mild flaking for two to five days, then smoother and more even looking skin.',
    ],
    goodToKnow: [peelAftercare, peelNotFor],
    bestFor: 'dullness, uneven tone, fine lines, and marks left by breakouts',
  },

  // ---- Exopeel & Dermoaroma
  {
    slug: 'advanced-italian-skin-renewal',
    name: 'Advanced Italian Skin Renewal',
    short: 'Advanced Italian Skin Renewal',
    category: 'premium',
    price: 'from $220',
    offerPrice: '220.00',
    time: '80 min',
    deposit: '$80 deposit for new clients',
    image: 'italianPeel',
    focus: '50% 40%',
    lead: 'A step up from a standard peel, using a professional Italian peeling system.',
    includes: [
      'Skin assessment',
      'Cleanse and prep',
      'A peel formula matched to your concern',
      'A calming finish',
      'SPF',
      'Aftercare instructions',
    ],
    expect: [
      'Tingling or warmth during the peel.',
      'Flaking for three to seven days, then a visibly more even tone and smoother texture.',
    ],
    goodToKnow: [
      'If you are new to peels, we start with a facial or a Chemical Peel first.',
      peelAftercare,
      peelNotFor,
    ],
    bestFor: 'stubborn uneven tone, dark spots, and rough texture',
    options: [
      {
        name: 'Radiance Brightening Peel',
        desc: 'Reveal a brighter, more even-looking complexion. Radiance is a specialized professional peeling formulation combining exfoliating and brightening ingredients, including azelaic acid, azeloglycine, encapsulated retinol, and resorcinol. Developed for concerns involving uneven skin tone, visible discoloration, and signs of photoaging.',
        bestFor: 'uneven-looking pigmentation, dullness, visible dark spots, and signs of sun-related skin aging',
      },
      {
        name: 'Restructa Skin Texture & Clarity',
        desc: 'Refine your texture. Reveal your natural glow. Restructa is an advanced professional peel formulated with lactic, mandelic, shikimic, and pyruvic acids, combined with skin-conditioning ingredients. Designed to improve the appearance of rough skin texture, visible congestion, enlarged-looking pores, and dullness.',
        bestFor: 'oily, combination, congested, and uneven-looking skin',
      },
      {
        name: 'Juvena Advanced Age-Defying Renewal',
        desc: 'Advanced skin renewal for a smoother, more youthful-looking complexion. Juvena is an intensive professional peeling formulation combining trichloroacetic acid (TCA), retinol, exfoliating acids, PDRN, and peptides. Developed for mature and photoaged skin, it is intended to improve the appearance of rough texture, fine lines, and uneven skin tone.',
        bestFor: 'mature, photoaged, and uneven-textured skin following professional assessment',
      },
      {
        name: 'Intima Specialized Body Brightening Peel',
        desc: 'Targeted care for a more even-looking skin tone. Intima is a specialized Dermoaroma peeling formulation developed for selected areas of the body affected by visible discoloration and uneven skin tone. Its formula combines TCA with selected exfoliating and brightening ingredients. Designed for localized cosmetic concerns, including areas such as the underarms, elbows, and knees.',
        bestFor: 'localized uneven skin tone and visible body pigmentation, following professional evaluation',
      },
    ],
  },
  {
    slug: 'exopeel-premium-skin-renewal',
    name: 'Exopeel Premium Skin Renewal',
    short: 'Exopeel Premium Skin Renewal',
    category: 'premium',
    price: '$450',
    offerPrice: '450.00',
    time: '105 min',
    deposit: '$80 deposit for new clients',
    image: 'exopeel',
    focus: '50% 50%',
    lead: 'Our most advanced peel.',
    intro: [
      'Exopeel is a professional peel from Europe designed to renew the surface of the skin. Every treatment starts with a skin assessment, so the protocol is chosen for your skin alone.',
    ],
    includes: [
      'Skin assessment',
      'Cleanse and prep',
      'The Exopeel protocol selected for you',
      'A calming finish',
      'SPF',
      'Aftercare instructions',
    ],
    expect: [
      'Skin may feel tight for a day or two, followed by several days of peeling.',
      'As it settles, texture looks softer, tone looks more even, and fine lines look less noticeable.',
    ],
    goodToKnow: [
      'Plan this at least two weeks before any event.',
      'New clients start with a New Client Signature Facial.',
      peelAftercare,
      peelNotFor,
    ],
    bestFor: 'clients who want a visible change in tone and texture and can plan for a few days of recovery',
  },

  // ---- Advanced treatments (no category on the booking menu)
  {
    slug: 'exosome-therapy-microneedling',
    name: 'Exosome Therapy + Microneedling',
    short: 'Exosome Therapy + Microneedling',
    category: 'advanced',
    price: '$300',
    offerPrice: '300.00',
    time: '90 min',
    image: 'exosome',
    focus: '50% 40%',
    lead: 'Next-level skin regeneration for a visible, radiant glow.',
    intro: [
      'A luxury facial powered by advanced exosome technology to repair, strengthen, and rejuvenate your skin at a cellular level.',
    ],
    includes: [
      'Deep cleanse and gentle exfoliation',
      'Hydro or deep pore cleansing, if needed',
      'Advanced exosome infusion with targeted delivery',
      'Relaxing facial and scalp massage',
      'LED light therapy to enhance results',
      'A hydrating jelly mask',
      'Finishing skincare and SPF protection',
    ],
    expect: [
      'Your skin looks smoother, firmer, and visibly more radiant, with a healthy glow that comes from within.',
    ],
    goodToKnow: [
      'What it does: boosts collagen and skin renewal, improves texture, tone, and elasticity, reduces fine lines and signs of fatigue, enhances hydration and natural glow, and strengthens overall skin health.',
    ],
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    short: 'Microneedling',
    category: 'advanced',
    price: '$320',
    offerPrice: '320.00',
    time: '120 min',
    deposit: '$80 deposit for new clients',
    image: 'microneedling',
    focus: '50% 45%',
    lead: 'A premium skin renewal treatment that combines advanced microneedling with exosome, collagen or peptides therapy.',
    intro: [
      'Advanced microneedling combined with exosome therapy to boost collagen, accelerate skin repair, and deliver smoother, firmer, and more radiant skin.',
    ],
    includes: [
      'Cleansing and skin preparation',
      'Gentle exfoliation',
      'Numbing',
      'Scalp massage',
      'Customized microneedling treatment',
      'Exosome infusion',
      'A calming mask with facial massage',
      'LED therapy',
      'Finishing skincare',
    ],
    expect: ['Refined texture, reduced fine lines and acne scars, minimized pores, improved tone, and a healthy glow.'],
    goodToKnow: ['Suitable for all skin types.'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;

// ---- Packages

export interface Package {
  id: string;
  name: string;
  price: string;
  sessions: string;
  desc: string;
  value: string;
  image: ImageKey;
}

export const packages: Package[] = [
  {
    id: 'signature-skin-refresh',
    name: 'Signature Skin Refresh: 3 Sessions',
    price: '$510',
    sessions: 'Three 90-minute treatments',
    desc: 'Consistency is the foundation of beautiful skin. Enjoy three Signature Deep Cleanse Facials, each tailored to your skin’s needs: professional cleansing, gentle exfoliation, extractions when appropriate, customized masks, and hydration. Perfect for maintaining clearer-looking, smoother, refreshed skin.',
    value: 'Regular value $540. You save $30.',
    image: 'package3',
  },
  {
    id: 'signature-skin-maintenance',
    name: 'Signature Skin Maintenance: 6 Sessions',
    price: '$990',
    sessions: 'Six 90-minute treatments',
    desc: 'Make professional skincare part of your long-term routine. A six-session series of our Signature Deep Cleanse Facial, customized at every visit to manage visible congestion, maintain hydration, and support a refreshed complexion, with skincare guidance throughout your program.',
    value: 'Regular value $1,080. You save $90.',
    image: 'package6',
  },
];

export const packageDeposit = '$80 deposit for new clients';
export const packageTerms =
  'Appointments are scheduled according to individual skin needs. Package terms, expiration, cancellation rules, and eligible services are provided before purchase.';

export const packageAddOns = [
  {
    name: 'LED Light Therapy',
    desc: 'Add noninvasive LED light therapy to complement your facial and support a refreshed, healthy-looking complexion.',
  },
  {
    name: 'Extra Hydrating Mask',
    desc: 'A customized moisture-rich treatment mask to give dry or dehydrated skin an extra boost of comfort.',
  },
  {
    name: 'Extended Facial Massage',
    desc: 'Enjoy 15 additional minutes of relaxing facial massage to help release tension and enhance your treatment experience.',
  },
  {
    name: 'Gentle Lip & Eye Care',
    desc: 'A targeted moisturizing treatment for the delicate lip and eye areas, designed to leave the skin feeling softer and more comfortable.',
  },
];
export const packageAddOnNote = 'Add-ons are selected according to individual skin needs and treatment compatibility.';

// ---- Current promotion on the booking menu. The site hides it automatically after `ends`.

export const promo = {
  name: 'Black Friday special',
  dates: 'November 23 to 30',
  starts: '2026-11-23',
  ends: '2026-11-30',
  text: 'Special promotional pricing is valid for appointments scheduled between November 23 and November 30, 2026. Appointments booked outside these dates are not eligible for Black Friday pricing. Regular service prices will apply.',
  from: 'from $80',
  services: [
    'New Client Signature Facial',
    'Back Reset',
    'Facial Sculpting Therapy',
    'Microneedling',
    'Lymphatic Drainage Facial Massage',
    'Advanced Italian Skin Renewal',
    'Lift & Firm Facial',
    'Men’s Deep Clean Facial',
  ],
};

// ---- Homepage picker: the seven facials most people choose between. The full menu is on /services/.

export interface GalleryItem {
  id: string;
  name: string;
  price: string;
  time: string;
  tag: string;
  need: string;
  desc: string;
  image: ImageKey;
  focus: string;
  href: string;
}

// The picker's info card covers the lower part of each photo, so a few facials use a photo with the subject up top.
const galleryPhoto: Record<string, { image: ImageKey; focus: string }> = {
  'new-client-signature': { image: 'facialHands', focus: '50% 40%' },
  'deep-relax-sleep-ritual': { image: 'facialSculpt', focus: '60% 30%' },
};

export const galleryItems: GalleryItem[] = services
  .filter((s) => s.need)
  .map((s) => ({
    id: s.slug,
    name: s.name,
    price: s.price,
    time: s.time,
    tag: s.tag!,
    need: s.need!,
    desc: `${s.lead} ${s.expect[0]}`,
    image: galleryPhoto[s.slug]?.image ?? s.image,
    focus: galleryPhoto[s.slug]?.focus ?? s.focus,
    href: `/services/${s.slug}/`,
  }));

// Lowest and highest single-service prices, for "from $X" lines and structured data.
const amounts = services.map((s) => Number(s.offerPrice));
export const priceFrom = `$${Math.min(...amounts)}`;
export const priceTo = `$${Math.max(...amounts)}`;
