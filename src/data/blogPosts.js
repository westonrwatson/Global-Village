export const blogPosts = [
  {
    slug: 'first-night-in-a-hostel',
    title: 'Your First Night in a Hostel (It Gets Better Fast)',
    date: '2026-03-12',
    category: 'Community',
    excerpt: 'Walk in awkward. Leave with three dinner plans. Here’s how to make night one feel like home.',
    featured: true,
    paragraphs: [
      'Nobody feels cool checking into a dorm for the first time. You are carrying a backpack that somehow got heavier at baggage claim, scanning bed numbers, and wondering if you packed earplugs. That is normal—and temporary.',
      'The trick is to treat the common room like a living room, not a waiting room. Drop your bag, say hello to whoever is cooking pasta at 9pm, and ask what they are doing tomorrow. Most travelers are looking for the same thing you are: a soft landing and someone to share the day with.',
      'With Global Village partner hostels, welcome nights and community events take the guesswork out. You do not have to manufacture plans. Show up, grab a seat, and let the village do what it does.',
      'By morning, the place that felt foreign usually feels familiar. That is the whole point.',
    ],
  },
  {
    slug: 'local-vs-nomad-vs-global',
    title: 'Local, Nomad, or Global: Which WanderPass Fits?',
    date: '2026-02-28',
    category: 'Passes',
    excerpt: 'A straight talk guide to picking a tier without overthinking your entire year.',
    featured: false,
    paragraphs: [
      'If you are testing the waters—one country, a few weeks, maybe your first hostel circuit—start with Local. You get discounted stays, community events, and enough structure to travel without a 40-tab spreadsheet.',
      'Nomad is for people already hopping regions. Free nights, priority booking, and partner experiences mean you spend less time hunting deals and more time deciding dinner.',
      'Global is the year-round option: worldwide access, stronger support, and early looks at new hostels. If travel is not a vacation but a rhythm, this is the pass that keeps up.',
      'You can upgrade later. The point is to start moving—not to pick the perfect plan on day zero.',
    ],
  },
  {
    slug: 'why-community-beats-solo-itineraries',
    title: 'Why Community Beats a Perfect Solo Itinerary',
    date: '2026-02-10',
    category: 'Travel',
    excerpt: 'The best days rarely come from a locked calendar. They come from the people in the bunk above you.',
    featured: false,
    paragraphs: [
      'A tight itinerary can still leave you lonely. A loose day with the right people can become the story you tell for years.',
      'Global Village is built around that idea: trusted hostels plus a pass that unlocks stays and events where meeting people is the default, not a side quest.',
      'Join a walking tour, a workshop, or a hostel dinner. The destination matters—but the table you sit at matters more.',
    ],
  },
  {
    slug: 'thailand-starter-circuit',
    title: 'A Thailand Starter Circuit for WanderPass Holders',
    date: '2026-01-22',
    category: 'Destinations',
    excerpt: 'Bangkok to the islands without burning out—or booking everything six months ahead.',
    featured: false,
    paragraphs: [
      'Begin in Bangkok for a few nights to shake off jet lag and meet people who already have island opinions. Then move south when you are ready—not when a rigid plan says so.',
      'Partner hostels along the circuit make it easy to stay flexible. If a beach town clicks, extend. If it does not, hop to the next spot with the same pass in your pocket.',
      'Pack light, keep one free afternoon every few days, and say yes to the group heading to the night market. Thailand rewards travelers who leave a little room.',
    ],
  },
  {
    slug: 'hostel-events-worth-showing-up-for',
    title: 'Hostel Events Worth Showing Up For',
    date: '2026-01-08',
    category: 'Community',
    excerpt: 'Not every event is magic—but these kinds almost always are.',
    featured: false,
    paragraphs: [
      'Welcome dinners beat scrolling in bed. Local walking tours beat guessing which neighborhood is walkable. Skill workshops—cooking, photography, language basics—turn strangers into teammates fast.',
      'If your hostel posts an event, treat it like a soft commitment. Even if you are tired, go for thirty minutes. Leaving early is fine. Never going is how people miss the village.',
      'Pass holders get access to community listings across partner spots. RSVP, show up, and introduce yourself like you belong there—because you do.',
    ],
  },
  {
    slug: 'packing-light-for-multi-city-stays',
    title: 'Packing Light for Multi-City Hostel Stays',
    date: '2025-12-18',
    category: 'Travel',
    excerpt: 'If you cannot carry it up three flights of stairs after a red-eye, leave it home.',
    featured: false,
    paragraphs: [
      'Hostel travel punishes overpacking. Stairs are real. Lockers are small. Laundry is available more often than you think.',
      'Bring layers that work in a common room and on a night out. One pair of shoes you can walk in all day. A small pouch for earplugs, charger, and passport so you are not digging through your bag at 6am.',
      'The lighter you pack, the easier it is to say yes to the next city—and with WanderPass, the next city is usually the point.',
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) || blogPosts[0]
}
