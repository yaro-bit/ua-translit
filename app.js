'use strict';

const tra = {}, abc2 = {}, abc1 = {
  'а':'a','б':'b','в':'v','г':'g','ґ':"g'",'д':'d','е':'e','є':'je','ж':'zh','з':'z','и':'y','і':'i','ї':"i'",
  'й':'j','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h',
  'ц':'c','ч':'ch','ш':'sh','щ':'shh','ь':"'",'ю':'ju','я':'ja',
  'А':'A','Б':'B','В':'V','Г':'G','Ґ':"G'",'Д':'D','Е':'E','Є':'Je','Ж':'Zh','З':'Z','И':'Y','І':'I','Ї':"I'",
  'Й':'J','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Х':'H',
  'Ц':'C','Ч':'Ch','Ш':'Sh','Щ':'Shh','Ь':"''",'Ю':'Ju','Я':'Ja'
};

tra['a']=['й+','и+','Й+','И+','й','и','Й','И','','']; abc2['a']=['йа','иа','Йа','Иа','я','я','Я','Я','а','a'];
tra['b']=['','']; abc2['b']=['б','b'];
tra['v']=['','']; abc2['v']=['в','v'];
tra['g']=['','']; abc2['g']=['г','g'];
tra["'"]=['г+','і+','Г+','І+','ь+','г','і','Г','І','ь','','']; abc2["'"]=['гь','іь','Гь','Іь','ьь','ґ','ї','Ґ','Ї','Ь','ь',"'"];
tra['d']=['','']; abc2['d']=['д','d'];
tra['e']=['й+','и+','Й+','И+','й','и','Й','И','','']; abc2['e']=['йе','ие','Йе','Ие','є','є','Є','Є','е','e'];
tra['ö']=['','']; abc2['ö']=['є','ö'];
tra['h']=['сх+','Сх+','сх','Сх','з+','ц+','с+','ш+','З+','Ц+','С+','Ш+','з','ц','с','ш','З','Ц','С','Ш','',''];
abc2['h']=['схх','Схх','щ','Щ','зх','цх','сх','шх','Зх','Цх','Сх','Шх','ж','ч','ш','щ','Ж','Ч','Ш','Щ','х','h'];
tra['z']=['','']; abc2['z']=['з','z'];
tra['y']=['','']; abc2['y']=['и','y'];
tra['i']=['й+','Й+','й','Й','','']; abc2['i']=['йі','Йі','ї','Ї','і','i'];
tra['j']=['','']; abc2['j']=['й','j'];
tra['k']=['','']; abc2['k']=['к','k'];
tra['l']=['','']; abc2['l']=['л','l'];
tra['m']=['','']; abc2['m']=['м','m'];
tra['n']=['','']; abc2['n']=['н','n'];
tra['o']=['','']; abc2['o']=['о','o'];
tra['p']=['','']; abc2['p']=['п','p'];
tra['r']=['','']; abc2['r']=['р','r'];
tra['s']=['','']; abc2['s']=['с','s'];
tra['t']=['','']; abc2['t']=['т','t'];
tra['u']=['й+','и+','Й+','И+','й','и','Й','И','','']; abc2['u']=['йу','иу','Йу','Иу','ю','ю','Ю','Ю','у','u'];
tra['f']=['','']; abc2['f']=['ф','f'];
tra['x']=['','']; abc2['x']=['х','x'];
tra['c']=['','']; abc2['c']=['ц','c'];
tra['w']=['','']; abc2['w']=['ш','w'];
tra['q']=['','']; abc2['q']=['щ','q'];
tra['ü']=['','']; abc2['ü']=['ю','ü'];
tra['A']=['Й+','И+','Й','И','','']; abc2['A']=['ЙА','ИА','Я','Я','А','A'];
tra['B']=['','']; abc2['B']=['Б','B'];
tra['V']=['','']; abc2['V']=['В','V'];
tra['G']=['','']; abc2['G']=['Г','G'];
tra['D']=['','']; abc2['D']=['Д','D'];
tra['E']=['Й+','И+','Й','И','','']; abc2['E']=['ЙЕ','ИЕ','Є','Є','Е','E'];
tra['Ö']=['','']; abc2['Ö']=['Є','Ö'];
tra['H']=['СХ+','СХ','З+','Ц+','С+','Ш+','З','Ц','С','Ш','','']; abc2['H']=['СХХ','Щ','ЗХ','ЦХ','СХ','ШХ','Ж','Ч','Ш','Щ','Х','H'];
tra['Z']=['','']; abc2['Z']=['З','Z'];
tra['Y']=['','']; abc2['Y']=['И','Y'];
tra['I']=['Й+','Й','','']; abc2['I']=['ЙІ','Ї','І','I'];
tra['J']=['','']; abc2['J']=['Й','J'];
tra['K']=['','']; abc2['K']=['К','K'];
tra['L']=['','']; abc2['L']=['Л','L'];
tra['M']=['','']; abc2['M']=['М','M'];
tra['N']=['','']; abc2['N']=['Н','N'];
tra['O']=['','']; abc2['O']=['О','O'];
tra['P']=['','']; abc2['P']=['П','P'];
tra['R']=['','']; abc2['R']=['Р','R'];
tra['S']=['','']; abc2['S']=['С','S'];
tra['T']=['','']; abc2['T']=['Т','T'];
tra['U']=['Й+','И+','Й','И','','']; abc2['U']=['ЙУ','ИУ','Ю','Ю','У','U'];
tra['F']=['','']; abc2['F']=['Ф','F'];
tra['X']=['','']; abc2['X']=['Х','X'];
tra['C']=['','']; abc2['C']=['Ц','C'];
tra['W']=['','']; abc2['W']=['Ш','W'];
tra['Q']=['','']; abc2['Q']=['Щ','Q'];
tra['Ü']=['','']; abc2['Ü']=['Ю','Ü'];

function transSym2(txt) {
  const pre = txt.slice(0, -1), last = txt.slice(-1);
  const lat = tra[last], rus = abc2[last];
  if (lat) {
    for (let i = 0; i < lat.length; i++) {
      const pos = pre.length > lat[i].length ? pre.length - lat[i].length : 0;
      if (lat[i] === pre.slice(pos)) return pre.slice(0, pre.length - lat[i].length) + rus[i];
    }
  }
  return txt;
}
function transStr2(s) { let o = ''; for (let i = 0; i < s.length; i++) o = transSym2(o + s[i]); return o; }
function transSym1(s) { return abc1[s] !== undefined ? abc1[s] : s; }
function transStr1(s) { let o = ''; for (let i = 0; i < s.length; i++) o += transSym1(s[i]); return o; }

const CHARS = [
  ['a','а'],['b','б'],['v','в'],['g','г'],["g'",'ґ'],['d','д'],['e','е'],['je/ö','є'],
  ['zh','ж'],['z','з'],['y','и'],['i','і'],["i'/ji",'ї'],['j','й'],['k','к'],['l','л'],
  ['m','м'],['n','н'],['o','о'],['p','п'],['r','р'],['s','с'],['t','т'],['u','у'],
  ['f','ф'],['h/x','х'],['c','ц'],['ch','ч'],['sh/w','ш'],['shh/q','щ'],["'",'ь'],['ju/ü','ю'],['ja','я']
];

const ta       = document.getElementById('ta');
const overlay  = document.getElementById('lt-overlay');
const dropdown = document.getElementById('lt-dropdown');

let mode            = 'lat2cyr';
let ltMatches       = [];
let renderedMatches = [];
let ltIgnored       = new Set();
let debounceTimer = null;
const undoStack     = [];
const STORAGE_KEY   = 'ua-translit-theme';
const CHUNK_SIZE    = 400;

function storageGet(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
function storageSet(key, val) { try { localStorage.setItem(key, val); } catch {} }

function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light');
  document.getElementById('theme-dark').className  = 'segment-btn' + (t === 'dark'  ? ' active' : '');
  document.getElementById('theme-light').className = 'segment-btn' + (t === 'light' ? ' active' : '');
  storageSet(STORAGE_KEY, t);
}
function initTheme() {
  const saved = storageGet(STORAGE_KEY, null);
  if (saved) { setTheme(saved); }
  else { setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
}

function renderCharMap() {
  const grid = document.getElementById('char-grid');
  grid.innerHTML = '';
  const isLat = mode === 'lat2cyr';
  CHARS.forEach(([lat, cyr]) => {
    const cell = document.createElement('div');
    cell.className = 'char-cell';
    cell.innerHTML = `<span class="char-sub">${isLat ? lat : cyr}</span><span class="char-main">${isLat ? cyr : lat}</span>`;
    cell.addEventListener('click', () => insertChar(isLat ? cyr : lat));
    grid.appendChild(cell);
  });
}

function setMode(m) {
  mode = m;
  document.getElementById('btn-lat2cyr').className = 'segment-btn' + (m === 'lat2cyr' ? ' active' : '');
  document.getElementById('btn-cyr2lat').className = 'segment-btn' + (m === 'cyr2lat' ? ' active' : '');
  document.getElementById('editor-lbl').textContent = m === 'lat2cyr' ? 'Input Buffer (Latin)' : 'Input Buffer (Cyrillic)';
  ta.placeholder = m === 'lat2cyr' ? 'Pryvit, svite...' : 'Привіт, світе...';
  renderCharMap();
  closeDropdown();
  resetGrammarState();
  ta.focus();
}

function saveUndo(v) {
  const last = undoStack.length ? undoStack[undoStack.length - 1] : '';
  if (last !== v) { undoStack.push(v); if (undoStack.length > 100) undoStack.shift(); }
}

function updateCount() { document.getElementById('ccount').textContent = ta.value.length; }
function setStatus(state, msg) {
  document.getElementById('grammar-dot').className = 'status-dot' + (state ? ' ' + state : '');
  document.getElementById('grammar-msg').textContent = msg;
}

function getLang() { return /[а-яіїєґА-ЯІЇЄҐ]/.test(ta.value) ? 'uk' : 'en-US'; }

function resetGrammarState() {
  setStatus('', 'correction standby');
  ltMatches = []; renderedMatches = [];
  overlay.innerHTML = '';
}

function triggerGrammarCheck() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const text = ta.value.trim();
    if (!text) { resetGrammarState(); return; }
    setStatus('checking', 'Processing chunks...');
    const chunks = text.match(new RegExp(`.{1,${CHUNK_SIZE}}(\\s|$)`, 'g')) || [text];
    processChunks(chunks);
  }, 400);
}

async function processChunks(chunks) {
  let allMatches = [];
  let currentOffset = 0;

  for (const chunk of chunks) {
    try {
      const params = new URLSearchParams({ text: chunk, language: getLang(), enabledOnly: 'false' });
      const res = await fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });
      const data = await res.json();
      if (data.matches) {
        const adjusted = data.matches.map(m => ({ ...m, offset: m.offset + currentOffset }));
        allMatches.push(...adjusted);
      }
      currentOffset += chunk.length;
    } catch (e) {
      console.error(e);
    }
  }

  ltMatches = allMatches.filter(m => !ltIgnored.has(matchKey(m)));
  renderOverlay();
  const n = ltMatches.length;
  setStatus(n === 0 ? 'clean' : 'errors', n === 0 ? '0 Anomalies' : n + ' Anomalies');
}

function matchKey(m) { return m.offset + ':' + m.length + ':' + m.message; }
function escHtml(s)  { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function renderOverlay() {
  if (!ltMatches.length) { overlay.innerHTML = ''; renderedMatches = []; return; }
  const text   = ta.value;
  const sorted = [...ltMatches].sort((a, b) => a.offset - b.offset);
  renderedMatches = [];
  let html   = '';
  let cursor = 0;
  for (const m of sorted) {
    if (m.offset < cursor) continue;
    html += escHtml(text.slice(cursor, m.offset));
    const idx = renderedMatches.length;
    renderedMatches.push(m);
    html += '<span class="lt-error" data-idx="' + idx + '">' + escHtml(text.slice(m.offset, m.offset + m.length)) + '</span>';
    cursor = m.offset + m.length;
  }
  html += escHtml(text.slice(cursor));
  overlay.innerHTML = html;
  syncScroll();
}

function syncScroll() { overlay.scrollTop = ta.scrollTop; overlay.scrollLeft = ta.scrollLeft; }

// Use direct text manipulation via input events instead of breaking native key hooks
ta.addEventListener('input', (e) => {
  if (e.inputType === 'insertText' && e.data) {
    const p1 = ta.selectionStart;
    const b = ta.value.slice(0, p1 - e.data.length);
    const a = ta.value.slice(p1);

    let res;
    if (mode === 'cyr2lat') {
      res = b + transStr1(e.data);
    } else {
      res = transStr2(b + e.data);
    }

    ta.value = res + a;
    ta.setSelectionRange(res.length, res.length);
  }

  updateCount();
  saveUndo(ta.value);
  closeDropdown();
  resetGrammarState();
});

ta.addEventListener('scroll', syncScroll);

function openDropdown(match, anchorRect) {
  dropdown.innerHTML = '';
  const sugs = (match.replacements || []).slice(0, 6);
  if (sugs.length) {
    sugs.forEach(r => {
      const btn = document.createElement('button');
      btn.className = 'drop-item';
      btn.textContent = r.value;
      btn.addEventListener('mousedown', e => { e.preventDefault(); applySuggestion(match, r.value); });
      dropdown.appendChild(btn);
    });
  } else {
    const empty = document.createElement('div');
    empty.className = 'drop-item ignore';
    empty.textContent = 'No suggestions available';
    dropdown.appendChild(empty);
  }

  const sep = document.createElement('div');
  sep.className = 'drop-sep';
  dropdown.appendChild(sep);

  const ign = document.createElement('button');
  ign.className = 'drop-item ignore';
  ign.textContent = 'Ignore';
  ign.addEventListener('mousedown', e => { e.preventDefault(); ignoreMatch(match); });
  dropdown.appendChild(ign);

  dropdown.style.display = 'block';
  const dw = dropdown.offsetWidth  || 200;
  const dh = dropdown.offsetHeight || 160;
  let top  = anchorRect.bottom + window.scrollY + 4;
  let left = anchorRect.left + window.scrollX;
  if (top  + dh > window.innerHeight + window.scrollY - 8) top  = anchorRect.top + window.scrollY - dh - 4;
  if (left + dw > window.innerWidth  + window.scrollX - 8) left = window.innerWidth + window.scrollX - dw - 8;
  if (left < 8) left = 8;
  dropdown.style.top  = top  + 'px';
  dropdown.style.left = left + 'px';
}

function closeDropdown() { dropdown.style.display = 'none'; }

ta.addEventListener('mouseup', () => {
  const pos = ta.selectionStart;
  let foundIdx = -1;
  for (let i = 0; i < renderedMatches.length; i++) {
    const m = renderedMatches[i];
    if (pos >= m.offset && pos < m.offset + m.length) { foundIdx = i; break; }
  }
  if (foundIdx === -1) { closeDropdown(); return; }
  const span = overlay.querySelector('.lt-error[data-idx="' + foundIdx + '"]');
  const rect = span ? span.getBoundingClientRect() : ta.getBoundingClientRect();
  openDropdown(renderedMatches[foundIdx], rect);
});

document.addEventListener('click', (e) => {
  if (e.target.closest('#lt-dropdown') || e.target === ta) return;
  closeDropdown();
});

ta.addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.preventDefault(); closeDropdown(); return; }
  if (e.ctrlKey && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    if (undoStack.length > 1) {
      undoStack.pop();
      ta.value = undoStack[undoStack.length - 1] || '';
      updateCount();
      resetGrammarState();
    }
  }
});

function convertAll(m) {
  const val = m === 'cyr2lat' ? transStr1(ta.value) : transStr2(ta.value);
  saveUndo(ta.value); ta.value = val; updateCount();
  resetGrammarState(); ta.focus();
}

function insertChar(c) {
  const p  = ta.selectionStart;
  const nv = ta.value.slice(0, p) + c + ta.value.slice(ta.selectionEnd);
  saveUndo(ta.value); ta.value = nv; updateCount(); resetGrammarState();
  requestAnimationFrame(() => { ta.setSelectionRange(p + c.length, p + c.length); ta.focus(); });
}

async function copyText() {
  try { await navigator.clipboard.writeText(ta.value); }
  catch { ta.select(); document.execCommand('copy'); }
  const t = document.getElementById('toast');
  t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 1700);
}

function clearText() {
  saveUndo(ta.value); ta.value = ''; updateCount();
  ltMatches = []; renderedMatches = []; ltIgnored.clear();
  renderOverlay(); closeDropdown(); setStatus('', 'correction standby'); ta.focus();
}

function ignoreMatch(match) {
  ltIgnored.add(matchKey(match));
  ltMatches = ltMatches.filter(m => matchKey(m) !== matchKey(match));
  renderOverlay();
  const n = ltMatches.length;
  setStatus(n === 0 ? 'clean' : 'errors', n === 0 ? '0 Anomalies' : n + ' Anomalies');
  closeDropdown(); ta.focus();
}

function applySuggestion(match, value) {
  const before = ta.value.slice(0, match.offset);
  const after  = ta.value.slice(match.offset + match.length);
  saveUndo(ta.value);
  ta.value = before + value + after;
  updateCount(); closeDropdown();
  ltIgnored.add(matchKey(match));
  ltMatches = ltMatches.filter(m => matchKey(m) !== matchKey(match));
  renderOverlay();
  triggerGrammarCheck();
  requestAnimationFrame(() => {
    ta.setSelectionRange(before.length + value.length, before.length + value.length);
    ta.focus();
  });
}

// Event bindings (previously inline onclick attributes in the HTML)
document.getElementById('btn-lat2cyr').addEventListener('click', () => setMode('lat2cyr'));
document.getElementById('btn-cyr2lat').addEventListener('click', () => setMode('cyr2lat'));
document.getElementById('theme-dark').addEventListener('click', () => setTheme('dark'));
document.getElementById('theme-light').addEventListener('click', () => setTheme('light'));
document.getElementById('btn-to-cyr').addEventListener('click', () => convertAll('lat2cyr'));
document.getElementById('btn-to-lat').addEventListener('click', () => convertAll('cyr2lat'));
document.getElementById('btn-grammar').addEventListener('click', triggerGrammarCheck);
document.getElementById('btn-copy').addEventListener('click', copyText);
document.getElementById('btn-clear').addEventListener('click', clearText);

initTheme();
renderCharMap();
saveUndo('');
updateCount();
setMode('lat2cyr');
ta.focus();
