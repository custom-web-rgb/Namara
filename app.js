/* ═══════════════════════════════════════
   NAMEURA — app.js
   100% Offline — No API Key Needed!
═══════════════════════════════════════ */

// ── NAME DATABASE ──
const NAME_DB = {
  fidha:  { origin:'Arabic', meaning:'Silver — pure and precious soul', traits:['Graceful','Generous','Warm-hearted','Creative','Loyal'], luckyColor:'Silver', luckyNumber:'7', luckyStone:'Moonstone', element:'Water', famous:['Fidha Al-Marzouqi — Scholar','Fidha Hassan — Artist','Fidha Noor — Poet'], quote:'Like silver, she shines brightest when others need her light.' },
  sherin: { origin:'Arabic / Persian', meaning:'Sweet and gentle as morning dew', traits:['Gentle','Kind','Empathetic','Artistic','Thoughtful'], luckyColor:'Rose Gold', luckyNumber:'3', luckyStone:'Rose Quartz', element:'Air', famous:['Sherin Mathews — Activist','Sherin Amara — Writer','Sherin Nour — Leader'], quote:'Sweetness is not weakness; it is the quiet power of a tender soul.' },
  layla:  { origin:'Arabic', meaning:'Night — mysterious beauty of darkness', traits:['Passionate','Mysterious','Intuitive','Bold','Romantic'], luckyColor:'Midnight Blue', luckyNumber:'9', luckyStone:'Sapphire', element:'Spirit', famous:['Layla Ali — Champion','Layla Hassan — Author','Layla El Haddad — Journalist'], quote:'She is the night itself — vast, beautiful, and full of stars.' },
  amara:  { origin:'African / Sanskrit', meaning:'Grace that lives forever', traits:['Strong','Graceful','Resilient','Wise','Nurturing'], luckyColor:'Amber', luckyNumber:'4', luckyStone:'Tiger Eye', element:'Earth', famous:['Amara Nwosu — Innovator','Amara La Negra — Singer','Amara Kanu — Activist'], quote:'True grace is not perfection — it is rising, always rising.' },
  sarah:  { origin:'Hebrew', meaning:'Princess — born to lead with love', traits:['Noble','Compassionate','Determined','Elegant','Faithful'], luckyColor:'Pearl White', luckyNumber:'1', luckyStone:'Pearl', element:'Water', famous:['Sarah Jessica Parker — Actress','Sarah Obama — Matriarch','Sarah McLachlan — Musician'], quote:'Leadership is love made visible in every small act of kindness.' },
  sara:   { origin:'Hebrew', meaning:'Princess of noble heart', traits:['Noble','Compassionate','Determined','Elegant','Faithful'], luckyColor:'Pearl White', luckyNumber:'1', luckyStone:'Pearl', element:'Water', famous:['Sara Ali Khan — Actress','Sara Bareilles — Singer','Sara Blakely — Entrepreneur'], quote:'A noble heart needs no crown to reign with love.' },
  arjun:  { origin:'Sanskrit', meaning:'Bright warrior of pure white light', traits:['Brave','Disciplined','Honest','Strategic','Protective'], luckyColor:'Gold', luckyNumber:'1', luckyStone:'Ruby', element:'Fire', famous:['Arjun Kapoor — Actor','Arjun Rampal — Star','Arjun Tendulkar — Cricketer'], quote:'True strength is not the absence of fear, but the courage to act despite it.' },
  sofia:  { origin:'Greek', meaning:'Wisdom that lights the world', traits:['Wise','Creative','Curious','Charming','Perceptive'], luckyColor:'Lavender', luckyNumber:'5', luckyStone:'Amethyst', element:'Air', famous:['Sofia Vergara — Actress','Sofia Coppola — Director','Sofia Richie — Icon'], quote:'Wisdom is not what you know — it is how gently you share it.' },
  kai:    { origin:'Hawaiian / Japanese', meaning:'Ocean — free and endlessly deep', traits:['Free-spirited','Adventurous','Calm','Creative','Independent'], luckyColor:'Teal', luckyNumber:'6', luckyStone:'Aquamarine', element:'Water', famous:['Kai Havertz — Footballer','Kai Greene — Champion','Kai Anderson — Artist'], quote:'Like the ocean, the deepest souls make the least noise.' },
  priya:  { origin:'Sanskrit', meaning:'Beloved — cherished by all hearts', traits:['Loving','Warm','Joyful','Sociable','Caring'], luckyColor:'Coral', luckyNumber:'2', luckyStone:'Coral Stone', element:'Fire', famous:['Priyanka Chopra — Global Star','Priya Varrier — Actress','Priya Anand — Performer'], quote:'To be beloved is to have touched the world with your warmth.' },
  aisha:  { origin:'Arabic', meaning:'She who is full of life and vitality', traits:['Vibrant','Intelligent','Witty','Confident','Inspiring'], luckyColor:'Turquoise', luckyNumber:'8', luckyStone:'Turquoise', element:'Air', famous:['Aisha Tyler — Comedian','Aisha Dee — Actress','Aisha Khan — Star'], quote:'Life does not happen to her — she happens to life.' },
  zara:   { origin:'Arabic / Hebrew', meaning:'Radiant flower blooming at dawn', traits:['Radiant','Stylish','Bold','Ambitious','Magnetic'], luckyColor:'Fuchsia', luckyNumber:'3', luckyStone:'Garnet', element:'Fire', famous:['Zara Larsson — Singer','Zara Phillips — Royalty','Zara Ahmed — Leader'], quote:'She blooms not for the world, but because blooming is her nature.' },
  maya:   { origin:'Sanskrit / Hebrew', meaning:'Illusion and dream — creator of worlds', traits:['Imaginative','Mystical','Intelligent','Empathetic','Deep'], luckyColor:'Indigo', luckyNumber:'7', luckyStone:'Lapis Lazuli', element:'Spirit', famous:['Maya Angelou — Poet','Maya Rudolph — Actress','Maya Ali — Star'], quote:'In her dreams live entire universes yet to be born.' },
  noor:   { origin:'Arabic', meaning:'Light — illuminating every darkness', traits:['Radiant','Pure','Spiritual','Peaceful','Inspiring'], luckyColor:'Golden Yellow', luckyNumber:'9', luckyStone:'Diamond', element:'Spirit', famous:['Noor Inayat Khan — Hero','Noor Tagouri — Journalist','Noor Al Hussein — Queen'], quote:'She carries light not as a gift, but as a way of being.' },
  ali:    { origin:'Arabic', meaning:'Exalted — noble above all others', traits:['Noble','Courageous','Generous','Wise','Loyal'], luckyColor:'Deep Gold', luckyNumber:'1', luckyStone:'Citrine', element:'Fire', famous:['Muhammad Ali — Legend','Ali ibn Abi Talib — Scholar','Ali Zafar — Artist'], quote:'True nobility is measured not by rank, but by the size of your heart.' },
  omar:   { origin:'Arabic', meaning:'Flourishing — long life and prosperity', traits:['Wise','Decisive','Generous','Visionary','Strong'], luckyColor:'Royal Blue', luckyNumber:'8', luckyStone:'Blue Sapphire', element:'Air', famous:['Omar Sharif — Actor','Omar Sy — Star','Omar Khayyam — Poet'], quote:'A life well lived is not counted in years, but in the lives you have touched.' },
  liam:   { origin:'Irish', meaning:'Strong protector with iron will', traits:['Protective','Determined','Loyal','Charismatic','Brave'], luckyColor:'Navy Blue', luckyNumber:'1', luckyStone:'Onyx', element:'Earth', famous:['Liam Neeson — Actor','Liam Hemsworth — Star','Liam Payne — Singer'], quote:'The strongest walls are built around the ones we love.' },
  emma:   { origin:'Germanic', meaning:'Whole — complete and universal soul', traits:['Wholesome','Intelligent','Warm','Reliable','Creative'], luckyColor:'Soft Peach', luckyNumber:'2', luckyStone:'Opal', element:'Earth', famous:['Emma Watson — Activist','Emma Stone — Actress','Emma Roberts — Star'], quote:'Completeness is not perfection — it is peace with who you are.' },
  luna:   { origin:'Latin', meaning:'Moon — mystical light in the dark', traits:['Mystical','Intuitive','Gentle','Creative','Dreamy'], luckyColor:'Silver Blue', luckyNumber:'7', luckyStone:'Moonstone', element:'Water', famous:['Luna Maya — Actress','Luna Blaise — Singer','Luna Lovegood — Icon'], quote:'Even in the darkest sky, she finds a way to glow.' },
  leo:    { origin:'Latin', meaning:'Lion — born to lead and inspire', traits:['Confident','Generous','Passionate','Bold','Loyal'], luckyColor:'Warm Gold', luckyNumber:'1', luckyStone:'Peridot', element:'Fire', famous:['Leonardo DiCaprio — Actor','Leo Messi — Champion','Leo Tolstoy — Author'], quote:'A lion does not need the forest to know it is king.' },
  adam:   { origin:'Hebrew', meaning:'Earth — first and eternal soul', traits:['Grounded','Strong','Dependable','Honest','Protective'], luckyColor:'Forest Green', luckyNumber:'4', luckyStone:'Jade', element:'Earth', famous:['Adam Sandler — Comedian','Adam Driver — Actor','Adam Smith — Economist'], quote:'The strongest foundations are built not of stone, but of integrity.' },
  nina:   { origin:'Spanish / Slavic', meaning:'Grace — little dreamer with big heart', traits:['Dreamy','Artistic','Sensitive','Compassionate','Intuitive'], luckyColor:'Soft Violet', luckyNumber:'6', luckyStone:'Tanzanite', element:'Spirit', famous:['Nina Simone — Legend','Nina Dobrev — Actress','Nina Agdal — Model'], quote:'The dreamers are the ones who quietly change the world.' },
  ryan:   { origin:'Irish', meaning:'Little king — great things in small packages', traits:['Energetic','Witty','Friendly','Ambitious','Adaptable'], luckyColor:'Emerald', luckyNumber:'5', luckyStone:'Emerald', element:'Air', famous:['Ryan Reynolds — Actor','Ryan Gosling — Star','Ryan Holiday — Author'], quote:'Greatness is not about size — it is about the fire within.' },
};

// ── POOLS FOR UNKNOWN NAMES ──
const TRAIT_POOL = [
  ['Creative','Intuitive','Empathetic','Resilient','Visionary'],
  ['Determined','Loyal','Thoughtful','Generous','Warm-hearted'],
  ['Adventurous','Curious','Optimistic','Brave','Independent'],
  ['Wise','Calm','Spiritual','Nurturing','Graceful'],
  ['Ambitious','Charismatic','Honest','Passionate','Magnetic'],
  ['Gentle','Artistic','Sensitive','Imaginative','Deep'],
  ['Bold','Confident','Inspiring','Strong','Protective'],
  ['Joyful','Sociable','Kind','Vibrant','Charming'],
];
const ORIGINS  = ['Arabic','Hebrew','Sanskrit','Latin','Greek','Persian','Celtic','African','Japanese','Turkish','Spanish','Irish'];
const COLORS   = ['Sapphire Blue','Rose Gold','Emerald Green','Amber','Violet','Pearl White','Deep Teal','Warm Coral','Golden Yellow','Midnight Blue','Soft Lavender','Ruby Red'];
const STONES   = ['Amethyst','Rose Quartz','Sapphire','Moonstone','Emerald','Pearl','Citrine','Turquoise','Garnet','Opal','Diamond','Lapis Lazuli'];
const ELEMENTS = ['Fire','Water','Earth','Air','Spirit'];
const QUOTES   = [
  'Your name is not just a word — it is the first story ever told about you.',
  'Born with purpose, destined to leave the world more beautiful than you found it.',
  'The universe whispered your name long before you were born.',
  'Not all who shine are stars — some are souls too bright to contain.',
  'A name spoken with love becomes a prayer.',
  'The meaning of your name is written in everything you touch.',
  'You carry within you the strength of every soul who bore this name before.',
  'Your name is a compass — it always points toward your true self.',
  'To know your name is to know the direction of your soul.',
  'Some names are not given — they are earned, breath by breath.',
];

// ── HASH (keeps results consistent per name) ──
function hashName(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
  return Math.abs(h);
}

// ── DATA GENERATOR — no API needed ──
function fetchNameData(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      const key = name.toLowerCase().replace(/\s+/g, '');
      if (NAME_DB[key]) { resolve(NAME_DB[key]); return; }

      const h = hashName(key);
      const femSuffix = ['a','i','e','y','ah','ra','na','ia','la','in'];
      const isFem = femSuffix.some(s => key.endsWith(s));
      const meanings = isFem
        ? ['Radiant soul lighting the world','Grace that endures through every storm','Beloved heart born for great things','Gentle strength wrapped in beauty','A shining star on the path of life']
        : ['Noble spirit built to endure','Brave heart destined for greatness','Steadfast soul of honour and light','A visionary born ahead of his time','Strength that moves mountains silently'];

      const cap = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

      resolve({
        origin:      ORIGINS[h % ORIGINS.length],
        meaning:     meanings[h % meanings.length],
        traits:      TRAIT_POOL[h % TRAIT_POOL.length],
        luckyColor:  COLORS[h % COLORS.length],
        luckyNumber: String((h % 9) + 1),
        luckyStone:  STONES[h % STONES.length],
        element:     ELEMENTS[h % ELEMENTS.length],
        famous:      [`${cap} — Celebrated Leader`, `${cap} — Renowned Artist`, `${cap} — Inspiring Visionary`],
        quote:       QUOTES[h % QUOTES.length],
      });
    }, 1200);
  });
}

// ── DOM REFERENCES ──
const nameInput    = document.getElementById('nameInput');
const generateBtn  = document.getElementById('generateBtn');
const loadingState = document.getElementById('loadingState');
const loadingName  = document.getElementById('loadingName');
const cardSection  = document.getElementById('cardSection');
const errorState   = document.getElementById('errorState');
const errorMessage = document.getElementById('errorMessage');
const cardName     = document.getElementById('cardName');
const cardOrigin   = document.getElementById('cardOrigin');
const cardMeaning  = document.getElementById('cardMeaning');
const cardTraits   = document.getElementById('cardTraits');
const cardColor    = document.getElementById('cardColor');
const cardNumber   = document.getElementById('cardNumber');
const cardStone    = document.getElementById('cardStone');
const cardElement  = document.getElementById('cardElement');
const cardFamous   = document.getElementById('cardFamous');
const cardQuote    = document.getElementById('cardQuote');

// ── EVENTS ──
generateBtn.addEventListener('click', generateCard);
nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') generateCard(); });
document.querySelectorAll('.example-chip').forEach(c => {
  c.addEventListener('click', () => { nameInput.value = c.dataset.name; generateCard(); });
});
document.getElementById('downloadBtn').addEventListener('click', downloadCard);
document.getElementById('shareBtn').addEventListener('click', shareCard);
document.getElementById('resetBtn').addEventListener('click', resetApp);
document.getElementById('errorResetBtn').addEventListener('click', resetApp);

// ── GENERATE ──
async function generateCard() {
  const name = nameInput.value.trim();
  if (!name) { nameInput.focus(); shakeInput(); return; }
  setState('loading');
  loadingName.textContent = `"${name}"`;
  try {
    const data = await fetchNameData(name);
    populateCard(data, name);
    setState('card');
  } catch (err) {
    errorMessage.textContent = 'Something went wrong. Please try again.';
    setState('error');
  }
}

// ── POPULATE ──
function populateCard(data, name) {
  cardName.textContent    = capitalize(name);
  cardOrigin.textContent  = data.origin || 'Universal';
  cardMeaning.textContent = `"${data.meaning || 'A soul full of wonder'}"`;

  cardTraits.innerHTML = '';
  (data.traits || []).slice(0, 5).forEach(t => {
    const s = document.createElement('span');
    s.className = 'trait-tag'; s.textContent = t;
    cardTraits.appendChild(s);
  });

  cardColor.textContent  = data.luckyColor  || '—';
  cardNumber.textContent = data.luckyNumber || '—';
  cardStone.textContent  = data.luckyStone  || '—';

  const emojiMap = { fire:'🔥 Fire', water:'💧 Water', earth:'🌿 Earth', air:'💨 Air', spirit:'✨ Spirit' };
  const el = (data.element || '').toLowerCase();
  cardElement.textContent = emojiMap[el] || data.element || '✨ Spirit';

  cardFamous.innerHTML = '';
  (data.famous || []).slice(0, 3).forEach(p => {
    const d = document.createElement('div');
    d.className = 'famous-item'; d.textContent = p;
    cardFamous.appendChild(d);
  });

  cardQuote.textContent = data.quote || 'Born to shine in your own unique way.';
}

// ── DOWNLOAD ──
async function downloadCard() {
  const card = document.getElementById('nameCard');
  const name = cardName.textContent || 'name-card';
  if (!window.html2canvas) { showToast('Loading...'); await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'); }
  showToast('Preparing your card...');
  try {
    const canvas = await html2canvas(card, { scale: 2, backgroundColor: null, useCORS: true, logging: false });
    const link = document.createElement('a');
    link.download = `${name.toLowerCase()}-nameura-card.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('✦ Card downloaded!');
  } catch (e) { showToast('Download failed. Try a screenshot instead.'); }
}

// ── SHARE ──
async function shareCard() {
  const name = cardName.textContent || 'my';
  const meaning = cardMeaning.textContent || '';
  const text = `✦ My name "${name}" means ${meaning}\n\nDiscover yours at nameura.app`;
  if (navigator.share) {
    try { await navigator.share({ title: 'My Name Card — Nameura', text }); }
    catch (e) { if (e.name !== 'AbortError') copyToClipboard(text); }
  } else { copyToClipboard(text); }
}

// ── RESET ──
function resetApp() { setState('search'); nameInput.value = ''; nameInput.focus(); }

// ── STATE ──
function setState(state) {
  loadingState.classList.add('hidden');
  cardSection.classList.add('hidden');
  errorState.classList.add('hidden');
  generateBtn.disabled = false;
  if      (state === 'loading') { loadingState.classList.remove('hidden'); generateBtn.disabled = true; }
  else if (state === 'card')    { cardSection.classList.remove('hidden'); }
  else if (state === 'error')   { errorState.classList.remove('hidden'); }
}

// ── HELPERS ──
function capitalize(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
function shakeInput() {
  nameInput.style.outline = '2px solid #f472b6';
  setTimeout(() => { nameInput.style.outline = ''; }, 600);
}
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showToast('✦ Copied to clipboard!'))
    .catch(() => showToast('Could not copy. Try manually.'));
}
function loadScript(src) {
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}