// Questions shown on /faq/ and (the first three) on the homepage.
// The FAQ structured data is generated from this file, so the page and the data always match.

export interface Faq {
  q: string;
  a: string;
}

export const homeFaqs: Faq[] = [
  {
    q: 'Which facial should I start with?',
    a: 'Start with the New Client Signature Facial. It’s $150 and 80 minutes: a short consultation, a close look at your skin, then a full facial built around what your skin needs that day.',
  },
  {
    q: 'How do booking and deposits work?',
    a: 'Choose a facial, then tap Book now. It opens my booking site, where you pick a time. Some facials list a deposit, such as $50 for new clients on the Signature Deep Cleanse. Whatever the booking screen shows is the one to follow. You can also call or text (916) 304-3810.',
  },
  {
    q: 'What should I do before my facial?',
    a: 'Tell me about sensitivities, allergies, recent procedures and the skincare products you use, so we can talk through what suits you. Facials here are cosmetic and relaxation services, not medical treatments.',
  },
];

export const faqs: Faq[] = [
  {
    q: 'Which facial should I choose for my first visit?',
    a: 'Start with the New Client Signature Facial. It’s $150 and 80 minutes: a short consultation, a close look at your skin, then a full facial built around what your skin needs that day. Already know you want a cleanse, hydration or massage? Read about that facial next.',
  },
  {
    q: 'How do I book a facial?',
    a: 'Choose a facial, then tap Book now. It opens my booking site, where you pick a time. You can also call or text (916) 304-3810. Not sure which one to choose? Text me before you book.',
  },
  {
    q: 'What does a facial cost?',
    a: 'The New Client Signature Facial is $150. The Signature Deep Cleanse Facial is $180. The Korean Glass Skin Facial is $165. The Teen Skin Clear Facial is $90. Facial massage visits start at $110. Check the booking screen for the current price before you reserve.',
  },
  {
    q: 'How long will my appointment take?',
    a: 'It depends on the facial. The New Client Signature is 80 minutes, the Signature Deep Cleanse is 90, the Korean Glass Skin is 75 and the Teen Skin Clear is 50. Facial massage visits run 70 to 90 minutes.',
  },
  {
    q: 'Is a deposit required?',
    a: 'For some facials, yes. The Signature Deep Cleanse Facial lists a $50 deposit for new clients. The Lymphatic Drainage Facial Massage lists a $50 deposit. The Deep Relax & Sleep Ritual lists an $80 deposit for new clients. Whatever the booking screen shows is the one to follow.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'My published policy includes a 50% cancellation fee. If you need to change your visit, tell me as soon as you can, and review the booking terms before you reserve.',
  },
  {
    q: 'Do you offer facials for men and teens?',
    a: 'Yes. The menu includes a Men’s Deep Clean Facial and a Teen Skin Clear Facial. For teens, text me about booking and guardian requirements first.',
  },
  {
    q: 'What should I share before a facial?',
    a: 'Tell me about sensitivities, allergies, recent procedures and the skincare products you use, so we can talk through what suits you. Facials and massage here are cosmetic and relaxation services, not medical treatments. Results vary. For a medical skin concern, see a qualified healthcare professional.',
  },
  {
    q: 'Where is Golden State Glam?',
    a: 'My studio is at 7996 California Ave, Suite A, Fair Oaks, CA 95628. Every appointment happens here. Clients visit from Folsom, El Dorado Hills, Carmichael and Sacramento.',
  },
  {
    q: 'What are your business hours?',
    a: 'Monday, Wednesday, Friday and Saturday, 10 AM to 6 PM. Closed Tuesday, Thursday and Sunday. An open day doesn’t mean every hour is free, so check online booking for current times.',
  },
];

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
