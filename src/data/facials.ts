// The service menu.
//
// SOURCE OF TRUTH: the GlossGenius booking menu at https://goldenstateglam.glossgenius.com/services
// Every service name, price, length, deposit and list of included steps here is taken from it. When the booking
// menu changes, change this file to match. Don't add services here that can't be booked there.
//
// The wording around those facts (lead, intro, what to expect, good to know) is written for this site:
// plain language, one clear sentence about what the treatment is and who it's for, and the search terms
// people actually use. Keep it honest. Don't promise results the booking menu doesn't.
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
  | 'package6'
  | 'hero';

export type CategoryId = 'signature' | 'glow' | 'body' | 'peels' | 'premium' | 'advanced';

// Category names as they appear on the booking menu. "Advanced treatments" is ours: those two have no category there.
// Category names are written for visitors. GlossGenius calls the peel groups "Peelings" and "Exopeel & Dermoaroma".
export const categories: { id: CategoryId; name: string; filter: string; note?: string }[] = [
  { id: 'signature', name: 'Signature & Deep Cleansing', filter: 'Deep cleansing' },
  {
    id: 'glow',
    name: 'Hydration & Glow',
    filter: 'Hydration',
    note: 'Three of these are massage-led. The Lymphatic Drainage Facial Massage is hands only. The Sculpt & Drain Facial adds gua sha tools and shoulder massage. Facial Sculpting Therapy is a full skincare facial for dry or mature skin.',
  },
  { id: 'body', name: 'Back facial', filter: 'Back' },
  { id: 'peels', name: 'Chemical peels', filter: 'Peels' },
  { id: 'premium', name: 'Advanced peels', filter: 'Advanced peels' },
  { id: 'advanced', name: 'Advanced treatments', filter: 'Advanced' },
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
  /** One sentence: what it is and who it's for. Used on the menu, in search descriptions and in llms.txt. */
  lead: string;
  /** One or two short paragraphs: how it works and how it differs from the nearest alternative. */
  intro?: string[];
  includes: string[];
  expect: string[];
  goodToKnow: string[];
  bestFor?: string;
  /** Variants the client picks between when booking (the Italian peel systems). */
  options?: { name: string; price?: string; desc?: string; bestFor?: string }[];
  /** Questions people ask before booking this service. Answer only from facts already on this page. */
  questions?: { q: string; a: string }[];
  /** A pointer to a related service, shown under "Best for": the text, then a link to that service. */
  seeAlso?: { text: string; slug: string };
  /** The plain search term for this treatment when the booking name doesn't say it, e.g. "back facial". Shown in the page heading. */
  term?: string;
  /** Page title for search results, when the default "<name> in Fair Oaks | Golden State Glam" would miss the search term. Keep it to 60 characters. */
  seoTitle?: string;
  /** Homepage picker: pill label and short tag. Only the featured facials have these. */
  need?: string;
  tag?: string;
}

const peelAftercare =
  'Stop retinol and exfoliating acids five days before your visit. Afterward, stay out of the sun, skip heavy workouts, don’t pick at flaking skin for a week, and wear sunscreen every day.';
const peelNotFor = 'Not suitable during pregnancy, on sunburned skin, or within six months of taking isotretinoin.';

export const services: Service[] = [
  // ---- Signature & Deep Cleansing
  {
    slug: 'new-client-signature',
    questions: [
      { q: 'What happens at a first visit?', a: 'It starts with a short consultation and a close look at your skin. Then you get a full facial: double cleanse, gentle exfoliation, a nourishing mask, facial massage, hydration and SPF. You leave with a simple home care plan.' },
      { q: 'Should I come without makeup?', a: 'Come with or without makeup. The double cleanse takes care of it.' },
    ],
    name: 'New Client Signature Facial',
    short: 'New Client Signature',
    category: 'signature',
    price: '$150',
    offerPrice: '150.00',
    time: '80 min',
    deposit: '$50 deposit',
    image: 'newClient',
    focus: '50% 40%',
    lead: 'The first-visit facial: a skin consultation and a full custom facial in one 80-minute appointment.',
    intro: [
      'Not sure what your skin needs? That’s what this visit is for. I look closely at your skin, ask about your routine, and build the facial around what I find.',
      'It’s a complete facial, not a trial. You leave with clean, hydrated skin and a simple plan to follow at home.',
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
      'A clear recommendation for which facial to book next, and how often to come.',
    ],
    goodToKnow: [
      'Come with or without makeup. The double cleanse takes care of it.',
      'When you book, tell me about any allergies, prescriptions, or recent skin treatments.',
    ],
    bestFor: 'first visits, and anyone who isn’t sure which facial to choose',
    need: 'A first visit',
    tag: 'Start here',
  },
  {
    slug: 'signature-deep-cleanse',
    questions: [
      { q: 'How often should I get a deep cleansing facial?', a: 'Most clients come back every four to six weeks.' },
      { q: 'Will my skin be red after extractions?', a: 'Slight redness after extractions is normal. It usually fades within a few hours.' },
    ],
    name: 'Signature Deep Cleanse',
    term: 'deep cleansing facial',
    seoTitle: 'Deep Cleansing Facial in Fair Oaks | Golden State Glam',
    short: 'Signature Deep Cleanse',
    category: 'signature',
    price: '$180',
    offerPrice: '180.00',
    time: '90 min',
    deposit: '$50 deposit for new clients',
    image: 'facialMask',
    focus: '32% 50%',
    lead: 'A 90-minute deep cleansing facial with extractions, for clogged pores, blackheads and dull skin.',
    intro: [
      'This is my most thorough clean. Exfoliation loosens what’s sitting in your pores, extractions clear it out, and a targeted mask calms everything down.',
      'Hydrodermabrasion is added when it suits your skin. It’s a gentle, water-based exfoliation that lifts dead skin and debris without scrubbing.',
    ],
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
      'Most clients see clearer, smoother-looking skin after the first visit.',
      'Slight redness after extractions is normal. It usually fades within a few hours.',
    ],
    goodToKnow: [
      'Skip retinol and exfoliating acids for three days before your visit.',
      'Most clients come back every four to six weeks.',
      'Planning to come regularly? The three and six-session packages are built on this facial.',
    ],
    bestFor: 'clogged pores, blackheads, oily skin, and uneven texture',
    need: 'A deep clean',
    tag: 'Deep clean',
  },
  {
    slug: 'clear-skin-facial',
    questions: [
      { q: 'How many visits will I need?', a: 'Breakout-prone skin responds best to a series. Most clients start with six visits, two weeks apart.' },
      { q: 'Can a facial treat severe acne?', a: 'This is a cosmetic treatment. Severe or painful acne is best seen by a dermatologist first.' },
    ],
    seeAlso: { text: 'Breakouts on your back too? See the', slug: 'back-reset' },
    name: 'Clear Skin Facial',
    term: 'acne facial',
    seoTitle: 'Clear Skin Acne Facial in Fair Oaks | Golden State Glam',
    short: 'Clear Skin Facial',
    category: 'signature',
    price: '$160',
    offerPrice: '160.00',
    time: '75 min',
    deposit: '$50 deposit for new clients',
    image: 'clearSkin',
    focus: '45% 45%',
    lead: 'An acne facial for breakouts, blackheads and congested skin, with gentle extractions and a calming mask.',
    intro: [
      'Built for skin that breaks out. I clear congestion without stripping or over-drying your skin, then soothe it.',
      'It’s gentler than the Signature Deep Cleanse and more focused on breakouts. LED light is added when it fits your skin, and you leave with a simple routine for home.',
    ],
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
      'Skin usually looks calmer and less congested after the first visit.',
      'Some redness after extractions is normal. It settles within a day.',
    ],
    goodToKnow: [
      'Breakout-prone skin responds best to a series. Most clients start with six visits, two weeks apart.',
      'This is a cosmetic treatment. Severe or painful acne is best seen by a dermatologist first.',
      'Tell me if you use prescription acne medication.',
    ],
    bestFor: 'oily, congested, and breakout-prone skin',
    need: 'Clearer skin',
    tag: 'Breakouts',
  },
  {
    slug: 'mens-deep-clean',
    questions: [
      { q: 'Should I shave before a men’s facial?', a: 'Shave the day before, not the morning of your visit. Beards are welcome.' },
    ],
    name: 'Men’s Deep Clean Facial',
    short: 'Men’s Deep Clean',
    category: 'signature',
    price: '$180',
    offerPrice: '180.00',
    time: '90 min',
    deposit: '$80 deposit for new clients',
    image: 'mensFacial',
    focus: '50% 28%',
    lead: 'A deep cleansing facial for men, with extra care for the beard and shaving areas.',
    intro: [
      'Men’s skin tends to be thicker and oilier, and shaving adds irritation on top. This facial clears clogged pores and gives extra attention to the places where razor bumps show up.',
      'Never had a facial? This is an easy one to start with. Ninety minutes, no fuss.',
    ],
    includes: [
      'Double cleanse',
      'Exfoliation',
      'Extractions',
      'A mask',
      'Hydration with SPF',
      'Extra attention to the beard and shaving areas',
    ],
    expect: [
      'Skin that looks cleaner and feels calmer.',
      'Mild redness after extractions is normal. It fades within a few hours.',
    ],
    goodToKnow: ['Shave the day before, not the morning of your visit.', 'Beards are welcome.'],
    bestFor: 'clogged pores, razor irritation, and a first facial',
    need: 'Something for men',
    tag: 'For men',
  },

  // ---- Hydration & Glow
  {
    slug: 'korean-glass-skin',
    questions: [
      { q: 'What is a Korean glass skin facial?', a: 'It’s a hydrating facial. Lightweight hydrating serums are layered onto the skin, followed by a soothing treatment and a nourishing mask. No strong exfoliants are used.' },
      { q: 'Is it OK for sensitive skin?', a: 'Yes. It’s gentle enough for sensitive skin, and nothing harsh is used.' },
    ],
    name: 'Korean Glass Skin Facial',
    short: 'Korean Glass Skin',
    category: 'glow',
    price: '$165',
    offerPrice: '165.00',
    time: '75 min',
    deposit: '$50 deposit for new clients',
    image: 'glassSkin',
    focus: '50% 30%',
    lead: 'A hydrating facial that layers serums for smooth, dewy, glass-like skin.',
    intro: [
      '“Glass skin” is the Korean skincare term for skin so hydrated it looks smooth and reflective. This facial gets you there by layering lightweight hydrating serums, not by using strong exfoliants.',
      'Choose it when your skin feels tight, flaky or tired.',
    ],
    includes: [
      'Cleanse',
      'Gentle exfoliation',
      'Layered hydrating serums',
      'A soothing treatment',
      'A nourishing mask',
      'Moisturizer with SPF',
    ],
    expect: ['Plump, luminous skin the same day.', 'Nothing harsh is used, so redness is unlikely and there’s no downtime.'],
    goodToKnow: ['Gentle enough for sensitive skin.', 'A good choice in winter, after travel, or before photos.'],
    bestFor: 'dull, dehydrated, or rough-feeling skin',
    need: 'Glow and hydration',
    tag: 'Glow',
  },
  {
    slug: 'lift-firm-facial',
    questions: [
      { q: 'How far ahead of an event should I book?', a: 'Three to five days ahead.' },
      { q: 'Does it use needles?', a: 'No. There are no needles and no downtime.' },
    ],
    seeAlso: { text: 'Prefer a gentler, moisture-first facial for dry or mature skin? See', slug: 'facial-sculpting-therapy' },
    name: 'Lift & Firm Facial',
    short: 'Lift & Firm Facial',
    category: 'glow',
    price: '$185',
    offerPrice: '185.00',
    time: '75 min',
    deposit: '$50 deposit for new clients',
    image: 'glowHands',
    focus: '55% 25%',
    lead: 'A firming facial with peptides, sculpting massage and LED light, for skin that’s lost some bounce.',
    intro: [
      'A facial for fine lines and skin that looks tired. An enzyme exfoliation clears the surface, then a peptide treatment and a firming mask do the skincare work.',
      'The sculpting massage and LED light finish the job. No needles, no downtime.',
    ],
    includes: [
      'Cleanse',
      'Enzyme exfoliation',
      'A peptide treatment',
      'A lifting facial massage',
      'LED light',
      'A firming mask',
      'SPF',
    ],
    expect: ['Skin that looks more awake the same day.', 'The effect builds with regular visits.'],
    goodToKnow: ['No needles and no downtime.', 'For an event, book it three to five days ahead.'],
    bestFor: 'fine lines, dullness, and early signs of aging',
    need: 'A lift',
    tag: 'Firming',
  },
  {
    slug: 'lymphatic-drainage-facial-massage',
    questions: [
      { q: 'Is this medical lymphatic drainage?', a: 'No. This is a cosmetic facial massage. It isn’t medical lymphatic drainage or a permanent lift.' },
      { q: 'How long does the result last?', a: 'The de-puffing effect is temporary.' },
    ],
    seeAlso: { text: 'Want gua sha tools and shoulder massage too? See the', slug: 'sculpt-drain-facial' },
    name: 'Lymphatic Drainage Facial Massage',
    short: 'Lymphatic Drainage Facial Massage',
    category: 'glow',
    price: '$110',
    offerPrice: '110.00',
    time: '70 min',
    deposit: '$50 deposit',
    image: 'facialSculpt',
    focus: '60% 40%',
    lead: 'A 70-minute hands-on facial massage that eases puffiness and facial tension.',
    intro: [
      'Slow, light massage strokes follow the natural drainage paths of your face and neck. Sculpting techniques then work along the jaw, cheeks and brow, chosen for your face.',
      'It’s the most massage-focused treatment on the menu. There’s a gentle cleanse and moisturizer, and no extractions or peels.',
    ],
    includes: [
      'Gentle cleansing',
      'Gentle lymphatic-style massage',
      'Customized facial sculpting techniques',
      'Moisturizing skincare',
      'A calming finishing ritual',
    ],
    expect: [
      'A face that looks less puffy, feels lighter, and looks well rested.',
      'The de-puffing effect is temporary.',
    ],
    goodToKnow: [
      'This is a cosmetic facial massage. It isn’t medical lymphatic drainage or a permanent lift.',
    ],
    bestFor: 'facial puffiness, tension, stress, and anyone who loves a hands-on facial massage',
  },
  {
    slug: 'deep-relax-sleep-ritual',
    questions: [
      { q: 'Is it OK to fall asleep?', a: 'Yes. A guided sleep meditation and soft sound therapy play while you rest under a mask. Falling asleep is the idea.' },
      { q: 'Is this a treatment for anxiety or sleep problems?', a: 'No. It’s a relaxation ritual, not a medical treatment for stress, anxiety or sleep problems.' },
    ],
    name: 'Deep Relax & Sleep Ritual',
    short: 'Deep Relax & Sleep Ritual',
    category: 'glow',
    price: '$180',
    offerPrice: '180.00',
    time: '90 min',
    deposit: '$80 deposit for new clients',
    image: 'facialMassage',
    focus: '50% 45%',
    lead: 'A relaxation facial with face, scalp, neck and shoulder massage and a guided sleep meditation.',
    intro: [
      'This one is about switching off. Slow massage moves from your face to your scalp, neck, shoulders, hands and ears, with warm towels and aromatherapy throughout.',
      'A guided sleep meditation and soft sound therapy play while you rest under a firming mask. It’s fine to fall asleep. That’s the idea.',
    ],
    includes: [
      'Gentle cleansing',
      'Slow facial massage, lifting and calming',
      'Neck and shoulder massage',
      'Scalp and face massage',
      'Hand and ear massage',
      'Warm towels and aromatherapy',
      'A firming face mask',
      'Guided sleep meditation with soft sound therapy',
    ],
    expect: ['Deep calm, looser shoulders, and a rested face.', 'You leave feeling recharged, like after a good nap.'],
    goodToKnow: [
      'This is a relaxation ritual first and a skin treatment second.',
      'It isn’t a medical treatment for stress, anxiety or sleep problems.',
    ],
    bestFor:
      'stress, tiredness, tension in the face, neck or shoulders, and anyone who finds it hard to switch off',
    need: 'Pure relaxation',
    tag: 'Relax',
  },
  {
    slug: 'facial-sculpting-therapy',
    questions: [
      { q: 'Who is Facial Sculpting Therapy for?', a: 'It suits mature skin, visible fine lines, dryness and loss of radiance. The steps are chosen for your skin on the day.' },
    ],
    name: 'Facial Sculpting Therapy',
    short: 'Facial Sculpting Therapy',
    category: 'glow',
    price: '$150',
    offerPrice: '150.00',
    time: '80 min',
    deposit: '$50 deposit for new clients',
    image: 'facialHands',
    focus: '50% 30%',
    lead: 'An 80-minute facial for dry or mature skin, with peptide skincare, a nourishing mask and facial massage.',
    intro: [
      'For skin that looks dull, dry, or less firm than it used to. Gentle exfoliation clears the surface, then peptide-rich products and a nourishing mask put moisture back.',
      'The steps are chosen for your skin on the day, so your facial may include some or all of the ones listed.',
    ],
    includes: [
      'Gentle exfoliation',
      'Peptide-rich skincare',
      'A nourishing treatment mask',
      'Relaxing facial massage',
      'Hydrating finishing products',
    ],
    expect: ['Skin that looks smoother, plumper and more radiant.', 'Skin that feels comfortable and holds moisture better.'],
    goodToKnow: ['Your facial is personalized, so it may include some or all of the steps listed.'],
    bestFor: 'mature skin, visible fine lines, dryness, and loss of radiance',
  },
  {
    slug: 'sculpt-drain-facial',
    questions: [
      { q: 'What is gua sha?', a: 'Gua sha is a smooth stone tool that glides over the skin to ease puffiness and relax tight facial muscles.' },
      { q: 'Can I book it during a breakout?', a: 'It’s not recommended over active breakouts or irritated skin.' },
    ],
    name: 'Sculpt & Drain Facial',
    term: 'gua sha facial',
    seoTitle: 'Gua Sha Facial in Fair Oaks | Sculpt & Drain Facial',
    short: 'Sculpt & Drain Facial',
    category: 'glow',
    price: '$150',
    offerPrice: '150.00',
    time: '60 min',
    deposit: '$50 deposit',
    image: 'sculptDrain',
    focus: '50% 30%',
    lead: 'A 60-minute gua sha and lymphatic massage facial for puffiness and facial tension.',
    intro: [
      'Gua sha is a smooth stone tool that glides over the skin to ease puffiness and relax tight facial muscles. Here it’s paired with lymphatic-style massage for your face, neck and shoulders.',
      'Warm towels start the visit and a cooling mask ends it.',
    ],
    includes: [
      'Warm towels',
      'Cleanse',
      'Gua sha',
      'Lymphatic-style massage for the face, neck, and shoulders',
      'A cooling mask',
      'SPF',
    ],
    expect: [
      'A jawline that looks less puffy, and a face that feels relaxed.',
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
    questions: [
      { q: 'How far ahead of an event should I book a back facial?', a: 'One to two weeks ahead of a wedding or vacation.' },
      { q: 'What should I wear?', a: 'Wear a loose top. Skip heavy workouts and hot showers for the rest of the day.' },
    ],
    name: 'Back Reset',
    term: 'back facial',
    seoTitle: 'Back Facial in Fair Oaks (Back Reset) | Golden State Glam',
    short: 'Back Reset',
    category: 'body',
    price: '$160',
    offerPrice: '160.00',
    time: '60 min',
    deposit: '$50 deposit for new clients',
    image: 'backReset',
    focus: '50% 45%',
    lead: 'A back facial: deep cleansing, extractions and a purifying mask for back acne and clogged pores.',
    intro: [
      'Your back is hard to reach and quick to break out. This treatment gives it the same steps your face gets in a facial.',
      'An enzyme or light peel and steam soften the skin before extractions. High frequency or LED light and a purifying mask follow, to help calm things down.',
    ],
    includes: [
      'Deep cleanse',
      'An enzyme or light peel',
      'Steam',
      'Extractions',
      'High frequency or LED light',
      'A purifying mask',
      'Hydration',
    ],
    expect: ['Skin that feels smoother and looks clearer.', 'Mild redness can last a few hours.'],
    goodToKnow: [
      'Wear a loose top to your appointment.',
      'Skip heavy workouts and hot showers for the rest of the day.',
      'For a wedding or vacation, book it one to two weeks ahead.',
    ],
    bestFor: 'back breakouts, clogged pores, and rough texture',
  },

  // ---- Peelings
  {
    slug: 'chemical-peel',
    questions: [
      { q: 'Does a chemical peel hurt?', a: 'Expect light tingling during the peel.' },
      { q: 'How long is the downtime after a chemical peel?', a: 'Expect mild flaking for two to five days. Stop retinol and exfoliating acids five days before your visit.' },
    ],
    seeAlso: { text: 'Stubborn dark spots or texture? See the', slug: 'advanced-italian-skin-renewal' },
    name: 'Chemical Peel',
    short: 'Chemical Peel',
    category: 'peels',
    price: 'from $120',
    offerPrice: '120.00',
    time: '45 min',
    deposit: '$50 deposit for new clients',
    image: 'chemicalPeel',
    focus: '50% 55%',
    lead: 'A professional chemical peel that lifts away dull surface skin for a smoother, more even tone.',
    intro: [
      'A peel uses skincare acids to loosen the dull top layer of skin so fresher skin shows through. I look at your skin first, then choose the peel that suits it.',
      'New to peels? Start here. For stubborn dark spots or texture, the Advanced Italian Skin Renewal goes further.',
    ],
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
      'Mild flaking for two to five days, then smoother and more even-looking skin.',
    ],
    goodToKnow: [peelAftercare, peelNotFor],
    bestFor: 'dullness, uneven tone, fine lines, and marks left by breakouts',
    // The six 45-minute peels on the booking menu, with their prices. The booking menu also has a $450, 120-minute
    // "Peeling System + microneedling with Exosomes" option, left off here while the microneedling pages are on hold.
    options: [
      { name: 'Lactic Acid Peel (Circadia)', price: '$120' },
      { name: 'Mandelic Peel + DMAE (Simildiet)', price: '$130' },
      { name: 'Azelaic Acid Peel (Simildiet)', price: '$130' },
      { name: 'MandelicClear Peel (Circadia)', price: '$140' },
      { name: 'Yellow Peel (Simildiet)', price: '$160' },
      { name: 'DermaFrost Peel (Circadia)', price: '$170' },
    ],
  },

  // ---- Exopeel & Dermoaroma
  {
    slug: 'advanced-italian-skin-renewal',
    questions: [
      { q: 'How is this different from a standard chemical peel?', a: 'It’s a step up. Each of the four formulas targets a different concern, and you should expect more flaking: three to seven days.' },
      { q: 'Who shouldn’t book this peel?', a: 'It’s not suitable during pregnancy, on sunburned skin, or within six months of taking isotretinoin.' },
    ],
    name: 'Advanced Italian Skin Renewal',
    seoTitle: 'Advanced Chemical Peel in Fair Oaks | Italian Skin Renewal',
    short: 'Advanced Italian Skin Renewal',
    category: 'premium',
    price: 'from $220',
    offerPrice: '220.00',
    time: '80 min',
    deposit: '$80 deposit for new clients',
    image: 'italianPeel',
    focus: '50% 65%',
    lead: 'A stronger professional peel, with four Italian formulas for dark spots, texture, aging skin or body areas.',
    intro: [
      'This is a step up from a standard chemical peel. Each of the four formulas targets a different concern, and I assess your skin before choosing one.',
      'Expect more flaking than a standard peel, and a more noticeable change in how tone and texture look once it settles.',
    ],
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
      'New to peels? I start you with a facial or a Chemical Peel first.',
      peelAftercare,
      peelNotFor,
    ],
    bestFor: 'stubborn uneven tone, dark spots, and rough texture',
    options: [
      {
        name: 'Radiance Brightening Peel',
        desc: 'The brightening peel. It combines azelaic acid, azeloglycine, encapsulated retinol and resorcinol to exfoliate and brighten, for a more even-looking complexion.',
        bestFor: 'dark spots, uneven-looking pigmentation, and the look of sun-related dullness and uneven tone',
      },
      {
        name: 'Restructa Skin Texture & Clarity',
        desc: 'The texture peel. Lactic, mandelic, shikimic and pyruvic acids smooth rough skin and reduce the look of congestion, enlarged pores and dullness.',
        bestFor: 'oily, combination, congested, and uneven-looking skin',
      },
      {
        name: 'Juvena Advanced Age-Defying Renewal',
        desc: 'The most intensive face peel of the four. It combines TCA (trichloroacetic acid), retinol, exfoliating acids, PDRN and peptides to improve the look of rough texture, fine lines and uneven tone.',
        bestFor: 'mature and sun-damaged skin with uneven texture, after a professional assessment',
      },
      {
        name: 'Intima Specialized Body Brightening Peel',
        desc: 'A body peel for small areas where the skin looks darker or uneven, such as the underarms, elbows and knees. It combines TCA with exfoliating and brightening ingredients.',
        bestFor: 'uneven tone and visible pigmentation on small areas of the body, after a professional assessment',
      },
    ],
  },
  {
    slug: 'exopeel-premium-skin-renewal',
    questions: [
      { q: 'How much recovery time should I plan for?', a: 'Skin may feel tight for a day or two, followed by several days of peeling. Plan it at least two weeks before any event.' },
    ],
    name: 'Exopeel Premium Skin Renewal',
    short: 'Exopeel Premium Skin Renewal',
    category: 'premium',
    price: '$450',
    offerPrice: '450.00',
    time: '105 min',
    deposit: '$80 deposit for new clients',
    image: 'exopeel',
    focus: '50% 50%',
    lead: 'My most advanced peel: a 105-minute treatment for the look of tone, texture and fine lines.',
    intro: [
      'Exopeel is a professional peel system from Europe that exfoliates the surface of the skin. Every treatment starts with a skin assessment, and the protocol is chosen for your skin alone.',
      'It asks more of your skin than my other peels, so plan for a few days of recovery.',
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
    bestFor: 'anyone who wants a visible change in tone and texture and can plan for a few days of recovery',
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
    lead: 'An exosome infusion with microneedling and LED light, for smoother, firmer, brighter-looking skin.',
    intro: [
      'Exosomes are tiny messenger particles used in skincare to support the skin’s own renewal. Here they’re infused into freshly prepped skin, then followed by LED light and a hydrating jelly mask.',
      'You also get a deep cleanse and a face and scalp massage, so it still feels like a facial.',
    ],
    includes: [
      'Deep cleanse and gentle exfoliation',
      'Hydro or deep pore cleansing, if needed',
      'Advanced exosome infusion with targeted delivery',
      'Relaxing facial and scalp massage',
      'LED light therapy',
      'A hydrating jelly mask',
      'Finishing skincare and SPF',
    ],
    expect: [
      'Skin that looks smoother, firmer and more radiant.',
      'Better-looking texture, tone and elasticity, with softer-looking fine lines and less of that tired look.',
    ],
    goodToKnow: [
      'Tell us about any recent skin treatments, prescriptions or allergies when you book.',
      'Want the longer session with numbing? See Microneedling.',
    ],
    bestFor: 'fine lines, dull or tired-looking skin, and uneven texture or tone',
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
    focus: '45% 45%',
    lead: 'A two-hour microneedling treatment with numbing, an exosome infusion and LED light, for texture, pores and acne scars.',
    intro: [
      'Microneedling uses very fine needles to make tiny channels in the skin. That prompts the skin to renew itself and helps serums sink in.',
      'This is the full session. Numbing comes first, then a treatment tailored to your skin with exosome, collagen or peptide therapy. A calming mask, facial massage and LED light finish the visit.',
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
    expect: [
      'Smoother texture, smaller-looking pores, a more even tone, and softer-looking fine lines and acne scars.',
      'A healthy glow once the skin settles.',
    ],
    goodToKnow: [
      'Suitable for all skin types.',
      'Numbing is applied first to keep you comfortable.',
      'Tell us about any recent skin treatments, prescriptions or allergies when you book.',
    ],
    bestFor: 'rough texture, enlarged pores, acne scars, and fine lines',
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
    desc: 'Three Signature Deep Cleanse facials, paid for up front at a lower price. Each visit is tailored to your skin that day: professional cleansing, gentle exfoliation, extractions when appropriate, a customized mask, and hydration. A good fit if you want clearer, smoother skin and know you’ll come back.',
    value: 'Regular value $540. You save $30.',
    image: 'package3',
  },
  {
    id: 'signature-skin-maintenance',
    name: 'Signature Skin Maintenance: 6 Sessions',
    price: '$990',
    sessions: 'Six 90-minute treatments',
    desc: 'Six Signature Deep Cleanse facials for skin that needs steady care. Every visit is adjusted to how your skin is doing, to help keep skin clear and hydrated, with skincare guidance along the way. The best value if facials are part of your routine.',
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
    desc: 'Non-invasive LED light added to your facial, for a refreshed, healthy-looking complexion.',
  },
  {
    name: 'Extra Hydrating Mask',
    desc: 'A moisture-rich mask chosen for your skin, for extra comfort when it’s dry or dehydrated.',
  },
  {
    name: 'Extended Facial Massage',
    desc: 'Fifteen more minutes of facial massage to release tension.',
  },
  {
    name: 'Gentle Lip & Eye Care',
    desc: 'A moisturizing treatment for the delicate lip and eye areas that leaves them softer and more comfortable.',
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
  'new-client-signature': { image: 'facialHands', focus: '50% 15%' },
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
