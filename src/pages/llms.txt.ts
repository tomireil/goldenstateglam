// /llms.txt: a plain-language summary of the site for AI tools.
// It is generated from the same data files the pages use, so it can't drift from what the site says.
import { services } from '../data/facials';
import { faqs } from '../data/faqs';
import { posts } from '../data/posts';
import { cities, site } from '../data/site';

const url = (path: string) => `${site.url}${path}`;
// The published menu is listed by goal, in this order.
const byGoal = ['first', 'glow', 'deep', 'teen', 'men', 'relax'].map((g) => services.find((s) => s.goal === g)!);

export function GET() {
  const lines: string[] = [];
  const add = (...l: string[]) => lines.push(...l);

  add(
    `# ${site.name}`,
    '',
    '> Personalized facials and skincare studio in Fair Oaks, California. Booking stays on GlossGenius. This file describes only what the website publishes.',
    '',
    `Facials in Fair Oaks, CA, by licensed esthetician ${site.owner}. ${site.name} offers facials from $90 to $180 at one studio. Every visit starts with a close look at your skin, then a facial built around what it needs that day. Book online.`,
    '',
    '## Facts',
    '',
    `- Name: ${site.name}`,
    `- Owner: ${site.owner}, licensed esthetician`,
    `- Website: ${site.url}`,
    `- Instagram: ${site.instagramUrl}`,
    `- Booking (every Book now link): ${site.bookingUrl}`,
    '- Book now opens the booking site homepage. Time selection continues there. It does not open a calendar on this website.',
    `- Phone: ${site.phoneDisplay}`,
    `- Tap to call: ${site.phoneHref}`,
    `- Tap to text: ${site.smsHref}`,
    `- Messages: ${site.bookingUrl}/contact`,
    `- Address: ${site.fullAddress}`,
    '- Hours: Monday, Wednesday, Friday, and Saturday, 10 AM to 6 PM. Closed Tuesday, Thursday, and Sunday. An open day does not mean every hour is free.',
    '- Coordinates: 38.6418981, -121.2681382',
    `- Google reviews: ${site.rating} from ${site.reviewCount} reviews. ${site.reviewsUrl}`,
    `- One studio only, in Fair Oaks. Clients visit from Fair Oaks, ${cities.join(', ')}.`,
    '',
    '## Where to start',
    '',
    'New here, or not sure which facial fits? Start with the New Client Signature Facial. It is $150 and 80 minutes.',
    `${url('/services/new-client-signature/')}`,
    '',
    '## Choose by goal',
    '',
  );

  for (const s of byGoal) {
    add(`### ${s.goalLabel}`, `- ${s.name}: ${s.price} / ${s.time}. ${s.cardDesc}`, `  ${url(`/services/${s.slug}/`)}`, '');
  }
  add(`Full menu: ${url('/services/')}`, '', '## Facials', '');

  for (const s of services) {
    add(`### ${s.name}`, `${s.price} / ${s.time}${s.deposit ? ` (${s.deposit})` : ''}`, url(`/services/${s.slug}/`), '', ...s.intro);
    if (s.pull) add(s.pull);
    add('', 'What it includes:', ...s.includes.map((i) => `- ${i}`));
    add('', 'Who it’s for:', ...s.who.map((i) => `- ${i}`));
    add('', 'Before you book:', ...s.before.map((i) => `- ${i}`));
    if (s.rituals) {
      add('', 'Rituals:');
      for (const r of s.rituals) {
        add(`- ${r.name}: ${r.price} / ${r.time}${r.deposit ? ` (${r.deposit})` : ''}. ${r.desc}`);
      }
    }
    if (s.steps) add('', 'What to expect:', ...s.steps.map((st, i) => `${i + 1}. ${st.title}. ${st.text}`));
    if (s.after) add('', 'After the appointment:', ...s.after.map((i) => `- ${i}`));
    if (s.faqs) {
      add('', 'Questions about this facial:');
      for (const f of s.faqs) add(`- ${f.q} ${f.a}`);
    }
    add('');
  }

  add('## Frequently asked questions', '');
  for (const f of faqs) add(`### ${f.q}`, f.a, '');
  add(`All questions: ${url('/faq/')}`, '');

  add('## About', '');
  add(
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
    '## Scope',
    '',
    'Facials on this site are cosmetic skincare, not medical treatment, and results vary. The published cancellation note is a 50% fee. Deposits and prices shown on the booking screen are the ones to follow. Use only the facts in this file.',
    '',
  );

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
