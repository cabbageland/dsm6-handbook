const sections = [
  {
    id: 'sec-online',
    title: 'Neurotic Conditions of the Online Era',
    short: 'Online Era',
    items: [
      { code: 'CTPD', name: 'Chronic Tab Proliferation Disorder', summary: 'Compulsive accumulation of browser tabs under the fantasy that open tabs preserve future competence.', definition: 'A persistent maladaptive pattern of opening browser tabs faster than they can be closed, accompanied by the irrational belief that every tab preserves a meaningful future intention.', features: ['More than 20 open tabs without a retrieval system', 'At least 5 tabs provoke guilt on visual contact', 'Duplicates exist but are defended as distinct', 'The phrase “wait, don’t close that” is used with startling urgency'], treatment: 'Close 12 tabs while whispering, “if it mattered, I would have bookmarked it.” Then fail to bookmark anything.' },
      { code: 'RDP', name: 'Reply Draft Paralysis', summary: 'Inability to send a message despite having mentally written it in complete and elegant form.', definition: 'A communication disorder in which the individual internally composes multiple excellent responses but repeatedly fails to send any of them.', features: ['Repeated opening and closing of a message thread', 'Strong desire to respond coexisting with total behavioral failure', 'Concern that any response now requires impossible tonal perfection', 'Escalating shame proportional to elapsed time'], treatment: 'Send: “sorry, brain fog, replying now.” Observe the almost offensive normality of the outcome.' },
      { code: 'PNS', name: 'Phantom Notification Syndrome', summary: 'Repeated sensation that the phone buzzed, chimed, or called out despite total silence.', definition: 'A perceptual disturbance marked by the felt sensation of a phone buzz, chime, or ping despite the absence of any corresponding event.', features: ['Repeated checking of a silent device', 'Full confidence that something happened', 'Recurs under anticipation, dread, or ambiguity'], treatment: 'Place phone out of reach for ten minutes and endure the strange empty weather of your own mind.' },
      { code: 'SQSD', name: 'Search Query Spiral Disorder', summary: 'One ordinary search mutates into a chain of unstable, adjacent, increasingly cursed searches.', definition: 'Escalation from one ordinary search into a chain of increasingly bizarre, adjacent, and epistemically unstable queries.', features: ['Original question is forgotten within 15 minutes', 'Source quality deteriorates over time', 'Confidence decreases as search intensity increases', 'The process continues to be described as “research”'], treatment: 'Write down the original question. Answer only that question. Back away from the abyss in one smooth motion.' },
      { code: 'AIRE', name: 'Autocorrect-Induced Rage Episodes', summary: 'Brief but spiritually vivid anger caused by software replacing correct words with social sabotage.', definition: 'Brief but spiritually intense anger triggered by a device repeatedly replacing correct words with nonsense, condescension, or social sabotage.', features: ['Repeated re-entry of the same correct word', 'Rising hostility toward inanimate software', 'Intrusive fantasy of throwing phone directly into sea'], treatment: 'Retype slowly. Consider voice dictation. Reject violence, if possible.' },
      { code: '2FAE', name: 'Two-Factor Authentication Exhaustion', summary: 'Cognitive depletion from proving, over and over, that one is in fact oneself.', definition: 'Cumulative fatigue caused by repeated procedural demands to verify one’s identity to systems that remain fundamentally unconvinced.', features: ['Demoralization during ordinary login attempts', 'Repeated code retrieval across multiple devices', 'Sense of being accused by infrastructure'], treatment: 'Sit down before logging into anything consequential. Do not attempt taxes while standing.' }
    ]
  },
  {
    id: 'sec-vibes',
    title: 'Identity, Aesthetics, and Vibes',
    short: 'Vibes',
    items: [
      { code: 'AID', name: 'Algorithmic Identity Diffusion', summary: 'Loss of certainty about what one actually likes after prolonged recommendation-engine exposure.', definition: 'Instability in taste and self-concept produced by prolonged exposure to recommendation systems and trend-conditioned self-recognition.', features: ['Uncertainty whether preferences are authentic or merely over-served', 'Rapid adoption of niche interests with suspicious platform timing', 'Diminished distinction between desire and exposure'], treatment: 'Like one thing privately. Tell no one. Protect it from branding.' },
      { code: 'PBF', name: 'Personal Brand Fragmentation', summary: 'Stress caused by juggling incompatible selves across work, friends, platforms, and aspirations.', definition: 'Distress caused by maintaining multiple partially incompatible selves across platforms, roles, and social ecologies.', features: ['Multiple selves for different contexts', 'Fatigue caused by cross-context tonal management', 'Fear that these selves may accidentally meet'], treatment: 'Permit at least 15 percent consistency between contexts. A single recurring opinion can be stabilizing.' },
      { code: 'ASF', name: 'Ambiguous Slay Fatigue', summary: 'Diffuse burnout from the ambient pressure to remain iconic, maintained, cultured, and effortless.', definition: 'A diffuse depletion state caused by ambient pressure to remain stylish, witty, emotionally evolved, physically maintained, culturally fluent, and somehow effortless.', features: ['Burnout without a single obvious cause', 'Resistance to further optimization discourse', 'Irritation at language such as “intentional,” “curated,” or “who is she”'], treatment: 'Wear the wrong socks. Eat a snack without documenting it. Embrace one ugly object.' },
      { code: 'OSPS', name: 'Overcurated Self Presentation Syndrome', summary: 'Excessive self-editing that removes spontaneity and all signs of mammalian life.', definition: 'A pattern of excessive self-editing that removes contradiction, spontaneity, and signs of ordinary creatureliness from outward expression.', features: ['Inability to share anything not sanded to conceptual smoothness', 'Fear of being witnessed in draft form', 'Mistaken belief that coherence requires sterilization'], treatment: 'Release one imperfect artifact into the world and do not immediately narrate its imperfections as self-defense.' },
      { code: 'MDC', name: 'Moodboard Displacement Complex', summary: 'Collecting references instead of choosing, making, or committing.', definition: 'Replacement of actual making, deciding, or committing with endless collection of references, vibes, palettes, aspirations, and atmosphere fragments.', features: ['Abundance of inspiration with no conversion to action', 'Repeated phrase: “I’m still gathering references”', 'Attachment to possibility over outcome'], treatment: 'Choose one thing. Moodboards are courtship, not marriage.' },
      { code: 'PRU', name: 'Pathological Reinvention Urges', summary: 'Belief that a notebook, haircut, planner, or lamp will trigger total psychic rebirth.', definition: 'Recurring belief that the acquisition of a notebook, haircut, tote bag, planner, water bottle, app, routine, or desk lamp will cause a full personal rebirth.', features: ['Cyclical fresh-start fantasies', 'Shopping framed as existential restructuring', 'Overinvestment in containers and stationery'], treatment: 'Buy the notebook if needed, but admit clearly that the notebook is not a sacrament.' }
    ]
  },
  {
    id: 'sec-time',
    title: 'Time Blindness and Calendar Crimes',
    short: 'Calendar Crimes',
    items: [
      { code: 'COD', name: 'Calendar Overconfidence Disorder', summary: 'Sincere, repeated belief that one afternoon can hold multitudes.', definition: 'A planning disorder marked by the sincere but unsupported belief that time is both abundant and obedient.', features: ['Scheduling with no transition time', 'Assuming hunger, fatigue, and confusion will not occur', 'Repeated phrase: “it should be fine”'], treatment: 'Cut the day’s ambitions by one third and call this realism, not surrender.' },
      { code: 'SEPG', name: 'Sunday Evening Pre-Grief', summary: 'Preemptive sorrow for Monday, who has not yet arrived but is already rude.', definition: 'An anticipatory sorrow response beginning late Sunday and directed toward the already-felt emotional violence of Monday.', features: ['Atmospheric dread despite no immediate event', 'Laundry avoidance', 'Resentment that time itself continues moving'], treatment: 'Do one nice thing for Monday-self. This is not cure, but it is solidarity.' },
      { code: 'ESD', name: 'Errand Stacking Delusion', summary: 'Belief that seven geographically irrational errands count as one quick trip.', definition: 'The false belief that multiple geographically irrational chores can together constitute “one quick trip.”', features: ['Route planning detached from real traffic', 'Adding tasks mid-trip under optimism', 'Returning home offended by physics'], treatment: 'Plan fewer stops. Respect mileage.' },
      { code: 'QLTMS', name: 'Quick Little Task Miscalculation Syndrome', summary: 'Any task described as “quick” becomes an event with administrative second-act energy.', definition: 'A condition in which tasks described as small or quick reliably expand into bureaucratic, technical, or existential events.', features: ['“This will just take two seconds” energy', 'Immediate appearance of missing logins or unclear forms', 'Collapse by minute 17'], treatment: 'Assume every task has a hidden second act.' },
      { code: 'MRL', name: 'Meeting Recovery Lag', summary: 'The period after a meeting when the body is present but the mind has filed a complaint.', definition: 'A post-meeting cognitive depletion state in which the body remains upright but the mind has filed an internal complaint.', features: ['Inability to do focused work immediately after calls', 'Staring at screen while soul rehydrates', 'Hostility toward calendar itself'], treatment: 'Schedule buffer time or stop pretending meetings consume no psychic material.' },
      { code: 'IRA', name: 'Inbox Resurrection Anxiety', summary: 'Distress triggered by reopening a thread that should have died naturally.', definition: 'Distress triggered by reopening an email thread that should by all ethical and narrative logic have died naturally.', features: ['Dread before opening old thread', 'Scanning for whether blame matured while unread', 'Temptation to vanish into agriculture'], treatment: 'Open it. Answer plainly. Resist over-explaining your humanity.' }
    ]
  },
  {
    id: 'sec-device',
    title: 'Device-Bonded Dysregulations',
    short: 'Devices',
    items: [
      { code: 'LBE', name: 'Low-Battery Existentiality', summary: 'Mood collapse below the threshold of electrical peace.', definition: 'An acute mood syndrome triggered by device battery decline below a psychologically destabilizing threshold.', features: ['Emotional deterioration below 20 percent', 'Urgency below 10 percent', 'Reduced capacity to imagine a future'], treatment: 'Charge the device before diagnosing your life.' },
      { code: 'CDP', name: 'Charger Dependency Panic', summary: 'Alarm produced when a single cable becomes civilization itself.', definition: 'Disproportionate alarm upon realizing that one’s immediate functionality depends on locating a single specific cable.', features: ['Searching rooms with disaster intensity', 'Contempt for incompatible connectors', 'Treating cable possession as destiny'], treatment: 'Own more than one charger and stop living like a fugitive from electricity.' },
      { code: 'SRBD', name: 'Screen Rotation Betrayal Disorder', summary: 'Trust rupture caused by the phone rotating at the exact wrong moment.', definition: 'A trust rupture produced by unwanted device rotation at precisely the wrong moment.', features: ['Involuntary exclamation upon rotation', 'Body repositioning escalates problem', 'Device feels personally oppositional'], treatment: 'Turn on orientation lock and reclaim legal authority.' },
      { code: 'BPF', name: 'Bluetooth Pairing Fury', summary: 'Rage when two devices designed to connect refuse their obvious destiny.', definition: 'Intense resentment produced when two devices designed to connect refuse to acknowledge each other’s existence.', features: ['Priestly Bluetooth toggling', 'Speaking to device as though shame might work', 'Fantasies of analog life'], treatment: 'Restart everything. If that fails, pronounce a curse and use a cable.' },
      { code: 'PRD', name: 'Password Reset Despair', summary: 'Demoralization from forging yet another variation of the same doomed password.', definition: 'Demoralization associated with producing yet another password variation from the same stale symbolic ruins.', features: ['Rejected passwords with humiliated punctuation', 'Loss of self-respect during security questions', 'Nostalgia for simpler forms of danger'], treatment: 'Use a password manager and cease hand-crafting cryptographic tragedies.' },
      { code: 'SUSS', name: 'Software Update Suspicion Syndrome', summary: 'Rational fear that “improvements” conceal betrayal.', definition: 'A defensive stance toward updates based on the historically justified belief that the phrase “bug fixes and improvements” may conceal betrayal.', features: ['Postponing updates until social proof emerges', 'Dread of moved familiar functions', 'Belief every improvement costs three annoyances'], treatment: 'Update one non-essential device first and let it serve as a sacrificial scout.' }
    ]
  },
  {
    id: 'sec-social',
    title: 'Social and Interpersonal Disturbances',
    short: 'Social',
    items: [
      { code: 'VNAS', name: 'Voice Note Avoidance Syndrome', summary: 'Avoidance of audio messages because they demand linear time and obedience.', definition: 'Avoidance of incoming audio messages due to their demand for uninterrupted time, auditory submission, and a level of situational readiness not always available.', features: ['Delaying playback indefinitely', 'Wishing sender had simply used words with edges', 'Resentment increasing with length'], treatment: 'If the note exceeds 90 seconds, you may request a summary without shame.' },
      { code: 'GCPG', name: 'Group Chat Peripheral Guilt', summary: 'Low-grade shame from seeing everything, saying nothing, and becoming socially spectral.', definition: 'A low-grade shame condition produced by seeing everything in a group chat, contributing nothing, and remaining socially spectral.', features: ['Chronic lurking with affectionate intent', 'Fear that reentry now requires an excellent joke', 'Reaction-only compensation'], treatment: 'Send one simple message. You are not reentering parliament.' },
      { code: 'SZH', name: 'Seen-Zone Hyperinterpretation', summary: 'Forensic overreading of read receipts, punctuation, and response delays.', definition: 'Compulsive analysis of read receipts, response timing, punctuation, reaction choices, and silence as evidence of relational destabilization.', features: ['Assigning meaning to ellipses and lowercase', 'Inability to tolerate ambiguous delay', 'Consulting friends as forensic linguists'], treatment: 'Assume the other person has a sink, a body, and an email account.' },
      { code: 'CLB', name: 'Courtesy Laugh Burnout', summary: 'Emotional fatigue from performing amusement after the spirit of laughter has left.', definition: 'Emotional fatigue caused by repeatedly signaling amusement for the maintenance of social smoothness after the spirit of laughter has left the body.', features: ['Reflexive lol divorced from joy', 'Cheeks participate while soul abstains', 'Depletion after banter'], treatment: 'Permit one neutral response where previously you would have performed delight.' },
      { code: 'MSC', name: 'Mutual Scheduling Collapse', summary: 'Friendship logistics fail under adult calendar treaty conditions.', definition: 'Breakdown of social maintenance caused by the impossibility of aligning adult calendars with sufficient energy on both sides.', features: ['Affection remains high while meetings fail', 'Month-ahead planning for coffee', 'Collapse into vague hope'], treatment: 'Schedule badly but concretely. “Wednesday 7?” has saved friendships.' },
      { code: 'ENWC', name: 'Excessive No Worries Compensation', summary: 'Pathological language-softening to conceal legitimate inconvenience or fury.', definition: 'Pathological over-softening of language in order to conceal legitimate inconvenience, disappointment, irritation, or contained fury.', features: ['Saying “no worries” when worries are plentiful', 'Sentence-level emotional laundering', 'Fear that directness constitutes violence'], treatment: 'Try one clear boundary. It is survivable.' }
    ]
  },
  {
    id: 'sec-cognitive',
    title: 'Cognitive Wear and Tear',
    short: 'Cognition',
    items: [
      { code: 'BDD', name: 'Background Doomscroll Dissociation', summary: 'Time-loss trance induced by distressing content that yields no real power.', definition: 'A trance-like absorption in distressing content that leaves the individual less informed, less calm, and more psychically frayed.', features: ['Intended check becomes long unchosen session', 'Fragmented memory of consumed material', 'More dread, little usable knowledge'], treatment: 'Close the app before you achieve perfect awareness of horrors you cannot act on tonight.' },
      { code: 'OPAS', name: 'Open-Plan Attention Shredding', summary: 'Trying to think in a space optimized for interruption and snack-wrapper acoustics.', definition: 'Cognitive fragmentation caused by attempting focused thought in an environment optimized for interruption, visibility, and acoustic irritation.', features: ['Inability to sustain conceptual work', 'Awareness of all nearby conversations', 'Fantasy of a solitary hut'], treatment: 'Use barriers, headphones, or strategic disappearance.' },
      { code: 'TIMC', name: 'Thumbnail-Induced Memory Confusion', summary: 'Mistaking recognition of packaging for actual understanding.', definition: 'False confidence that one has understood a piece of content because one recognizes its visual packaging.', features: ['Saying “I know that” based on thumbnail familiarity', 'Cannot reproduce substance', 'Recognition mistaken for comprehension'], treatment: 'Summarize the thing. If you cannot, you do not yet own it.' },
      { code: 'CSCM', name: 'Context-Switch Concussion, Mild', summary: 'Intellectual stun from too many task transitions in too little time.', definition: 'Temporary intellectual stun caused by repeated rapid movement between tasks, topics, interfaces, and registers.', features: ['Brain buffers clearing mid-afternoon', 'Loss of continuity across work blocks', 'Cannot reconstitute intent after interruption'], treatment: 'Cluster similar tasks. Guard transitions.' },
      { code: 'NTTE', name: 'Notification-Triggered Thought Evaporation', summary: 'Meaningful thought disappears the instant a ping arrives.', definition: 'Immediate disappearance of a meaningful thought following interruption by a notification, request, ping, or side demand.', features: ['Active thought vanishes upon alert', 'Attempts reconstruction with visible grief', 'Replacement thought is administrative and worse'], treatment: 'Keep a capture note open. Your thoughts deserve witness protection.' },
      { code: 'TRA', name: 'Tab Return Amnesia', summary: 'Returning to a tab and having no idea why it matters or ever did.', definition: 'Failure to recall the original purpose of an already-open browser tab upon returning to it later.', features: ['Reopening tab with hope followed by emptiness', 'No memory of why document or map mattered', 'Refusal to close it just in case memory returns'], treatment: 'If the intention cannot be recalled, the tab is now a relic. Release it with honors.' }
    ]
  },
  {
    id: 'sec-archival',
    title: 'Archival and Possession Disorders',
    short: 'Archival',
    items: [
      { code: 'SHD', name: 'Screenshot Hoarding Disorder', summary: 'Compulsive saving of fragments for systems of retrieval that do not exist.', definition: 'Compulsive saving of digital fragments for later use in systems that do not materially exist.', features: ['Recipes, jokes, outfits, maps, tweets, and emotional evidence', 'No tagging system and no retrieval discipline', 'Deletion feels like diminishment'], treatment: 'Delete 30 screenshots in a row. If you survive, continue.' },
      { code: 'NAF', name: 'Note-App Fossilization', summary: 'Stratified bog of half-plans, identity fragments, and grocery sediment.', definition: 'Accumulation of abandoned lists, fragments, half-plans, affirmations, revelations, and logistics into a stratified textual bog.', features: ['Hundreds of notes, few revisited intentionally', 'Titles like “ideas” and “for real this time”', 'Cannot locate anything without time travel'], treatment: 'Merge, archive, or delete with mercy. Not every fragment is sacred.' },
      { code: 'DFD', name: 'Downloads Folder Denial', summary: 'Refusing to inspect the directory most likely to tell on you.', definition: 'An avoidance pattern characterized by refusal to inspect the directory most likely to reveal the truth of one’s digital behavior.', features: ['Desktop cleanliness with download chaos', 'Anxiety about machine-generated filenames', 'Belief that not looking preserves innocence'], treatment: 'Open the folder in daylight. Sort by date. Accept history.' },
      { code: 'IMNTPS', name: 'I Might Need This PDF Syndrome', summary: 'Unread files retained as symbols of a future diligent self.', definition: 'Inability to delete unread files because they symbolize a hypothetical future self who is diligent, scholarly, and likely imaginary.', features: ['Retention of papers, reports, manuals, ebooks', 'Attachment to latent potential', 'Confusion between ownership and digestion'], treatment: 'Keep only what has a plausible future use. The rest are paper ghosts.' },
      { code: 'SRR', name: 'Sentimental Receipt Retention', summary: 'Keeping pointless transaction evidence for emotional or tax-shaped reasons.', definition: 'Preservation of trivial transactional artifacts due to vague emotion, weak trust in institutions, or diffuse tax paranoia.', features: ['Receipts in bags, drawers, and coat pockets', 'Cannot explain why they remain', 'Discomfort when asked to discard them'], treatment: 'If it serves neither taxes nor memory, let the tiny paper die.' },
      { code: 'LSWRD', name: 'Link Saving Without Reading Disorder', summary: 'Bookmarking as a substitute for understanding.', definition: 'Compulsive bookmarking of articles, essays, papers, and resources as a substitute for actual engagement.', features: ['Impressive read-later collections with little reading', 'Pleasure spike on saving link mistaken for learning', 'Collecting pathways instead of walking them'], treatment: 'Read one saved link before saving three more.' }
    ]
  },
  {
    id: 'sec-emerging',
    title: 'Emerging Conditions Requiring Further Study',
    short: 'Emerging',
    items: [
      { code: 'AIPOPD', name: 'AI Prompt Overfitting Personality Drift', summary: 'Gradual acquisition of weird rhetorical habits after too much time instructing language models.', definition: 'Gradual adoption of strange rhetorical habits, synthetic politeness structures, and oddly optimized phrasing following prolonged interaction with language models.', features: ['Speaking in prompts', 'Asking humans for output in sections and bullets', 'Weirdly formal gratitude toward appliances and bots'], treatment: 'Talk to one messy human and tolerate their noncompliance.' },
      { code: 'FDMEC', name: 'Food Delivery Menu Exhaustion Collapse', summary: 'Decision paralysis while hungry and confronted with endless mediocre options.', definition: 'Decision paralysis produced by staring at too many mediocre food options while already too hungry to think clearly.', features: ['Escalating standards as glucose falls', 'Cannot choose despite abundance', 'Ordering same thing with resentment'], treatment: 'Maintain a stable top three. Hunger is not the hour for imaginative democracy.' },
      { code: 'EMOD', name: 'Excessive Micro-Optimization Disorder', summary: 'Perfecting tiny systems to avoid larger more meaningful problems.', definition: 'Compulsive refinement of trivial systems in order to avoid confronting larger, scarier, and more meaningful problems.', features: ['Spending 90 minutes perfecting task software', 'Fascination with workflows over work', 'Attachment to system tuning'], treatment: 'Before improving the workflow, do 20 minutes of the work.' },
      { code: 'PIR', name: 'Playlist Identity Rigidity', summary: 'Belief that playlists must perfectly encode a coherent self.', definition: 'The belief that one’s playlists must perfectly encode a stable and impressive self despite overwhelming evidence that the self is mixed, repetitive, and mood-dependent.', features: ['Overediting playlists for narrative coherence', 'Shame about chaotic listening history', 'Assigning moral value to transitions'], treatment: 'Make one playlist called “songs I currently tolerate.” Heal through accuracy.' },
      { code: 'WISF', name: 'Wellness Information Saturation Fatigue', summary: 'Exhaustion from too many contradictory protocols for being a functional mammal.', definition: 'Exhaustion caused by exposure to too many contradictory instructions for how to sleep, eat, move, heal, focus, regulate hormones, calm inflammation, and become an optimal mammal.', features: ['Cannot distinguish evidence from vibes', 'Guilt from incompatible advice', 'Breakfast feels morally loaded'], treatment: 'Pick a few basics and stop letting strangers narrate your breakfast as a referendum.' },
      { code: 'CAAD', name: 'Chronic Ambient Administrative Dread', summary: 'Low hum of anxiety generated by forms, portals, renewals, and unnamed obligations.', definition: 'A persistent low hum of anxiety generated by forms, portals, renewals, subscriptions, billing cycles, account notices, verification loops, and unnamed obligations waiting just offscreen.', features: ['Waking with sense of forgotten duty', 'Unease triggered by envelopes and official fonts', 'Inability to fully relax because something is probably lurking'], treatment: 'Make a list. Convert fog into items. Administration feeds on vagueness.' }
    ]
  }
];

const toc = document.getElementById('toc');
const list = document.getElementById('disorderList');
const detail = document.getElementById('detailCard');
const chipRow = document.getElementById('filterChips');
const search = document.getElementById('search');
const jumpButtons = document.querySelectorAll('[data-jump]');

let activeSection = 'all';
let activeItem = null;

function flattenItems() {
  return sections.flatMap(section => section.items.map(item => ({ ...item, section: section.title, sectionId: section.id, short: section.short })));
}

const allItems = flattenItems();

function renderToc() {
  const anchors = [
    { id: 'founding-credit', label: 'Founding Credit' },
    { id: 'disorders', label: 'Disorders' },
    { id: 'appendices', label: 'Appendices' }
  ];
  toc.innerHTML = anchors.map(anchor => `<a href="#${anchor.id}">${anchor.label}</a>`).join('');
}

function renderChips() {
  const chips = [{ id: 'all', label: 'All disorders' }, ...sections.map(section => ({ id: section.id, label: section.short }))];
  chipRow.innerHTML = chips.map(chip => `<button class="chip ${chip.id === activeSection ? 'active' : ''}" data-chip="${chip.id}">${chip.label}</button>`).join('');
  chipRow.querySelectorAll('[data-chip]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSection = btn.dataset.chip;
      renderChips();
      renderList();
    });
  });
}

function filterItems() {
  const q = search.value.trim().toLowerCase();
  return allItems.filter(item => {
    const sectionMatch = activeSection === 'all' || item.sectionId === activeSection;
    const queryMatch = !q || [item.name, item.code, item.summary, item.definition, item.section].join(' ').toLowerCase().includes(q);
    return sectionMatch && queryMatch;
  });
}

function renderList() {
  const items = filterItems();
  list.innerHTML = items.map(item => `
    <button class="disorder-item ${activeItem?.code === item.code ? 'active' : ''}" data-code="${item.code}">
      <h4>${item.name}</h4>
      <p>${item.summary}</p>
      <div class="disorder-meta"><span>${item.section}</span><span>${item.code}</span></div>
    </button>
  `).join('');

  list.querySelectorAll('[data-code]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = allItems.find(x => x.code === btn.dataset.code);
      activeItem = item;
      renderList();
      renderDetail(item);
    });
  });

  if (!items.length) {
    detail.innerHTML = `
      <div class="detail-placeholder">
        <div class="placeholder-mark">∅</div>
        <h4>No matching disorders</h4>
        <p>Try a looser clinical query. The pathology is definitely in here somewhere.</p>
      </div>`;
  }
}

function renderDetail(item) {
  detail.innerHTML = `
    <div class="detail-top">
      <div>
        <div class="section-kicker">${item.section}</div>
        <h3>${item.name}</h3>
      </div>
      <div class="detail-code">${item.code}</div>
    </div>
    <p class="detail-summary">${item.summary}</p>
    <div class="detail-sections">
      <article>
        <h5>Definition</h5>
        <p>${item.definition}</p>
      </article>
      <article>
        <h5>Diagnostic features</h5>
        <ul>${item.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
      </article>
      <article>
        <h5>Recommended treatment</h5>
        <p>${item.treatment}</p>
      </article>
    </div>
  `;
}

search.addEventListener('input', renderList);

jumpButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

renderToc();
renderChips();
renderList();
activeItem = allItems[0];
renderList();
renderDetail(activeItem);
