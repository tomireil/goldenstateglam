// /llms.txt: a plain-language summary of the site for AI tools.
// It is generated from the same data files the pages use, so it can't drift from what the site says.
import {
  categories,
  packageAddOns,
  packageDeposit,
  packages,
  packageTerms,
  priceFrom,
  priceTo,
  services,
} from '../data/facials';
import { faqs } from '../data/faqs';
import { posts } from '../data/posts';
import { cancellation, cities, parking, site } from '../data/site';

const url = (path: string) => `${site.url}${path}`;

export function GET() {
  const lines: string[] = [];
  const add = (...l: string[]) => lines.push(...l);
  const first = services.find((s) => s.slug === 'new-client-signature')!;

  add(
    `# ${site.name}`,
    '',
    '> Personalized facials and skincare studio in Fair Oaks, California. Booking stays on GlossGenius. This file describes only what the website and the booking menu publish.',
    '',
    `Last updated: ${new Date().toISOString().slice(0, 10)}.`,
    '',
    `Facials in Fair Oaks, CA, by licensed esthetician ${site.owner}. ${site.name} offers ${services.length} services from ${priceFrom} to ${priceTo}, plus two facial packages, at one studio. Every first visit starts with a close look at your skin, then a facial built around what it needs that day. Book online.`,
    '',
    '## Facts',
    '',
    `- Name: ${site.name}`,
    `- Owner: ${site.owner}, licensed esthetician`,
    `- Website: ${site.url}`,
    `- Instagram: ${site.instagramUrl}`,
    `- Booking (every Book now link): ${site.bookingUrl}`,
    '- Book now opens the booking site. Time selection continues there. It does not open a calendar on this website.',
    `- Phone: ${site.phoneDisplay}`,
    `- Tap to call: ${site.phoneHref}`,
    `- Tap to text: ${site.smsHref}`,
    `- Address: ${site.fullAddress}`,
    '- Hours: Monday, Wednesday, Friday, and Saturday, 10 AM to 6 PM. Closed Tuesday, Thursday, and Sunday. An open day does not mean every hour is free.',
    '- Coordinates: 38.6418981, -121.2681382',
    `- Parking: ${parking}`,
    `- Cancellation: ${cancellation}`,
    `- Google reviews: ${site.rating} from ${site.reviewCount} reviews. ${site.reviewsUrl}`,
    `- One studio only, in Fair Oaks. Clients visit from Fair Oaks, ${cities.join(', ')}.`,
    `- Hydrodermabrasion (a water-based exfoliation, the same kind of treatment as a HydraFacial) is done with a Zemits machine and is part of every Signature Deep Cleanse. The studio does not use the HydraFacial brand. ${site.url}/hydrodermabrasion/`,
    `- Not sure which facial fits a skin concern? ${site.url}/which-facial/`,
    '',
    '## Where to start',
    '',
    `New here, or not sure which facial fits? Start with the ${first.name}. It is ${first.price} and ${first.time}.`,
    url(`/services/${first.slug}/`),
    '',
    '## Menu at a glance',
    '',
  );

  for (const c of categories) {
    add(`### ${c.name}`);
    for (const s of services.filter((x) => x.category === c.id)) {
      add(`- ${s.name}: ${s.price} / ${s.time}${s.deposit ? ` (${s.deposit})` : ''}. ${s.lead}`, `  ${url(`/services/${s.slug}/`)}`);
    }
    add('');
  }
  add('### Packages');
  for (const p of packages) add(`- ${p.name}: ${p.price}. ${p.sessions}. ${p.value}`);
  add(`  ${url('/services/#packages')}`, '', `Full menu: ${url('/services/')}`, '');

  add('## Services in detail', '');
  for (const s of services) {
    add(`### ${s.name}`, `${s.price} / ${s.time}${s.deposit ? ` (${s.deposit})` : ' (no deposit listed)'}`, url(`/services/${s.slug}/`), '', s.lead, ...(s.intro ?? []));
    if (s.bestFor) add(`Best for: ${s.bestFor}.`);
    add('', 'What it includes:', ...s.includes.map((i) => `- ${i}`));
    add('', 'What to expect:', ...s.expect.map((i) => `- ${i}`));
    add('', 'Good to know:', ...s.goodToKnow.map((i) => `- ${i}`));
    if (s.options) {
      add('', 'Options chosen at booking:');
      for (const o of s.options)
        add(`- ${o.name}${o.price ? `: ${o.price}` : ''}.${o.desc ? ` ${o.desc}` : ''}${o.bestFor ? ` Best for: ${o.bestFor}.` : ''}`);
    }
    add('');
  }

  add('## Packages in detail', '');
  for (const p of packages) add(`### ${p.name}`, `${p.price}. ${p.sessions}. ${packageDeposit}.`, p.desc, p.value, '');
  add('Package add-ons:', ...packageAddOns.map((a) => `- ${a.name}: ${a.desc}`), '', packageTerms, '');

  add('## Frequently asked questions', '');
  for (const f of faqs) add(`### ${f.q}`, f.a, '');
  add(`All questions: ${url('/faq/')}`, '');

  add(
    '## About',
    '',
    `${site.owner} is the owner of ${site.name} and a licensed esthetician. You don’t need to know a treatment name before you ask her about it. Tell her how your skin feels and start there.`,
    url('/about/'),
    '',
    '## Contact',
    '',
    `Book online at ${site.bookingUrl}, or call or text ${site.phoneDisplay}. The studio is at ${site.fullAddress}.`,
    url('/contact/'),
    '',
    '## Journal',
    '',
    ...posts.map((p) => `- ${p.title}: ${url(`/blog/${p.slug}/`)}\n  ${p.description}`),
    '',
    'Journal posts are dated notes. Where a post and the menu above disagree on a price, length or step, the menu above is current.',
    '',
    '## Scope',
    '',
    'Services on this site are cosmetic skincare, not medical treatment, and results vary. Deposits and prices shown on the booking screen are the ones to follow.',
    '',
  );

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
