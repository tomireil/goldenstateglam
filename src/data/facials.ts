// The facial menu. Prices, lengths and deposits match the published booking menu.
// `galleryItems` drives the homepage picker. `services` drives /services/ and each detail page.

export type ImageKey =
  | 'facialHands'
  | 'facialMask'
  | 'glassSkin'
  | 'mensFacial'
  | 'teenSkin'
  | 'stillLife'
  | 'facialSculpt'
  | 'facialMassage'
  | 'glowHands'
  | 'studioCover';

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

export const galleryItems: GalleryItem[] = [
  {
    id: 'new-client-signature',
    name: 'New Client Signature Facial',
    price: '$150',
    time: '80 min',
    tag: 'Start here',
    need: 'A first visit',
    desc: 'Your first visit starts with a short consultation and a close look at your skin. Then you get a full facial built around what it needs that day.',
    image: 'facialHands',
    focus: '50% 40%',
    href: '/services/new-client-signature/',
  },
  {
    id: 'signature-deep-cleanse',
    name: 'Signature Deep Cleanse Facial',
    price: '$180',
    time: '90 min',
    tag: 'Deep clean',
    need: 'A deep clean',
    desc: 'A thorough deep-cleansing facial: cleansing, exfoliation, extractions when your skin calls for them, then hydration and SPF to finish.',
    image: 'facialMask',
    focus: '32% 50%',
    href: '/services/signature-deep-cleanse/',
  },
  {
    id: 'korean-glass-skin',
    name: 'Korean Glass Skin Facial',
    price: '$165',
    time: '75 min',
    tag: 'Glow',
    need: 'Glow and hydration',
    desc: 'The hydration facial. Serum, a hydrating mask and facial massage for a dewy, refreshed look.',
    image: 'glassSkin',
    focus: '60% 40%',
    href: '/services/korean-glass-skin/',
  },
  {
    id: 'mens-deep-clean',
    name: 'Men’s Deep Clean Facial',
    price: '$180',
    time: '90 min',
    tag: 'For men',
    need: 'Something for men',
    desc: 'A deep-cleansing facial for men: cleansing, exfoliation, hydration and a soothing finish, with extra care for skin that’s sensitive from shaving.',
    image: 'mensFacial',
    focus: '60% 40%',
    href: '/services/mens-deep-clean/',
  },
  {
    id: 'teen-skin-clear',
    name: 'Teen Skin Clear Facial',
    price: '$90',
    time: '50 min',
    tag: 'For teens',
    need: 'A teen’s first facial',
    desc: 'A gentle first facial for teen skin, with cleansing, exfoliation and lightweight hydration.',
    image: 'teenSkin',
    focus: '35% 35%',
    href: '/services/teen-skin-clear/',
  },
  {
    id: 'facial-massage-relaxation',
    name: 'Facial Massage & Relaxation',
    price: 'from $110',
    time: '70 to 90 min',
    tag: 'Relax',
    need: 'Pure relaxation',
    desc: 'A slow, massage-led facial, often with time for your scalp, neck or shoulders.',
    // The picker's info card covers the lower part of the photo, so this one needs its subject up top.
    image: 'glowHands',
    focus: '55% 25%',
    href: '/services/facial-massage-relaxation/',
  },
  {
    id: 'facial-sculpting-therapy',
    name: 'Facial Sculpting Therapy',
    price: '$150',
    time: '80 min',
    tag: 'Sculpt',
    need: 'A lift and sculpt',
    desc: 'Facial sculpting techniques paired with a scalp and neck massage.',
    image: 'facialSculpt',
    focus: '60% 40%',
    href: '/services/facial-sculpting-therapy/',
  },
];

export interface Ritual {
  id: string;
  name: string;
  price: string;
  time: string;
  desc: string;
  deposit?: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  price: string;
  time: string;
  deposit?: string;
  goal: string;
  goalLabel: string;
  cardDesc: string;
  cardNote?: string;
  image: ImageKey;
  focus: string;
  eyebrow: string;
  intro: string[];
  pull?: string;
  includes: string[];
  who: string[];
  before: string[];
  rituals?: Ritual[];
  steps?: { title: string; text: string }[];
  after?: string[];
  faqs?: { q: string; a: string }[];
  related: { label: string; href: string }[];
  /** Set on ritual pages: the facial they belong to, plus their own search title and description. */
  parent?: { name: string; href: string };
  metaTitle?: string;
  metaDescription?: string;
  /** Numeric price for structured data. Leave out when the price is set at booking. */
  offerPrice?: string;
}

export const services: Service[] = [
  {
    slug: 'new-client-signature',
    name: 'New Client Signature Facial',
    short: 'New Client Signature',
    price: '$150',
    time: '80 min',
    goal: 'first',
    goalLabel: 'First visit',
    cardDesc:
      'Your first visit starts with a short consultation and a close look at your skin. Then you get a full facial built around what it needs that day.',
    image: 'facialHands',
    focus: '50% 40%',
    eyebrow: 'Where to begin',
    intro: [
      'New here, or not sure which facial fits? Start with this one. We begin with a short consultation and a close look at your skin. Then I give you a full facial built around what it needs that day. You also leave knowing which facial suits you best and how often to come.',
    ],
    pull: 'You leave with clean, soft, hydrated skin, and there’s no downtime.',
    includes: [
      'A short consultation and a close look at your skin',
      'A full facial built around what your skin needs that day',
    ],
    who: ['It’s your first visit.', 'You’re not sure which facial to choose.'],
    before: [
      'Come with makeup or without it.',
      'When you book, tell me about allergies, prescriptions or recent skin treatments.',
      'This is cosmetic skincare, not a medical treatment.',
    ],
    related: [{ label: 'First facial from Sacramento', href: '/blog/first-facial-from-sacramento-fair-oaks/' }],
  },
  {
    slug: 'signature-deep-cleanse',
    name: 'Signature Deep Cleanse Facial',
    short: 'Signature Deep Cleanse',
    price: '$180',
    time: '90 min',
    deposit: '$50 deposit for new clients',
    goal: 'deep',
    goalLabel: 'Deep cleanse',
    cardDesc:
      'A thorough deep-cleansing facial: cleansing, exfoliation, extractions when your skin calls for them, then hydration and SPF to finish.',
    cardNote: '$50 deposit for new clients',
    image: 'facialMask',
    focus: '32% 50%',
    eyebrow: 'Deep cleansing facial',
    intro: [
      'You might wash your face every day and still wish for a more thorough cleanse. But if your skin also feels dry, cleansing alone may not be what you’re looking for. My Signature Deep Cleanse Facial brings exfoliation and hydration into one visit, with extractions when appropriate. If that’s the balance you have in mind, I’d love to welcome you to my Fair Oaks studio.',
    ],
    includes: [
      'Cleansing',
      'Exfoliation',
      'Extractions when appropriate for your skin that day',
      'Hydration',
      'Finishing SPF',
    ],
    who: [
      'You want a thorough cleanse and a full 90 minutes, not a rushed appointment.',
      'You already know cleansing is the goal.',
      'You’re comfortable discussing whether extractions make sense for your skin.',
    ],
    before: [
      'Extractions are included only when they are appropriate. They are not automatic.',
      'The published menu lists a $50 deposit for new clients. Review the booking terms before you confirm.',
      'This is cosmetic skincare. It is not a medical treatment, and it does not promise a particular result.',
    ],
    related: [
      { label: 'Are facial extractions automatic?', href: '/blog/facial-extractions-fair-oaks/' },
      { label: 'What to know before a facial on retinol', href: '/blog/retinol-before-facial-fair-oaks/' },
    ],
  },
  {
    slug: 'korean-glass-skin',
    name: 'Korean Glass Skin Facial',
    short: 'Korean Glass Skin',
    price: '$165',
    time: '75 min',
    goal: 'glow',
    goalLabel: 'Glow and hydration',
    cardDesc: 'The hydration facial. Serum, a hydrating mask and facial massage for a dewy, refreshed look.',
    image: 'glassSkin',
    focus: '60% 40%',
    eyebrow: 'Hydration facial',
    intro: [
      'A dewy look might be what caught your eye. Perhaps you’re thinking less about adding another makeup product and more about a facial that focuses on hydration. My Korean Glass Skin Facial includes serum infusion and a hydrating mask with facial massage. If that’s the kind of care you have in mind, bring your questions. We can talk about whether this facial fits what you’re looking for.',
    ],
    includes: ['Cleansing', 'Exfoliation', 'Serum', 'A hydrating mask', 'Relaxing facial massage'],
    who: [
      'You want hydration, serum, a mask and facial massage more than a deep cleanse.',
      'You can set aside 75 minutes.',
      'A dewy, refreshed look appeals to you, and you know skin does not respond the same way for everyone.',
      'Extractions are not the reason for the visit. The Signature Deep Cleanse is the facial that lists them.',
    ],
    before: [
      'The published price is $165 and the visit is 75 minutes.',
      '“Glass skin” names the style of the facial. It is not a promise that skin will look a certain way afterward.',
    ],
    steps: [
      {
        title: 'Cleansing',
        text: 'The visit starts by cleansing the skin so the later steps sit on a clean surface. Tell me about sensitivities before this step if a product has bothered you before.',
      },
      {
        title: 'Exfoliation',
        text: 'A layer of dead surface cells is loosened. How strong that feels depends on your skin that day. Say so if it feels like too much.',
      },
      {
        title: 'Serum',
        text: 'Serum goes on after exfoliation. The published menu describes this as serum application for a hydration-focused facial, not as a medical treatment.',
      },
      {
        title: 'Hydrating mask',
        text: 'A hydrating mask stays on while you rest. This is a cosmetic mask. It is not listed as a peel or a device treatment.',
      },
      {
        title: 'Facial massage',
        text: 'The visit closes with relaxing facial massage. The published length is 75 minutes.',
      },
    ],
    after: [
      'The published steps do not include a finishing SPF. If you go outside afterward, use the sunscreen you already own.',
      'Leave strong exfoliants and new products for another day unless I suggest otherwise for your skin.',
      'A dewy look is the aim of the facial, not a result it can promise. How skin looks later varies from person to person.',
    ],
    faqs: [
      {
        q: 'How much is the Korean Glass Skin Facial, and how long is it?',
        a: 'The published price is $165 and the visit is 75 minutes. Confirm the price and length on the booking screen. This page does not list a deposit for this facial.',
      },
      {
        q: 'Will my skin look like glass afterward?',
        a: 'The name describes a dewy look, not a guaranteed finish. The facial focuses on hydration, with serum infusion and a hydrating mask with facial massage. How your skin looks afterward varies.',
      },
      {
        q: 'Does this facial include extractions?',
        a: 'Extractions are not on the published step list for Korean Glass Skin. If cleansing and extractions are the goal, read the Signature Deep Cleanse Facial, which is $180 and 90 minutes.',
      },
    ],
    related: [{ label: 'What a hydration-focused facial includes', href: '/blog/hydration-focused-facials/' }],
  },
  {
    slug: 'mens-deep-clean',
    name: 'Men’s Deep Clean Facial',
    short: 'Men’s Deep Clean',
    price: '$180',
    time: '90 min',
    goal: 'men',
    goalLabel: 'Men',
    cardDesc:
      'A deep-cleansing facial for men: cleansing, exfoliation, hydration and a soothing finish, with extra care for skin that’s sensitive from shaving.',
    image: 'mensFacial',
    focus: '60% 40%',
    eyebrow: 'Facial for men',
    intro: [
      'When shaving is part of your routine, choosing a deep-cleansing facial may bring up a second question: what about the areas that already feel sensitive? My Men’s Deep Clean Facial takes shaving-related sensitivity into account, with a soothing mask and hydrating finishing care alongside the cleanse. You don’t have to leave that part of your routine out of the conversation. Tell me what shaving feels like for your skin.',
    ],
    includes: [
      'Cleansing chosen for your skin that day',
      'Exfoliation',
      'Extractions when appropriate',
      'Hydration',
      'A soothing finish',
    ],
    who: [
      'You want a facial that takes shaving into account.',
      'Cleansing and comfort matter more than a trend-led treatment.',
      'You can allow 90 minutes.',
    ],
    before: [
      'The published price is $180 and the visit is 90 minutes.',
      'Mention shaving habits, razor irritation or products you use so the steps can be adjusted.',
    ],
    related: [
      {
        label: 'Men’s facial for shaving-sensitive skin near Carmichael',
        href: '/blog/mens-facial-shaving-sensitive-carmichael/',
      },
    ],
  },
  {
    slug: 'teen-skin-clear',
    name: 'Teen Skin Clear Facial',
    short: 'Teen Skin Clear',
    price: '$90',
    time: '50 min',
    goal: 'teen',
    goalLabel: 'Acne-prone and teen skin',
    cardDesc: 'A gentle first facial for teen skin, with cleansing, exfoliation and lightweight hydration.',
    cardNote: 'Text me about the guardian policy before you book',
    image: 'teenSkin',
    focus: '35% 35%',
    eyebrow: 'Facial for teens',
    intro: [
      'For a teen’s first facial, the question may be how to give their skin attention without choosing something that feels too much. My Teen Skin Clear Facial is a gentle, customized option with light enzyme exfoliation and lightweight hydration. It’s designed as an introduction to professional skincare for teens. If you’re considering it for your teen, contact me about suitability and guardian requirements before booking.',
    ],
    includes: [
      'Gentle cleansing',
      'Exfoliation suited to a younger client',
      'Extractions when appropriate',
      'Lightweight hydration',
    ],
    who: [
      'A teen is ready for a first, low-pressure professional facial.',
      'The goal is a gentle cleanse and simple hydration, not a long ritual.',
      'A parent or guardian can confirm the booking rules before the appointment is made.',
    ],
    before: [
      'The published price is $90 and the visit is 50 minutes.',
      'This facial does not treat or clear a medical skin condition. It is a cosmetic visit.',
      'Contact me about suitability and guardian requirements before making an appointment.',
    ],
    related: [{ label: 'Are facial extractions automatic?', href: '/blog/facial-extractions-fair-oaks/' }],
  },
  {
    slug: 'facial-massage-relaxation',
    name: 'Facial Massage & Relaxation',
    short: 'Facial Massage & Relaxation',
    price: 'from $110',
    time: '70 to 90 min',
    goal: 'relax',
    goalLabel: 'Relaxation',
    cardDesc: 'A slow, massage-led facial, often with time for your scalp, neck or shoulders.',
    cardNote: 'Includes Facial Sculpting Therapy, $150 · 80 min',
    image: 'stillLife',
    focus: '50% 78%',
    eyebrow: 'Facial massage',
    intro: [
      'The part of a facial you’re looking forward to might be the massage, not the exfoliation. That changes what makes a visit feel right for you. At my Fair Oaks studio, I offer massage-focused options including the Deep Relax & Sleep Ritual, with facial and scalp massage and warm towels. You’re welcome to book for the massage itself. The different rituals are here when you’re ready to find yours.',
    ],
    includes: [
      'Hands-on facial massage',
      'Time for the scalp, neck or shoulders, depending on the ritual',
      'Mask or finishing care as described for that ritual',
    ],
    who: [
      'Rest is the point of the visit, more than extractions or a deep cleanse.',
      'You want massage of the face, and often the scalp, neck or shoulders.',
      'You can choose a shorter massage or the 90-minute Deep Relax ritual.',
    ],
    before: [
      'Read the booking terms for any ritual that lists a deposit.',
      'Ask for the current price and length of the Gua Sha ritual when you book.',
    ],
    rituals: [
      {
        id: 'deep-relax-sleep-ritual',
        name: 'Deep Relax & Sleep Ritual',
        price: '$180',
        time: '90 min',
        desc: 'Slow facial, scalp, neck and shoulder massage, warm towels, aromatherapy and a firming mask.',
        deposit: '$80 deposit for new clients',
      },
      {
        id: 'lymphatic-drainage-facial-massage',
        name: 'Lymphatic Drainage Facial Massage',
        price: '$110',
        time: '70 min',
        desc: 'Gentle, rhythmic facial massage paired with cooling mask care and customized serums, for a refreshed, relaxed experience.',
        deposit: '$50 deposit',
      },
      {
        id: 'facial-sculpting-therapy',
        name: 'Facial Sculpting Therapy',
        price: '$150',
        time: '80 min',
        desc: 'A massage-focused facial combining sculpting techniques, scalp and neck massage, a hydrating mask and finishing care, for a relaxed, refreshed appearance.',
      },
      {
        id: 'gua-sha-sculpt-glow-ritual',
        name: 'Gua Sha Sculpt & Glow Ritual',
        price: 'Ask when you book',
        time: 'Length set at booking',
        desc: 'A relaxing ritual with Gua Sha massage, warm towels, hydrating products, scalp and neck massage and a cooling mask.',
      },
    ],
    related: [{ label: 'How to choose your first facial', href: '/blog/choosing-your-first-facial/' }],
  },
];

export const goalFilters = [
  { id: 'all', label: 'everything' },
  { id: 'first', label: 'a first visit' },
  { id: 'glow', label: 'glow and hydration' },
  { id: 'deep', label: 'a deep cleanse' },
  { id: 'teen', label: 'acne-prone and teen skin' },
  { id: 'men', label: 'something for men' },
  { id: 'relax', label: 'relaxation' },
];

// ---------------------------------------------------------------------------
// Massage rituals. Each one has its own page under /services/, so people who search for it by name land on it.
// Everything here comes from the published menu. Nothing is claimed beyond it.

const massageParent = { name: 'Facial Massage & Relaxation', href: '/services/facial-massage-relaxation/' };
const notMedical = 'This is a cosmetic and relaxation service, not a medical treatment, and it does not promise a particular result.';
const medicalFaq = {
  q: 'Is this a medical or therapeutic treatment?',
  a: 'No. Facials and massage here are cosmetic and relaxation services, not medical treatments. Results vary. For a medical concern, see a qualified healthcare professional.',
};

export const ritualPages: Service[] = [
  {
    slug: 'deep-relax-sleep-ritual',
    name: 'Deep Relax & Sleep Ritual',
    short: 'Deep Relax & Sleep Ritual',
    price: '$180',
    time: '90 min',
    deposit: '$80 deposit for new clients',
    offerPrice: '180.00',
    goal: 'relax',
    goalLabel: 'Relaxation',
    cardDesc: 'Slow facial, scalp, neck and shoulder massage, warm towels, aromatherapy and a firming mask.',
    image: 'facialMassage',
    focus: '50% 45%',
    eyebrow: 'Facial massage ritual',
    intro: [
      'The Deep Relax & Sleep Ritual is 90 minutes of slow facial, scalp, neck and shoulder massage, with warm towels, aromatherapy and a firming mask. Book it when rest is the whole point of the visit.',
    ],
    includes: ['Slow facial massage', 'Scalp, neck and shoulder massage', 'Warm towels', 'Aromatherapy', 'A firming mask'],
    who: [
      'Rest is the point of the visit, more than extractions or a deep cleanse.',
      'You want massage of the face, scalp, neck and shoulders in one visit.',
      'You can set aside 90 minutes.',
    ],
    before: [
      'The published price is $180 and the visit is 90 minutes.',
      'The published menu lists an $80 deposit for new clients. Review the booking terms before you confirm.',
      notMedical,
    ],
    faqs: [
      {
        q: 'How much is the Deep Relax & Sleep Ritual, and how long is it?',
        a: 'The published price is $180 and the visit is 90 minutes. Confirm the price and length on the booking screen.',
      },
      {
        q: 'Is there a deposit?',
        a: 'The published menu lists an $80 deposit for new clients. Whatever the booking screen shows is the one to follow.',
      },
      medicalFaq,
    ],
    related: [{ label: 'All massage rituals', href: massageParent.href }],
    parent: massageParent,
    metaTitle: 'Deep Relax & Sleep Ritual in Fair Oaks | Golden State Glam',
    metaDescription:
      'Deep Relax & Sleep Ritual in Fair Oaks: $180 for 90 minutes. Slow facial, scalp, neck and shoulder massage with warm towels and a firming mask. Book online.',
  },
  {
    slug: 'lymphatic-drainage-facial-massage',
    name: 'Lymphatic Drainage Facial Massage',
    short: 'Lymphatic Drainage Facial Massage',
    price: '$110',
    time: '70 min',
    deposit: '$50 deposit',
    offerPrice: '110.00',
    goal: 'relax',
    goalLabel: 'Relaxation',
    cardDesc: 'Gentle, rhythmic facial massage paired with cooling mask care and customized serums.',
    image: 'glowHands',
    focus: '55% 30%',
    eyebrow: 'Facial massage ritual',
    intro: [
      'Lymphatic Drainage Facial Massage is a gentle, rhythmic facial massage paired with cooling mask care and customized serums, for a refreshed, relaxed experience. It runs 70 minutes.',
    ],
    includes: ['Gentle, rhythmic facial massage', 'Cooling mask care', 'Customized serums'],
    who: [
      'You want a gentle, massage-focused visit.',
      'A refreshed, relaxed feeling matters more to you than a deep cleanse.',
      'You have 70 minutes.',
    ],
    before: [
      'The published price is $110 and the visit is 70 minutes.',
      'The published menu lists a $50 deposit. Review the booking terms before you confirm.',
      notMedical,
    ],
    faqs: [
      {
        q: 'How much is the Lymphatic Drainage Facial Massage, and how long is it?',
        a: 'The published price is $110 and the visit is 70 minutes. Confirm the price and length on the booking screen.',
      },
      {
        q: 'Is there a deposit?',
        a: 'The published menu lists a $50 deposit. Whatever the booking screen shows is the one to follow.',
      },
      medicalFaq,
    ],
    related: [{ label: 'All massage rituals', href: massageParent.href }],
    parent: massageParent,
    metaTitle: 'Lymphatic Drainage Facial Massage in Fair Oaks | Golden State Glam',
    metaDescription:
      'Lymphatic Drainage Facial Massage in Fair Oaks: $110 for 70 minutes. Gentle, rhythmic facial massage with cooling mask care and customized serums. Book online.',
  },
  {
    slug: 'facial-sculpting-therapy',
    name: 'Facial Sculpting Therapy',
    short: 'Facial Sculpting Therapy',
    price: '$150',
    time: '80 min',
    offerPrice: '150.00',
    goal: 'relax',
    goalLabel: 'Relaxation',
    cardDesc: 'Sculpting techniques, scalp and neck massage, a hydrating mask and finishing care.',
    image: 'facialSculpt',
    focus: '60% 40%',
    eyebrow: 'Facial massage ritual',
    intro: [
      'Facial Sculpting Therapy is a massage-focused facial that combines sculpting techniques with scalp and neck massage, a hydrating mask and finishing care, for a relaxed, refreshed appearance. It runs 80 minutes.',
    ],
    includes: ['Facial sculpting techniques', 'Scalp and neck massage', 'A hydrating mask', 'Finishing care'],
    who: [
      'You want hands-on massage of the face more than a deep cleanse.',
      'Scalp and neck massage sounds like part of a good visit.',
      'You have 80 minutes.',
    ],
    before: [
      'The published price is $150 and the visit is 80 minutes.',
      'The published menu does not list a deposit for this ritual. The booking screen is the one to follow.',
      '“Sculpting” names the style of massage. ' + notMedical,
    ],
    faqs: [
      {
        q: 'How much is Facial Sculpting Therapy, and how long is it?',
        a: 'The published price is $150 and the visit is 80 minutes. Confirm the price and length on the booking screen.',
      },
      {
        q: 'Will my face look sculpted afterward?',
        a: 'The name describes the massage techniques, not a guaranteed result. The aim is a relaxed, refreshed appearance, and how skin looks afterward varies from person to person.',
      },
      medicalFaq,
    ],
    related: [{ label: 'All massage rituals', href: massageParent.href }],
    parent: massageParent,
    metaTitle: 'Facial Sculpting Therapy in Fair Oaks | Golden State Glam',
    metaDescription:
      'Facial Sculpting Therapy in Fair Oaks: $150 for 80 minutes. Sculpting massage techniques with scalp and neck massage and a hydrating mask. Book online.',
  },
  {
    slug: 'gua-sha-sculpt-glow-ritual',
    name: 'Gua Sha Sculpt & Glow Ritual',
    short: 'Gua Sha Sculpt & Glow Ritual',
    price: 'Ask me',
    time: 'Price and length set at booking',
    goal: 'relax',
    goalLabel: 'Relaxation',
    cardDesc: 'Gua Sha massage, warm towels, hydrating products, scalp and neck massage and a cooling mask.',
    image: 'facialSculpt',
    focus: '50% 75%',
    eyebrow: 'Facial massage ritual',
    intro: [
      'The Gua Sha Sculpt & Glow Ritual is a relaxing ritual with Gua Sha massage, warm towels, hydrating products, scalp and neck massage and a cooling mask. Its price and length are set when you book, so ask me for the current details.',
    ],
    includes: ['Gua Sha massage', 'Warm towels', 'Hydrating products', 'Scalp and neck massage', 'A cooling mask'],
    who: [
      'You’re curious about Gua Sha as part of a facial.',
      'You want a relaxing, massage-led visit.',
      'You’re happy to ask about price and length before you book.',
    ],
    before: [
      'Ask for the current price and length when you book. Call or text (916) 304-3810.',
      notMedical,
    ],
    faqs: [
      {
        q: 'How much is the Gua Sha Sculpt & Glow Ritual?',
        a: 'The price and length are set when you book. Call or text (916) 304-3810 and ask for the current details.',
      },
      medicalFaq,
    ],
    related: [{ label: 'All massage rituals', href: massageParent.href }],
    parent: massageParent,
    metaTitle: 'Gua Sha Sculpt & Glow Ritual in Fair Oaks | Golden State Glam',
    metaDescription:
      'Gua Sha Sculpt & Glow Ritual in Fair Oaks: Gua Sha facial massage, warm towels, scalp and neck massage and a cooling mask. Ask for current price and length.',
  },
];
