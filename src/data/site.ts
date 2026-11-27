// Business facts used across the site. Change them here, not in the pages.

export const site = {
  name: 'Golden State Glam',
  url: 'https://goldenstateglam.com',
  owner: 'Veronika Reil',
  ownerTitle: 'Licensed esthetician',
  bookingUrl: 'https://goldenstateglam.glossgenius.com',
  phoneDisplay: '(916) 304-3810',
  phoneHref: 'tel:+19163043810',
  smsHref: 'sms:+19163043810',
  instagramUrl: 'https://www.instagram.com/goldenstateglam_',
  instagramHandle: '@goldenstateglam_',
  reviewsUrl: 'https://share.google/g26GFPJJW9PTZ9sUn',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=7996%20California%20Ave%2C%20Suite%20A%2C%20Fair%20Oaks%2C%20CA%2095628',
  osmUrl:
    'https://www.openstreetmap.org/?mlat=38.6418981&mlon=-121.2681382#map=17/38.6418981/-121.2681382',
  osmEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=-121.2781382%2C38.6358981%2C-121.25813819999999%2C38.6478981&layer=mapnik&marker=38.6418981%2C-121.2681382',
  street: '7996 California Ave, Suite A',
  cityLine: 'Fair Oaks, CA 95628',
  fullAddress: '7996 California Ave, Suite A, Fair Oaks, CA 95628',
  hoursShort: 'Mon, Wed, Fri and Sat, 10 AM to 6 PM',
  hoursLong: 'Monday, Wednesday, Friday and Saturday, 10 AM to 6 PM',
  rating: '5.0',
  reviewCount: 18,
};

export const nav = [
  { label: 'Facials', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Journal', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const hours = [
  { day: 'Monday', time: '10 AM to 6 PM' },
  { day: 'Tuesday', time: 'Closed' },
  { day: 'Wednesday', time: '10 AM to 6 PM' },
  { day: 'Thursday', time: 'Closed' },
  { day: 'Friday', time: '10 AM to 6 PM' },
  { day: 'Saturday', time: '10 AM to 6 PM' },
  { day: 'Sunday', time: 'Closed' },
];

// Surrounding towns clients visit from. Shown low on the page, on purpose.
export const cities = ['Folsom', 'El Dorado Hills', 'Carmichael', 'Sacramento', 'Orangevale', 'Citrus Heights'];

// Real Google reviews, quoted as published on the live site.
export const reviews = [
  {
    name: "Karen O'Connor",
    text: 'She genuinely cares about me and takes the time to understand my skin concerns.',
  },
  {
    name: 'Daniel M',
    text: 'The location and studio is very cozy and clean. Veronika is very professional and knowledgeable. I would highly recommend her services!',
  },
  {
    name: 'Robert Viera',
    text: 'Veronika was very attentive to my service, which left me very pleased. … Very professional, great environment. I highly recommend.',
  },
];

export const visitSteps = [
  { label: 'Consult', text: 'We start with a short consultation and a close look at your skin.' },
  { label: 'Cleanse', text: 'Cleansing and exfoliation, with extractions only when they suit your skin.' },
  { label: 'Treatment', text: 'Then a full facial built around what your skin needs that day.' },
  { label: 'Finish', text: 'We finish with hydration and SPF.' },
];
