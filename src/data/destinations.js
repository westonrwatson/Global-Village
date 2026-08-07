import thailandImage from '../assets/Thailand.png'
import japanImage from '../assets/Japan.png'
import usImage from '../assets/US.png'
import australiaImage from '../assets/Australia.png'
import portugalImage from '../assets/Portugal.png'
import spainImage from '../assets/Spain.png'
import brazilImage from '../assets/Brazil.png'
import italyImage from '../assets/Italy.png'

export const destinations = [
  {
    slug: 'thailand',
    name: 'Thailand',
    image: thailandImage,
    region: 'Southeast Asia',
    style: 'Island + city',
    bestFor: 'First-timers',
    blurb: 'Island hops, night markets, and hostel common rooms that feel like reunions. Thailand is where many WanderPass journeys begin.',
    vibe: 'Warm, social, easy to stay longer than planned.',
  },
  {
    slug: 'japan',
    name: 'Japan',
    image: japanImage,
    region: 'East Asia',
    style: 'Urban + culture',
    bestFor: 'Detail lovers',
    blurb: 'From Tokyo capsule energy to Kyoto mornings, partner hostels put you steps from trains, temples, and late-night ramen runs.',
    vibe: 'Polished chaos with quiet corners to reset.',
  },
  {
    slug: 'united-states',
    name: 'United States',
    image: usImage,
    displayName: ['United', 'States'],
    region: 'North America',
    style: 'Coast to coast',
    bestFor: 'Road-trippers',
    blurb: 'Coast-to-coast stays for road-trippers and city explorers. Think San Diego sunsets, Brooklyn kitchens, and weekend friend groups.',
    vibe: 'Big distances, bigger community.',
  },
  {
    slug: 'australia',
    name: 'Australia',
    image: australiaImage,
    region: 'Oceania',
    style: 'Surf + city',
    bestFor: 'Sun chasers',
    blurb: 'Surf towns, city hubs, and Outback stopovers. Book a bed, meet a crew, and chase the next stretch of coastline.',
    vibe: 'Sun-heavy days and easy hellos.',
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    image: portugalImage,
    region: 'Europe',
    style: 'City + coast',
    bestFor: 'Nomads',
    blurb: 'Lisbon hills, Porto river light, and Algarve blue. A favorite Nomad corridor with cafés built for laptop afternoons.',
    vibe: 'Golden light and long dinners.',
  },
  {
    slug: 'spain',
    name: 'Spain',
    image: spainImage,
    region: 'Europe',
    style: 'Plaza life',
    bestFor: 'Night owls',
    blurb: 'Plaza energy, late nights, and hostel rooftops from Barcelona to Sevilla. Always somewhere to gather.',
    vibe: 'Social by default.',
  },
  {
    slug: 'brazil',
    name: 'Brazil',
    image: brazilImage,
    region: 'South America',
    style: 'Beach + music',
    bestFor: 'Festival energy',
    blurb: 'Music in the streets, beach mornings, and hostels that know how to throw a welcome night.',
    vibe: 'Rhythm-first travel.',
  },
  {
    slug: 'italy',
    name: 'Italy',
    image: italyImage,
    region: 'Europe',
    style: 'Train-hop cities',
    bestFor: 'Food people',
    blurb: 'Train-hop between cities that feel like film sets—then share a table with travelers who just arrived from the same platform.',
    vibe: 'Food, friends, and frescoes.',
  },
]
