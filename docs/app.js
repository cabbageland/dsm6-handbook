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
const symptomPicker = document.getElementById('symptomPicker');
const scoreResult = document.getElementById('scoreResult');
const resetScorecard = document.getElementById('resetScorecard');

const archetypes = [
  { title: 'Acute Contemporary Overextension', totem: '🦅🔥📅 Red-tailed hawk circling above a Google Calendar that absolutely had this coming', blurb: 'You are not broken, but you are visibly overtasked, over-signaled, and being slow-roasted by too many systems at once. Your selections suggest a person with standards and intelligence who nevertheless keeps volunteering for one more little thing like a raccoon pressing elevator buttons just to see what happens.', style: 'Clinically speaking, you keep trying to run your life like a high-capacity machine even though your spirit is waving a tiny white flag from inside the engine compartment. You are not failing. You are simply acting like bandwidth is a moral virtue, which is a slightly embarrassing belief for a grown person to maintain.', treatment: 'Treatment includes deleting one obligation you accepted out of delusion, eating something with protein instead of ideology, and admitting that “I can squeeze it in” has become one of your more destructive hobbies.' },
  { title: 'Diffuse Systems-Induced Spiritual Fatigue', totem: '🦋🖥️ Moth trapped in a glowing dropdown menu, bravely dying for no clear reason', blurb: 'Your profile suggests a basically thoughtful and decent person who has been forced into too many repetitive, tiny, humiliating interactions with infrastructure. The result is not melodrama. It is accumulated soul abrasion, plus the increasingly haunted look of someone being spiritually audited by dropdown menus.', style: 'This is less a character flaw than a prolonged exposure injury, though you are also not helping by continuing to behave as if better list software will save you. You do not need a new workflow. You need fewer stupid little portals asking you to verify your humanity while actively destroying it.', treatment: 'Prescribe one afternoon with no optimization content, no system-rebuild fantasies, and no pretending that a cleaner folder structure will heal what forms and apps have done to you.' },
  { title: 'Chronic Vibe-Administrative Comorbidity', totem: '🧣🖨️ Silk scarf tangled in office printer gears, which is frankly your whole brand', blurb: 'You are trying to preserve discernment, softness, and personality while being nibbled to death by logistics. This is noble, but the current implementation looks like a talented person being pecked to death by beige geese.', style: 'Your nervous system is doing unpaid labor for every app, form, reminder, and low-grade bureaucratic insult in your vicinity. You are still trying to have taste while life keeps emailing you PDFs. Frankly, that is heroic, but also maybe stop acting surprised that you are tired.', treatment: 'Recommended treatment: one glamorous refusal, one answered email without literary flourishes, one meal consumed before crisis interpretation, and a temporary reduction in your exposure to logistical sludge.' },
  { title: 'Executive Function Ornamentalism', totem: '🖋️✅ Gold fountain pen resting on an empty checklist like aesthetics alone were going to finish the job', blurb: 'You have developed attractive rituals around functionality without always achieving the function itself. The systems are beautiful. The execution remains, at best, fan fiction about productivity.', style: 'In plain terms, the setup is gorgeous, the vibe is compelling, and the task remains tragically undone. You are decorating the perimeter of action like a person hoping the correct notebook angle will summon discipline by occult means. It will not. The notebook has done enough already.', treatment: 'Treatment begins with doing one ugly practical thing before touching any planner, app, template, tab group, dashboard, workflow diagram, or other shrine to hypothetical future competence.' },
  { title: 'High Sensitivity, Low Buffer Syndrome', totem: '🤍🦌☀️ White deer standing in a parking lot at noon, visibly regretting its sensitivity', blurb: 'You notice too much, feel too much, and still attempt to conduct yourself like this is a reasonable amount to metabolize. It is not.', style: 'The issue is not weakness. The issue is that your inputs are too loud, your recovery windows are too short, and you keep acting like you can simply “push through” on vibes and hydration. Respectfully, that strategy has been getting your ass handed to you in increasingly familiar ways.', treatment: 'Your treatment plan includes quieter environments, fewer concurrent obligations, and a legally binding pause before agreeing to anything while already fried. Also, stop treating overstimulation like a personality test you should pass.' },
  { title: 'Ceremonial Avoidance Patterning', totem: '🦚📥 Peacock nesting in an unopened inbox as though avoidance were a decorative art form', blurb: 'You are not merely procrastinating. You are building an entire liturgy around not doing one specific thing. The avoidance has mood lighting now, which is honestly humiliating for everyone involved.', style: 'At some point this stopped being delay and became production design. You are circling the task with such decorative seriousness that the task itself has become almost incidental. It is, clinically, a very impressive amount of pageantry for not sending one email.', treatment: 'Treatment requires doing the dreaded task before any further tea-making, atmosphere-adjusting, desk-realighning, playlist-curation, or “just quickly getting in the right headspace,” which at this point is simply drag.' },
  { title: 'Administrative Haunting with Preserved Insight', totem: '👻📋 Victorian ghost clutching a clipboard and somehow still waiting on your paperwork', blurb: 'You remain painfully aware of every loose end and therefore never fully rest. This is terrible, but at least it is internally coherent, unlike your task management habits.', style: 'Congratulations on your insight. Unfortunately it has not cured the portals. You know exactly what is wrong, where the dread lives, and which tiny obligations are nibbling at your peace, yet you still walk around like awareness itself should count as completion. It does not.', treatment: 'Recommended treatment: convert fog into a list, convert the list into three actions, and stop spiritually checking in on every task like a Victorian relative at bedside.' },
  { title: 'Social Tenderness Under Communication Drag', totem: '🕊️💌 Pigeon carrying an overthought love letter no one needed to workshop this hard', blurb: 'You care sincerely about people, but the mechanics of modern communication keep turning that care into psychic cement. You are emotionally available in theory and logistically built like a haunted fax machine in practice.', style: 'This is what happens when a decent heart collides with infinite message threads and the tyranny of tone management. You are not cold. You are just treating every reply like a miniature diplomatic summit, which is absurd behavior for someone trying to text “haha yes Thursday works.”', treatment: 'Treatment includes sending one warm imperfect reply, retiring the fantasy of the perfectly calibrated text, and remembering that other people are usually relieved by contact, not grading your punctuation like hostile deans.' },
  { title: 'Aesthetic Exhaustion with Residual Standards', totem: '🥀🏺 Wilted orchid in a perfect ceramic vase, still trying to collapse with good posture', blurb: 'You are tired, but crucially still opinionated, which keeps the whole condition both elegant and exhausting. Collapse is not allowed unless it is tastefully art-directed, which is an absurd standard to maintain while exhausted.', style: 'You refuse to burn out in an ugly way, which is admirable but operationally stupid. The standards remain active long after the energy reserves are gone, so now you are just exhausted with a good eye. That is not treatment. That is branding.', treatment: 'Prescribe one deeply mid day. Wear the wrong clothes, produce something merely adequate, and survive the revelation that the world does not end when you stop making your fatigue aesthetically coherent.' },
  { title: 'Platform-Shaped Attention Erosion', totem: '🐟🔔 School of silver fish scattering through notification badges like your attention never stood a chance', blurb: 'Your attention has been sanded down by systems optimized to harvest it in crumbs, and you are blaming yourself as though this happened in a moral vacuum.', style: 'You keep treating fragmentation as personal weakness when in fact entire industries have been professionally engineering your distractibility. That said, continuing to raw-dog five platforms and then whisper “why can’t I focus” is not exactly a mastermind response either.', treatment: 'Treatment: remove one psychic parasite app from your home screen, stop touching your phone with the innocence of a child near a stove, and rebuild one stretch of attention long enough to remember your original thought.' },
  { title: 'Mildly Feral Competence Burn', totem: '🦊🛍️ Well-dressed fox with grocery bags and dead eyes, completing errands out of pure spite', blurb: 'You are still getting things done, but with a growing undertone of creaturely resentment. Function persists. Your endorsement of civilization does not.', style: 'There is something almost noble here: you remain competent while internally becoming more woodland each day, like a distinguished person one minor inconvenience away from hissing in public. The problem is that you are starting to treat basic participation as an insult, which, to be fair, it often is, but you still need groceries and passwords like the rest of us.', treatment: 'Treatment includes one walk without input, one completed task done before grievance narration, and at least twelve consecutive minutes in which nobody asks anything of you.' },
  { title: 'Optimized Exterior, Smoldering Interior', totem: '🦢🌋 Swan gliding over a volcano pretending this is all very manageable actually', blurb: 'Your profile indicates external coherence paired with internal muttering and a deep aversion to further improvement discourse. You look composed because you are refusing to collapse publicly, not because things are calm.', style: 'You can absolutely perform togetherness. The issue is that you are spiritually rolling your eyes the entire time and resenting every sentence that contains the word “intentional.” This is less serenity than controlled burn under tasteful lighting.', treatment: 'Prescribe a brief break from self-improvement aesthetics, one conversation where you answer honestly instead of elegantly, and immediate reduction of exposure to anyone trying to sell you a better morning routine.' },
  { title: 'Chronically Interrupted Personhood', totem: '🪟📱 Broken stained-glass window made of app icons, because apparently even your fragmentation had to be ornate', blurb: 'You are trying to think, feel, and act like a full human being inside interruption architecture. The results have been predictably choppy.', style: 'Your personality keeps getting chopped into notification-sized portions, and then you berate yourself for lacking depth. Be serious. Nothing about your current conditions supports continuity of mind. You are being processed into fragments and still trying to write coherent paragraphs out of the rubble.', treatment: 'Treatment: claim one interruption-free block, kill unnecessary alerts, and stop granting every buzz and badge the constitutional authority to rearrange your brain.' },
  { title: 'Tab-Backed Identity Stabilization', totem: '🐀👑 Pack rat sitting on a throne of browser tabs like digital hoarding were a birthright', blurb: 'A meaningful fraction of your hope is currently stored in open tabs, saved links, postponed plans, and browser artifacts that you insist represent future possibility.', style: 'This is not archival behavior. This is emotional warehousing with Wi-Fi. You are using tabs the way some people use storage lockers: not because it is efficient, but because throwing anything away would force contact with reality, and apparently that felt a little too athletic this week.', treatment: 'Delete ten tabs, bookmark two truly useful things, and grieve the imaginary future self who was absolutely going to read all that nonsense.' },
  { title: 'Hyperaware Calendar Delusion', totem: '🐙👑📓 Octopus wearing a day planner as a crown, still somehow overbooked', blurb: 'You know time is limited and still continue to schedule as if your body were fictional, your transitions were optional, and lunch were a personality flaw.', style: 'This is a bold but unsupported theory of adulthood. You are not a bad person, but you are treating the day like a hostile takeover target. The repeated optimism is almost touching. It is also why you are angry at 3:40 PM with no clear memory of how you got there.', treatment: 'Treatment: remove one-third of your planned day, insert buffer time like a responsible mammal, and stop building schedules that would challenge a minor deity.' },
  { title: 'Tender Perfectionist Message Rot', totem: '🕊️💬 Dove pecking at an unsent text bubble like clarity might hatch if given enough time', blurb: 'You want to be clear, warm, precise, and socially deft, which would be beautiful if it were not also making you insanely slow at saying normal things.', style: 'You are essentially holding tiny diplomatic summits before sending “sounds good.” The care is real. The scale is ridiculous. At this point your texts have more pre-production than independent films, and somehow less release confidence.', treatment: 'Treatment includes sending one message before it feels perfect, accepting that warmth survives mild awkwardness, and ending your reign as secretary-general of the United Nations of Reply Tone.' },
  { title: 'Low-Grade Panic, High-Grade Taste', totem: '🐈‍⬛🎀 Black cat wearing a silk ribbon beside unpaid bills, elegant to the point of self-sabotage', blurb: 'Your life contains too much friction for peace, but your standards remain inconveniently intact. This gives the whole condition an unfortunate elegance.', style: 'You are suffering, yes, but in a curated way. The anxiety is real, the discernment is real, and together they are producing a life that feels both aesthetically literate and logistically cursed. You do not need better taste. You need fewer stupid frictions interrupting it.', treatment: 'Prescribe one low-stakes pleasure, one ugly practical fix, and a temporary ceasefire in the war between your refined sensibilities and your absurdly admin-heavy reality.' },
  { title: 'Digitally Mediated Frazzle State', totem: '🐦💻 Hummingbird trapped in a laptop fan, spiritually identical to your browser history', blurb: 'You are overstimulated in a way that is modern, boring, and weirdly hard to explain to people who think the answer is “just focus.”', style: 'Your problem is not laziness. Your problem is that your mind is currently living in thirty browser events at once. Unfortunately, continuing to treat this as a personal failing instead of a situation is only making you meaner to yourself and somehow even more online.', treatment: 'Treatment includes less cross-platform grazing, one device-free hour, and an immediate ban on opening five tabs to investigate why you feel scattered.' },
  { title: 'Chronic Ambient Overmanagement', totem: '🍄📄 Mushroom ring growing around a stack of forms nobody had the courage to handle promptly', blurb: 'You are being managed by calendars, reminders, devices, forms, and invisible obligations to a degree that would alarm a healthier civilization.', style: 'At this point your day is less lived than negotiated. You are not so much existing as being continuously prompted by systems with no respect for your texture as a person. The weird part is how calmly you have begun to accept this arrangement.', treatment: 'Recommended treatment: reclaim one area of life from reminders, stop outsourcing every memory to software with domination energy, and answer only the tasks that are real instead of all the tasks that merely look official.' },
  { title: 'Graceful Collapse Deferral', totem: '🪶😵 White heron fainting in slow motion for dramatic reasons that are, unfortunately, also medical', blurb: 'You keep postponing the moment where you admit you are cooked, mostly because you would prefer to do so attractively and on your own terms.', style: 'This is emotionally sophisticated, aesthetically coherent, and profoundly inefficient. You are not avoiding collapse because you are fine. You are avoiding it because you would like the collapse to have a cleaner narrative arc, which is not how exhaustion works, unfortunately for your standards.', treatment: 'Treatment includes canceling one thing before your body does it for you, lying down before the dramatic third act, and accepting that inelegant rest is still rest.' },
  { title: 'Intermittent Hope Storage Disorder', totem: '🏺✨ Glass jar full of fireflies labeled someday, because apparently hope now lives in storage', blurb: 'You keep tiny reserves of future optimism in documents, products, routines, saved carts, and plans for a better version of the week.', style: 'The hope itself is touching. The storage medium is a little humiliating. You have outsourced morale to notes, tabs, lists, bookmarks, and someday-plans like a person trying to keep their faith in Tupperware.', treatment: 'Treatment requires choosing one saved hope and actually using it, then deleting three others that have quietly become decorative emotional clutter.' },
  { title: 'Civilized Person, Feral Nervous System', totem: '🦝🤵 Raccoon in a tuxedo under fluorescent lights, still expected to act professional', blurb: 'On paper you appear functional. In practice your internal weather has stopped respecting policy, decorum, and several key assumptions about modern adulthood.', style: 'The exterior remains articulate while the interior has become a flashlight under a blanket, rattling around like it pays rent there. You are still passing as coherent, which is impressive, but the cost is that your nervous system now sounds like a raccoon rummaging in ceremonial silverware every time something minor goes wrong.', treatment: 'Treatment includes nervous-system basics so embarrassingly obvious you keep trying to transcend them, plus fewer stimulants, fewer pings, and a little less pretending you can out-think biology.' },
  { title: 'Main-Character Logistics Fatigue', totem: '🎠🛒 Carousel horse dragging a shopping cart uphill like the protagonist of a deeply administrative tragedy', blurb: 'You are carrying yourself like a protagonist while being repeatedly humbled by passwords, errands, tabs, chargers, forms, and the beige cruelty of administrative life.', style: 'The plot is not defeating you. Admin is, which is somehow funnier and more insulting. You keep preparing for meaningful arcs while being ambushed by account recovery flows and grocery errands with eight subclauses. This is not beneath you. This is simply the current genre, and it is rude.', treatment: 'Prescribe one heroic but extremely boring admin hour, followed by something beautiful enough to remind you that your life is not actually a spreadsheet with skin.' },
  { title: 'Soft-Hearted Doom Efficiency', totem: '🐎☕ Workhorse made of glass and caffeine, one bad email away from decorative collapse', blurb: 'You have become disturbingly efficient at operating while somewhat fried, which is both impressive and a little bleak.', style: 'You are adapting beautifully to conditions that do not deserve your adaptation. The machine keeps moving, the face stays normal, and the cost gets quietly billed to your inner life where apparently nobody from accounting plans to intervene, audit, or stage a coup.', treatment: 'Treatment includes doing less while calling it wisdom instead of failure, letting one thing be late if necessary, and refusing the creepy little pride that comes from functioning beautifully under bad conditions.' }
];

let activeSection = 'all';
let activeItem = null;
let selectedSymptoms = [];

function flattenItems() {
  return sections.flatMap(section => section.items.map(item => ({ ...item, section: section.title, sectionId: section.id, short: section.short })));
}

const allItems = flattenItems();

function renderToc() {
  const anchors = [
    { id: 'top', label: 'Title Page' },
    { id: 'founding-credit', label: 'Founding Credit' },
    { id: 'library-anchor', label: 'Diagnostic Library' },
    { id: 'scorecard', label: 'Scoring Sheet' },
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
      <div class="disorder-meta"><span>${item.short}</span><span>${item.code}</span></div>
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

function renderScorecard() {
  if (!symptomPicker || !scoreResult) return;

  symptomPicker.innerHTML = allItems.map(item => {
    const selected = selectedSymptoms.includes(item.code);
    return `
      <button class="symptom-chip ${selected ? 'selected' : ''}" data-symptom="${item.code}">
        <strong>${item.name}</strong>
        <span>${item.summary}</span>
      </button>
    `;
  }).join('');

  symptomPicker.querySelectorAll('[data-symptom]').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.symptom;
      if (selectedSymptoms.includes(code)) {
        selectedSymptoms = selectedSymptoms.filter(x => x !== code);
      } else if (selectedSymptoms.length < 8) {
        selectedSymptoms = [...selectedSymptoms, code];
      }
      renderScorecard();
    });
  });

  if (selectedSymptoms.length !== 8) {
    scoreResult.innerHTML = `
      <div class="detail-placeholder">
        <div class="placeholder-mark">✶</div>
        <h4>${selectedSymptoms.length}/8 selected</h4>
        <p>Select exactly 8 symptoms to generate your fake clinical reading.</p>
      </div>`;
    return;
  }

  const chosen = selectedSymptoms.map(code => allItems.find(item => item.code === code)).filter(Boolean);
  const sectionCounts = chosen.reduce((acc, item) => {
    acc[item.section] = (acc[item.section] || 0) + 1;
    return acc;
  }, {});
  const topSection = Object.entries(sectionCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Generalized Contemporary Distress';

  const scoreSeed = selectedSymptoms.join('').split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) + topSection.length;
  const result = archetypes[scoreSeed % archetypes.length];
  const funniest = chosen.slice(0, 3).map(item => item.name);

  scoreResult.innerHTML = `
    <div class="score-reading">
      <div>
        <div class="score-kicker">Completely fake diagnostic reading</div>
        <div class="score-title">${result.title}</div>
      </div>
      <p class="score-blurb">${result.blurb}</p>
      <div class="score-pill-row">
        <span class="score-pill">Top cluster: ${topSection}</span>
        <span class="score-pill">Severity: theatrically moderate</span>
        <span class="score-pill">Prognosis: annoyingly treatable</span>
      </div>
      <div>
        <h5>Most incriminating selections</h5>
        <ul>${funniest.map(name => `<li>${name}</li>`).join('')}</ul>
      </div>
      <div>
        <h5>Totem assignment</h5>
        <p>${result.totem}</p>
      </div>
      <div>
        <h5>Clinical interpretation</h5>
        <p>${result.style}</p>
        <p>Secondary findings suggest a person of high sensitivity, decent taste, and a frankly comic commitment to making life harder than necessary. You are not uniquely doomed, but you are absolutely collaborating with the problem in ways that deserve gentle public shaming.</p>
      </div>
      <div>
        <h5>Recommended treatment plan</h5>
        <p>${result.treatment}</p>
      </div>
    </div>`;
}

search.addEventListener('input', renderList);

resetScorecard?.addEventListener('click', () => {
  selectedSymptoms = [];
  renderScorecard();
});

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
renderScorecard();
