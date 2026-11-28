// Questions shown on /faq/ and (the first three) on the homepage.
// Prices, lengths and deposits are read from facials.ts, which mirrors the GlossGenius booking menu,
// so these answers can't drift from the menu. The FAQ structured data is generated from this file too.
import { priceFrom, priceTo, serviceBySlug, services } from './facials';

export interface Faq {
  q: string;
  a: string;
}

const s = serviceBySlug;
const first = s('new-client-signature');
const cleanse = s('signature-deep-cleanse');
const glass = s('korean-glass-skin');
const clear = s('clear-skin-facial');
const mens = s('mens-deep-clean');
const minutes = (slug: string) => s(slug).time.replace(' min', ' minutes');
const priced = (...slugs: string[]) => slugs.map((x) => `The ${s(x).name} is ${s(x).price}.`).join(' ');

export const homeFaqs: Faq[] = [
  {
    q: 'Which facial should I start with?',
    a: `Start with the ${first.name}. It’s ${first.price} and ${minutes(first.slug)}: a short consultation, a close look at your skin, then a full facial built around what your skin needs that day.`,
  },
  {
    q: 'How do booking and deposits work?',
    a: `Choose a service, then tap Book now. It opens my booking site, where you pick a time. Most services list a deposit, often for new clients only. The ${first.name} lists a ${first.deposit}. Whatever the booking screen shows is the one to follow. You can also call or text (916) 304-3810.`,
  },
  {
    q: 'What should I do before my facial?',
    a: 'Come with or without makeup. When you book, tell me about any allergies, prescriptions, or recent skin treatments. Facials here are cosmetic services, not medical treatments.',
  },
];

export const faqs: Faq[] = [
  {
    q: 'Which facial should I choose for my first visit?',
    a: `Start with the ${first.name}. It’s ${first.price} and ${minutes(first.slug)}: a short consultation, a close look at your skin, then a full facial built around what your skin needs that day. You leave knowing which facial fits you best and how often to come.`,
  },
  {
    q: 'How do I book a facial?',
    a: 'Choose a service, then tap Book now. It opens my booking site, where you pick a time. You can also call or text (916) 304-3810. Not sure which one to choose? Text me before you book.',
  },
  {
    q: 'What does a facial cost?',
    a: `${priced(first.slug, cleanse.slug, clear.slug, glass.slug, mens.slug)} Across the full menu, single services run from ${priceFrom} to ${priceTo}, and each one’s page shows its price. Check the booking screen for the current price before you reserve.`,
  },
  {
    q: 'How long will my appointment take?',
    a: `It depends on the service. The ${first.name} is ${minutes(first.slug)}, the ${cleanse.name} is ${minutes(cleanse.slug)}, and the ${glass.name} and ${clear.name} are ${minutes(glass.slug)}. Each service page shows its length.`,
  },
  {
    q: 'Is a deposit required?',
    a: `For most services, yes. The booking menu lists a $50 deposit on most facials and $80 on some longer or more advanced treatments, in many cases for new clients only. The ${first.name} lists a ${first.deposit}. Each service page shows its deposit, and whatever the booking screen shows is the one to follow.`,
  },
  {
    q: 'What is your cancellation policy?',
    a: 'My published policy includes a 50% cancellation fee. If you need to change your visit, tell me as soon as you can, and review the booking terms before you reserve.',
  },
  {
    q: 'Do you offer a facial for men, and one for breakouts?',
    a: `Yes. The ${mens.name} is ${mens.price} and ${minutes(mens.slug)}, with extra attention to the beard and shaving areas. For breakouts and congestion there’s the ${clear.name}, at ${clear.price} and ${minutes(clear.slug)}.`,
  },
  {
    q: 'Do you offer packages?',
    a: 'Yes. Signature Skin Refresh is three Signature Deep Cleanse Facials for $510, and Signature Skin Maintenance is six for $990. Package terms, expiration and cancellation rules are provided before purchase.',
  },
  {
    q: 'What should I share before a facial?',
    a: 'Tell me about any allergies, prescriptions, recent skin treatments and the skincare products you use, so we can talk through what suits you. Services here are cosmetic, not medical treatments. Results vary. For a medical skin concern, see a qualified healthcare professional.',
  },
  {
    q: 'Where is Golden State Glam?',
    a: 'My studio is at 7996 California Ave, Suite A, Fair Oaks, CA 95628. Every appointment happens here. Clients visit from Folsom, El Dorado Hills, Carmichael, Orangevale, Citrus Heights and Sacramento.',
  },
  {
    q: 'What are your business hours?',
    a: 'Monday, Wednesday, Friday and Saturday, 10 AM to 6 PM. Closed Tuesday, Thursday and Sunday. An open day doesn’t mean every hour is free, so check online booking for current times.',
  },
];

// Number of services on the menu, for copy that mentions it.
export const serviceCount = services.length;

export function faqJsonLd(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
