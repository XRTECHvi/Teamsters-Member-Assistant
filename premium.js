'use strict';
// V9 additions. Personal images, preferences, and conversations live inside the existing encrypted vault.
const PDEFAULT={theme:'Midnight',accent:'#f7ce6b',text:100,glass:true,shimmer:false,animate:true,haptic:false,splash:false,reduced:false,stats:true,avatar:true,privacy:false,bgOn:false,bgScope:'All pages',brightness:85,darkness:35,blur:3,opacity:88,bgX:50,bgY:50,bgZoom:100,avatarX:50,avatarY:50,avatarZoom:100,remember:false,backupReminder:true};
let activeChat=null,temporaryChat=[],pendingChat=null,splashShown=false;
const prefs=()=>({...PDEFAULT,theme:localStorage.getItem('memberTheme')==='light'?'Light':'Midnight',text:localStorage.getItem('memberLarge')==='1'?115:100,...(state?.appearance||{})});
const L=(s)=>tr(s), safeColor=s=>/^#[0-9a-f]{6}$/i.test(s)?s:PDEFAULT.accent;
const clamp=(n,min,max)=>Math.min(max,Math.max(min,Number(n)||0));
function pictureURL(s){return typeof s==='string'&&/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(s)?s:''}
function paintPremium(p=prefs(), preview=false){const b=document.body,root=document.documentElement;let theme=p.theme==='Automatic system appearance'?(matchMedia('(prefers-color-scheme: light)').matches?'Light':'Dark'):p.theme;b.classList.toggle('light',theme==='Light');b.classList.toggle('darkplain',theme==='Dark');b.classList.toggle('large',false);b.classList.toggle('glass-on',!!p.glass);b.classList.toggle('quiet',!!p.reduced||!p.animate);b.classList.toggle('shimmer',!!p.shimmer&&!p.reduced);root.style.setProperty('--p-text',`${clamp(p.text,90,130)}%`);root.style.setProperty('--p-accent',safeColor(p.accent));root.style.setProperty('--p-alpha',clamp(p.opacity,85,100)/100);let bg=$('personalWall'),img=state&&p.bgOn&&pictureURL(p.background)&&(preview||p.bgScope==='All pages'||tab==='Home');bg.hidden=!img;bg.style.backgroundImage=img?`url("${pictureURL(p.background)}")`:'';bg.style.backgroundPosition=`${clamp(p.bgX,0,100)}% ${clamp(p.bgY,0,100)}%`;bg.style.transform=`scale(${clamp(p.bgZoom,100,200)/100})`;bg.style.transformOrigin=`${clamp(p.bgX,0,100)}% ${clamp(p.bgY,0,100)}%`;bg.style.filter=`brightness(${clamp(p.brightness,20,120)}%) blur(${clamp(p.blur,0,20)}px)`;$('wallShade').hidden=!img;$('wallShade').style.background=`rgba(0,0,0,${clamp(p.darkness,0,85)/100})`;b.classList.toggle('has-wall',!!img);}
function premiumAfterRender(){paintPremium();let p=prefs();if(state&&!splashShown){splashShown=true;if(p.splash&&!p.reduced&&!matchMedia('(prefers-reduced-motion: reduce)').matches){let e=$('splash9');e.hidden=false;setTimeout(()=>e.hidden=true,950)}}if(tab==='Home'&&state){let el=$('avatar9');if(el&&p.avatar&&pictureURL(p.profileImage)){avatarPaint9(el,p);}}}
function avatarPaint9(el,p){el.replaceChildren();if(!pictureURL(p.profileImage)){el.textContent=initials();return}let im=document.createElement('img');im.src=p.profileImage;im.alt='';im.style.objectPosition=`${clamp(p.avatarX,0,100)}% ${clamp(p.avatarY,0,100)}%`;im.style.transform=`scale(${clamp(p.avatarZoom,100,200)/100})`;im.style.transformOrigin=`${clamp(p.avatarX,0,100)}% ${clamp(p.avatarY,0,100)}%`;el.append(im)}
function initials(){return (state?.profile?.name||'Member').trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase()||'M'}
function premiumHome(){let p=prefs(),s=state, name=s.profile.name?.trim().split(/\s+/)[0];let active=s.drafts.filter(d=>d.status!=='Resolved / closed').length, count=s.events.filter(e=>['Confirmed deadline','Grievance follow-up'].includes(e.type)&&e.date>=today()).length;let contact=s.profile.repName&&!p.privacy?`<section class="panel steward9"><h3>${L('My steward')}</h3><b>${esc(s.profile.repName)}</b><div class="actions">${repLinks()}</div></section>`:'';return `<section class="welcome9 panel"><div><div class="eyebrow">${L('YOUR PERSONAL UNION TOOLKIT')}</div><h2>${name&&!p.privacy?esc(L('Welcome back')+', '+name+'!'):L('Welcome back')+'!'}</h2><p>${L('Your union. Your rights. Your voice.')}</p></div>${p.avatar&&!p.privacy?`<button id="avatar9" class="avatar9" data-go="Appearance" aria-label="${L('Profile image')}">${esc(initials())}</button>`:''}</section><button class="ai-feature" data-go="Member AI"><div class="ai-emblem">${icon('Member AI')}</div><div><span class="section-kicker">MEMBER AI</span><strong>${L('Do I have a case?')}</strong><small>${L('Check an issue or ask a contract question.')}</small></div><span class="ai-arrow">→</span></button><section class="quick-rights"><div class="quick-icon">${icon('Rights')}</div><div><div class="section-kicker">${L('KNOW YOUR RIGHTS')}</div><h3>${L('Meeting with management?')}</h3><p>${L('Request union representation.')}</p></div><button data-go="Rights" aria-label="${L('Emergency Weingarten rights')}">→</button></section>${p.stats&&!p.privacy?`<h2>${L('Your activity')}</h2><div class="stats9">${[['Grievance',active,'Grievances'],['Incident Log',s.incidents.length,'Incidents'],['Calendar',count,'Deadlines']].map(([t,n,l])=>`<button class="panel" data-go="${t}"><strong>${n}</strong><small>${L(l)}</small></button>`).join('')}</div>${deadlineSummary()}`:''}${contact}<div class="section-head"><h2>${L('Quick actions')}</h2><small>Local 166</small></div><div class="grid home-grid">${tile('Start a grievance','＋','Build a draft for your rep','Grievance')}${tile('Incident Log','●','Record a workplace incident','Incident Log')}${tile('My contract','▣','Built-in contract & private documents','Library')}${tile('Find my rep','☎','Stewards & business agents','Contacts')}${tile('My calendar','◷','Dates and follow-ups','Calendar')}${tile('Paycheck audit','＄','Compare expected and paid','Paycheck')}</div><button class="setting9 union-resource9" data-go="Resources"><span class="union-resource-icon9">${icon('Resources')}</span><span class="union-resource-copy9"><b>${L('Union information')}</b><small>${L('News, benefits & dues')}</small></span><i aria-hidden="true">›</i></button>${p.backupReminder&&(!s.lastBackupAt||Date.now()-Date.parse(s.lastBackupAt)>30*864e5)?panel(`<h3>${L('Backup reminder')}</h3><p>${L('Keep a recent encrypted backup of your records.')}</p><button data-go="Vault">${L('Export encrypted backup')}</button>`):''}<div class="privacy-strip">${icon('Vault')}<div><b>${L('Private by design')}</b><small>${L('Your private records stay on this device.')}</small></div></div>`}
function repLinks(){let p=state.profile,ph=String(p.repPhone||'').replace(/[^\d+]/g,''),email=String(p.repEmail||'');return `${ph?`<a class="button9" href="tel:${esc(ph)}">${L('Call')}</a><a class="button9" href="sms:${esc(ph)}">${L('Text')}</a>`:''}${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?`<a class="button9" href="mailto:${esc(email)}">${L('Email')}</a>`:''}<button data-go="Profile">${L('Edit contact')}</button>`}
function settings9(){ $('view').innerHTML=`<h2>${L('Settings & tools')}</h2><div class="settings-list">${[['Profile','My profile','Personal information & steward'],['Appearance','Appearance','Photos, themes & accessibility'],['AI Storage','AI & Storage','Model controls & estimated storage'],['Vault','Privacy & Security','Encrypted backups & quick lock'],['Share','About & Sharing','QR code and link'],['Search','Search','Contract and private records'],['Favorites','Saved items','Contract bookmarks & saved answers'],['FAQ','Frequently asked questions','No AI download required'],['Resources','Union information','Official Local 166 links'],['Contacts','Contacts','Find a representative'],['Calendar','Calendar','Private reminders'],['Paycheck','Paycheck audit','Compare expected and paid'],['Library','Library','Contracts and documents'],['Rights','Rights','Weingarten rights']].map(([t,n,d])=>`<button class="setting9" data-go="${t}">${icon(t)}<span><b>${L(n)}</b><small>${L(d)}</small></span><i>›</i></button>`).join('')}</div>${panel(`<h3>${L('What’s new in V9.1')}</h3><p>${L('Premium appearance, custom photos, private AI history and search. Your existing vault is unchanged.')}</p>`)}`}
function check9(id,label,p){return `<label class="switch9"><span>${L(label)}</span><input type="checkbox" id="p_${id}" ${p[id]?'checked':''}></label>`}
function range9(id,label,p,min,max,step=1){return `<label for="p_${id}">${L(label)} <output id="o_${id}">${p[id]}</output></label><input type="range" id="p_${id}" min="${min}" max="${max}" step="${step}" value="${p[id]}">`}
async function compressPhoto(file,max){if(!file||!file.type.startsWith('image/'))throw Error(L('Select a supported image.'));if(file.size>25*1024*1024)throw Error(L('Choose an image under 25 MB.'));let url=URL.createObjectURL(file);try{let im=new Image();im.src=url;await im.decode();let scale=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*scale));c.height=Math.max(1,Math.round(im.height*scale));let ctx=c.getContext('2d');ctx.fillStyle='#102b39';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(im,0,0,c.width,c.height);return c.toDataURL('image/jpeg',.84)}finally{URL.revokeObjectURL(url)}}
function appearance9(){let owner=state,p={...prefs()};let bools=[['glass','Liquid Glass effects'],['shimmer','Gold shimmer effects'],['animate','Smooth page transitions'],['haptic','Haptic feedback (supported devices)'],['splash','Animated opening splash screen'],['reduced','Reduced motion'],['stats','Personal dashboard statistics'],['avatar','Display profile picture'],['privacy','Privacy mode'],['backupReminder','Backup reminders'],['bgOn','Enable custom background']];let ranges=[['text','Text size (%)',90,130],['opacity','Card opacity (%)',85,100],['brightness','Image brightness (%)',20,120],['darkness','Background darkness (%)',0,85],['blur','Background blur (px)',0,20],['bgX','Horizontal position',0,100],['bgY','Vertical position',0,100],['bgZoom','Background zoom (%)',100,200],['avatarX','Profile horizontal position',0,100],['avatarY','Profile vertical position',0,100],['avatarZoom','Profile zoom (%)',100,200]];let R=id=>{let [k,l,min,max]=ranges.find(r=>r[0]===id);return range9(k,l,p,min,max)};let B=id=>check9(id,bools.find(x=>x[0]===id)[1],p);$('view').innerHTML=`<h2>${L('Appearance & Customization')}</h2><div id="appearancePreview" class="preview9"><div id="previewWall"></div><div id="previewShade"></div><div class="previewContent"><div class="row"><b>${L('Member Assistant')}</b><div id="previewAvatar" class="avatar9">${esc(initials())}</div></div><div class="previewGold">${L('Do I have a case?')}</div><div id="previewCard" class="panel">${L('Your personal dashboard')}</div></div></div>${panel(`<h3>${L('Profile image')}</h3><label for="photoPick">${L('Upload profile image')}</label><input id="photoPick" type="file" accept="image/*">${R('avatarX')}${R('avatarY')}${R('avatarZoom')}${B('avatar')}<button id="removeAvatar">${L('Remove profile image')}</button>`)}${panel(`<h3>${L('Custom background')}</h3><label for="bgPick">${L('Upload background image')}</label><input id="bgPick" type="file" accept="image/*">${B('bgOn')}${select('p_bgScope','Apply background to',['All pages','Home only'])}${R('bgX')}${R('bgY')}${R('bgZoom')}${R('brightness')}${R('darkness')}${R('blur')}${R('opacity')}<button id="removeBg">${L('Remove background image')}</button><p class="muted">${L('Images are compressed, cropped by positioning and zoom, and stored in your encrypted vault. No photo uploads to a server.')}</p>`)}${panel(`<h3>${L('Appearance')}</h3>${select('p_theme','Theme',['Midnight','Dark','Light','Automatic system appearance'])}<label>${L('Accent color')}</label><input type="color" id="p_accent" value="${safeColor(p.accent)}"><div class="actions">${[['Kaiser Teal','#58d5c8'],['Teamsters Gold','#f7ce6b'],['Midnight','#91b9ff'],['Classic Light','#08766f']].map(([n,c])=>`<button data-preset="${c}" data-theme="${n==='Classic Light'?'Light':n==='Midnight'?'Dark':'Midnight'}">${L(n)}</button>`).join('')}</div>${R('text')}${bools.filter(([k])=>!['bgOn','avatar'].includes(k)).map(([k])=>B(k)).join('')}`)}${btn('applyAppearance',L('Save appearance'),true)}${btn('resetAppearance',L('Reset appearance to default'))}<button data-go="More" class="full">${L('Cancel')}</button>`;
$('p_theme').value=p.theme;$('p_bgScope').value=p.bgScope;function draw(){let w=$('previewWall'),a=$('previewAvatar'),c=$('previewCard'),v=$('appearancePreview');let image=p.bgOn&&pictureURL(p.background);w.style.backgroundImage=image?`url("${p.background}")`:'';w.style.backgroundPosition=`${p.bgX}% ${p.bgY}%`;w.style.transform=`scale(${p.bgZoom/100})`;w.style.filter=`brightness(${p.brightness}%) blur(${p.blur}px)`;$('previewShade').style.opacity=image?p.darkness/100:0;v.classList.toggle('previewLight',p.theme==='Light');v.style.setProperty('--previewAccent',safeColor(p.accent));c.style.opacity=1;c.style.background=p.theme==='Light'?`rgba(255,255,255,${p.opacity/100})`:`rgba(12,36,47,${p.opacity/100})`;a.hidden=!p.avatar;avatarPaint9(a,p);}
for(let [k] of bools){$('p_'+k).onchange=e=>{p[k]=e.target.checked;draw()}}for(let [k] of ranges){$('p_'+k).oninput=e=>{p[k]=+e.target.value;$('o_'+k).value=p[k];draw()}}for(let k of ['theme','bgScope','accent'])$('p_'+k).oninput=e=>{p[k]=e.target.value;draw()};document.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{p.accent=b.dataset.preset;p.theme=b.dataset.theme;$('p_accent').value=p.accent;$('p_theme').value=p.theme;draw()});for(let [id,k,max] of [['photoPick','profileImage',600],['bgPick','background',1600]])$(id).onchange=async e=>{try{let data=await compressPhoto(e.target.files[0],max);if(state!==owner||tab!=='Appearance'||!$('previewWall'))return;p[k]=data;if(k==='background'){p.bgOn=true;$('p_bgOn').checked=true}draw()}catch(e){notify(e.message,true)}};act('removeAvatar',()=>{delete p.profileImage;$('photoPick').value='';draw()});act('removeBg',()=>{delete p.background;p.bgOn=false;$('p_bgOn').checked=false;$('bgPick').value='';draw()});act('applyAppearance',async()=>{if(state!==owner)return;state.appearance=p;await save();notify('Appearance saved');go('Home')});act('resetAppearance',async()=>{if(!confirm(L('Reset appearance and remove custom photos? Your records will be kept.')))return;state.appearance={...PDEFAULT,remember:p.remember};await save();render()});draw();}
function aiStorage9(){ $('view').innerHTML=`<h2>${L('AI & Storage')}</h2>${panel(`<h3>${L('AI model management')}</h3><p>${L('Download, release or delete your optional AI from the Member AI page.')}</p><button data-go="Member AI" class="primary full">${L('Open Member AI')}</button><p id="aiCacheStatus" class="muted"></p>${btn('deleteAI',L('Delete AI Download'))}`)}${panel(`<h3>${L('Storage estimate')}</h3><p id="storage9">${L('Calculating…')}</p><p class="muted">${L('Browser storage may include both apps on this origin. Model cache size is approximate and can be shared.')}</p><p>${L('Private record data (before encryption)')}: ${size9(new Blob([JSON.stringify(state)]).size)}</p><p>${L('Personal images')}: ${size9(['profileImage','background'].reduce((n,k)=>n+(prefs()[k]?.length||0)*.75,0))}</p>`)}<button data-go="More" class="full">${L('Back')}</button>`;act('deleteAI',removeAIDownload);void showModelCache();storage9();}
function size9(n){return n>=1024**3?(n/1024**3).toFixed(2)+' GB':n>=1024**2?(n/1024**2).toFixed(1)+' MB':Math.ceil(n/1024)+' KB'}
async function storage9(){let el=$('storage9');try{let est=await navigator.storage?.estimate();let entries=await memberModelEntries();let total=0,unknown=0;for(let e of entries){let response=await e.cache.match(e.req);let length=Number(response?.headers.get('content-length'));if(length>0)total+=length;else unknown++}if(el===$('storage9'))el.textContent=`${L('Browser reported usage')}: ${est?.usage!=null?size9(est.usage):L('Unavailable')}. ${L('Cached AI files')}: ${entries.length}; ${L('Known bytes')}: ${size9(total)}${unknown?' ('+L('some sizes unavailable')+')':''}.`}catch{if(el===$('storage9'))el.textContent=L('Storage estimate unavailable on this device.')}}
function contractSearch9(q){let words=q.toLowerCase().trim().split(/\s+/).filter(Boolean);if(!words.length)return[];let result=[];for(let d of [BUNDLED_CONTRACT,...state.docs])for(let p of d.pages||[]){let text=p.text||'',low=text.toLowerCase(),score=words.filter(w=>low.includes(w)).length;if(score){let i=Math.max(0,low.indexOf(words.find(w=>low.includes(w))));result.push({title:d.title,period:d.period,page:p.page,text:text.slice(Math.max(0,i-120),i+520),score})}}return result.sort((a,b)=>b.score-a.score).slice(0,15)}
function saved9(){return state.savedItems||(state.savedItems=[])}
function sourceCard9(r,i){return panel(`<b>${esc(r.title)} · ${L('Page')} ${esc(r.page)}</b><p class="muted">${esc(r.period||'')}</p><p class="wraptext">${esc(r.text)}</p><button data-fav="${i}">${L('Bookmark source')}</button>`)}
function search9(){ $('view').innerHTML=`<h2>${L('Search')}</h2>${notice(L('Bundled Kaiser agreement is past its stated term; confirm applicability and current terms.'))}${field('globalQuery',L('Search contracts and your records'))}<div id="searchResults"></div>`;$('globalQuery').oninput=()=>{let q=val('globalQuery').trim(),r=contractSearch9(expandSpanishQuery(q)),p=q.toLowerCase(),records=q?[...state.drafts.map(d=>({t:'Grievance',text:d.grievance||d.title||'',id:d.id})),...state.incidents.map(d=>({t:'Incident Log',text:[d.title,d.notes,d.category].filter(Boolean).join(' '),id:d.id})),...state.events.map(d=>({t:'Calendar',text:d.title||'',id:d.id}))].filter(d=>d.text.toLowerCase().includes(p)):[];$('searchResults').innerHTML=q?`<h3>${L('Personal records')}</h3>${records.map(d=>panel(`<p>${esc(d.text.slice(0,200))}</p><button data-go="${d.t}">${L('Open section')}</button>`)).join('')||L('No matching records.')}<h3>${L('Contract references')}</h3>${r.map(sourceCard9).join('')||L('No source matches.')}`:'';document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=async()=>{let a=r[+b.dataset.fav];saved9().push({...a,id:uid(),kind:'source'});await save();notify('Saved item')})}}
function favorites9(){ $('view').innerHTML=`<h2>${L('Saved items')}</h2>${btn('clearAnswers9',L('Clear saved AI answers'))}${saved9().map(r=>panel(`<b>${esc(r.title||L('Saved answer'))}</b>${r.page!=null?`<small> · ${L('Page')} ${esc(r.page)}</small>`:''}<p class="wraptext">${esc(r.text)}</p><button data-unfav="${esc(r.id)}">${L('Delete saved item')}</button>`)).join('')||L('No saved items.')}<button data-go="Search" class="full">${L('Search contracts')}</button>`;act('clearAnswers9',async()=>{if(!confirm(L('Clear saved AI answers? Contract bookmarks will remain.')))return;state.savedItems=saved9().filter(x=>x.kind!=='answer');await save();render()});document.querySelectorAll('[data-unfav]').forEach(b=>b.onclick=async()=>{state.savedItems=saved9().filter(x=>x.id!==b.dataset.unfav);await save();render()})}
function faq9(){ $('view').innerHTML=`<h2>${L('Frequently asked questions')}</h2>${[['How do I request representation?','Open Rights to read and copy the Weingarten request.','Rights'],['How do I file a grievance?','Prepare your form and contact your steward promptly. Sending a draft is not official filing.','Grievance'],['Can I use the app without AI?','Yes. Contract search, rights and all personal tools work without the model.','Search'],['How do I find my steward?','Use the representative directory or save your steward in your profile.','Contacts'],['Is the bundled contract current?','The included 2022–2025 reference is past its stated term. Confirm current coverage with your representative.','Library']].map(([q,a,t])=>panel(`<h3>${L(q)}</h3><p>${L(a)}</p><button data-go="${t}">${L('Open section')}</button>`)).join('')}`}
// Conversation UI. Opt-in history; unsaved conversation stays in memory and is cleared on lock.
function chats9(){return state.aiChats||(state.aiChats=[])}
function messages9(){return activeChat?chats9().find(c=>c.id===activeChat)?.messages||[]:temporaryChat}
function resetChat9(){activeChat=null;temporaryChat=[];pendingChat=null;}
function aiChrome9(){let root=$('view');let h=root.querySelector('h2');if(!h)return;let nav=document.createElement('section');nav.className='panel chat-tools';nav.innerHTML=`<div class="row"><b>${L('Conversations')}</b><button id="chatNew">${L('New conversation')}</button></div>${check9('remember','Save AI history in encrypted vault',prefs())}<details><summary>${L('Conversation history')}</summary>${field('chatSearch',L('Search conversations'))}<div id="chatList"></div>${btn('chatClear',L('Clear all conversations'))}</details><div id="chatMessages" class="chat9" aria-live="polite"></div><div class="actions"><button id="chatDelete">${L('Delete current conversation')}</button><button data-go="Favorites">${L('Saved answers')}</button><button data-go="AI Storage">${L('AI & Storage')}</button></div><p class="muted">${L('Temporary mode keeps this conversation in memory only until locked or reloaded. Saved answers are separate.')}</p>`;h.after(nav);let suggested=document.createElement('div');suggested.className='suggest9';suggested.innerHTML=['What are my Weingarten rights?','Can I grieve a missed meal break?','How does double time work?'].map(q=>`<button data-suggest="${esc(q)}">${L(q)}</button>`).join('');$('question').before(suggested);document.querySelectorAll('[data-suggest]').forEach(b=>b.onclick=()=>{$('question').value=b.textContent;$('question').focus()});let settings=$('model')?.closest('.panel');if(settings){let d=document.createElement('details');d.className='panel';d.open=!ready;d.innerHTML=`<summary>${L('AI model settings')}</summary>`;let keep=['askAI','answerAI'];let ask=$('askAI'),answer=$('answerAI');for(let child of [...settings.children])if(!keep.includes(child.id))d.append(child);settings.before(d);settings.classList.add('chat-answer');let progress=document.createElement('progress');progress.id='modelProgress9';progress.max=1;progress.hidden=true;$('aiStatus').after(progress);let estimate=document.createElement('p');estimate.className='muted';estimate.textContent=L('Approximate model weights: Light 0.3–0.6 GB; Standard 0.9–1.4 GB. Extra runtime and cache space may be needed.');$('model').after(estimate)}
function list(){let q=val('chatSearch').toLowerCase();$('chatList').innerHTML=chats9().filter(c=>JSON.stringify(c.messages).toLowerCase().includes(q)).map(c=>`<button class="full" data-chat="${esc(c.id)}">${esc(c.title)} · ${esc(c.date.slice(0,10))}</button>`).join('')||L('No saved conversations.');document.querySelectorAll('[data-chat]').forEach(b=>b.onclick=()=>{if(aiBusy)return notify('Wait for the current answer.',true);activeChat=b.dataset.chat;temporaryChat=[];paintChat9()})} $('chatSearch').oninput=list;list();paintChat9();$('p_remember').onchange=async e=>{if(aiBusy){e.target.checked=!e.target.checked;return notify('Wait for the current answer.',true)}state.appearance={...prefs(),remember:e.target.checked};resetChat9();await save();paintChat9();list()};act('chatNew',()=>{if(aiBusy)throw Error('Wait for the current answer.');resetChat9();$('question').value='';$('answerAI').textContent='';$('screenResult').replaceChildren();paintChat9()});act('chatDelete',async()=>{if(aiBusy)throw Error('Wait for the current answer.');if(!confirm(L('Delete this conversation?')))return;if(activeChat)state.aiChats=chats9().filter(c=>c.id!==activeChat);resetChat9();$('answerAI').textContent='';$('question').value='';$('screenResult').replaceChildren();await save();paintChat9();list()});act('chatClear',async()=>{if(aiBusy)throw Error('Wait for the current answer.');if(!confirm(L('Clear all AI conversations? Saved answers and personal records will be kept.')))return;state.aiChats=[];resetChat9();$('answerAI').textContent='';$('question').value='';$('screenResult').replaceChildren();await save();paintChat9();list()});}
function paintChat9(){let e=$('chatMessages');if(!e)return;e.innerHTML=messages9().map((m,i)=>`<div class="bubble9 ${m.role==='user'?'mine9':''}"><small>${m.role==='user'?L('You'):'Member AI'}</small><p class="wraptext">${esc(m.text)}</p>${m.role==='assistant'?`<small>${esc((m.sources||[]).map(x=>x.title+' · '+L('Page')+' '+x.page).join(' | '))}</small><button data-saveanswer="${i}">${L('Save answer')}</button>`:''}</div>`).join('');document.querySelectorAll('[data-saveanswer]').forEach(b=>b.onclick=async()=>{let m=messages9()[+b.dataset.saveanswer];saved9().push({id:uid(),kind:'answer',title:L('Saved answer'),text:m.text+'\n'+(m.sources||[]).map(s=>s.title+' · '+s.page).join('\n')});await save();notify('Saved item')})}
function startChat9(r){let remember=prefs().remember;if(!remember&&activeChat){temporaryChat=structuredClone(messages9());activeChat=null}if(remember&&!activeChat){let c={id:uid(),title:r.q.slice(0,60),date:new Date().toISOString(),messages:[]};chats9().unshift(c);activeChat=c.id;}let m=messages9(),context=m.slice(-4).map(x=>`${x.role}: ${x.text.slice(0,450)}`).join('\n');m.push({role:'user',text:r.q});pendingChat={owner:state,id:activeChat,remember,sources:r.hits.map(x=>({title:x.title,page:x.page,period:x.period}))};paintChat9();if(remember)void save().catch(e=>notify(e.message,true));return context;}
function endChat9(text){let p=pendingChat;pendingChat=null;if(!p||state!==p.owner)return;let m=p.id?chats9().find(c=>c.id===p.id)?.messages:temporaryChat;if(!m)return;m.push({role:'assistant',text,sources:p.sources});if(p.remember)void save().catch(e=>notify(e.message,true));if(tab==='Member AI'){paintChat9();$('chatSearch')?.oninput?.();if($('answerAI'))$('answerAI').textContent='';}}
function clearTransient9(){resetChat9();$('personalWall').style.backgroundImage='';$('personalWall').hidden=true;$('wallShade').hidden=true;$('splash9').hidden=true;}
document.addEventListener('click',e=>{if(state&&prefs().haptic&&!prefs().reduced&&e.target.closest('button')&&navigator.vibrate)navigator.vibrate(8)});
matchMedia('(prefers-color-scheme: light)').addEventListener?.('change',()=>{if(prefs().theme==='Automatic system appearance')paintPremium()});
pairs(`
YOUR PERSONAL UNION TOOLKIT|TUS HERRAMIENTAS SINDICALES
Welcome back|Bienvenido de nuevo
Your union. Your rights. Your voice.|Tu sindicato. Tus derechos. Tu voz.
Your activity|Tu actividad
Grievances|Quejas
Incidents|Incidentes
Deadlines|Plazos
Quick actions|Acciones rápidas
My steward|Mi delegado
Call|Llamar
Text|Mensaje
Email|Correo electrónico
Your private records stay on this device.|Tus registros privados permanecen en este dispositivo.
Backup reminder|Recordatorio de respaldo
Keep a recent encrypted backup of your records.|Mantén una copia de seguridad cifrada reciente de tus registros.
Settings & tools|Configuración y herramientas
Appearance|Apariencia
Photos, themes & accessibility|Fotos, temas y accesibilidad
AI & Storage|IA y almacenamiento
Model controls & estimated storage|Controles del modelo y espacio estimado
Privacy & Security|Privacidad y seguridad
Encrypted backups & quick lock|Respaldos cifrados y bloqueo rápido
About & Sharing|Acerca de y compartir
Search|Buscar
Contract and private records|Contrato y registros privados
Saved items|Elementos guardados
Contract bookmarks & saved answers|Marcadores del contrato y respuestas guardadas
Frequently asked questions|Preguntas frecuentes
No AI download required|No requiere descargar IA
What’s new in V9.1|Novedades de V9.1
Premium appearance, custom photos, private AI history and search. Your existing vault is unchanged.|Apariencia premium, fotos personalizadas, historial privado de IA y búsqueda. Tu bóveda se conserva.
Appearance & Customization|Apariencia y personalización
Profile image|Foto de perfil
Upload profile image|Subir foto de perfil
Remove profile image|Eliminar foto de perfil
Custom background|Fondo personalizado
Upload background image|Subir imagen de fondo
Enable custom background|Activar fondo personalizado
Remove background image|Eliminar imagen de fondo
Apply background to|Aplicar fondo a
All pages|Todas las páginas
Home only|Solo inicio
Horizontal position|Posición horizontal
Vertical position|Posición vertical
Background zoom (%)|Zoom del fondo (%)
Profile horizontal position|Posición horizontal del perfil
Profile vertical position|Posición vertical del perfil
Profile zoom (%)|Zoom del perfil (%)
Image brightness (%)|Brillo de imagen (%)
Background darkness (%)|Oscuridad del fondo (%)
Background blur (px)|Desenfoque del fondo (px)
Card opacity (%)|Opacidad de tarjetas (%)
Text size (%)|Tamaño de texto (%)
Theme|Tema
Midnight|Medianoche
Dark|Oscuro
Light|Claro
Automatic system appearance|Apariencia automática del sistema
Accent color|Color de acento
Kaiser Teal|Verde azulado Kaiser
Teamsters Gold|Dorado Teamsters
Classic Light|Claro clásico
Liquid Glass effects|Efectos de vidrio líquido
Gold shimmer effects|Brillo dorado
Smooth page transitions|Transiciones suaves
Haptic feedback (supported devices)|Vibración (dispositivos compatibles)
Animated opening splash screen|Pantalla de inicio animada
Reduced motion|Movimiento reducido
Personal dashboard statistics|Estadísticas personales
Display profile picture|Mostrar foto de perfil
Privacy mode|Modo de privacidad
Backup reminders|Recordatorios de respaldo
Save appearance|Guardar apariencia
Appearance saved|Apariencia guardada
Reset appearance to default|Restablecer apariencia
Reset appearance and remove custom photos? Your records will be kept.|¿Restablecer la apariencia y eliminar fotos personalizadas? Se conservarán tus registros.
Images are compressed, cropped by positioning and zoom, and stored in your encrypted vault. No photo uploads to a server.|Las imágenes se comprimen y ajustan mediante posición y zoom, y se guardan en tu bóveda cifrada. No se suben a un servidor.
Select a supported image.|Selecciona una imagen compatible.
Choose an image under 25 MB.|Elige una imagen de menos de 25 MB.
Your personal dashboard|Tu panel personal
AI model management|Administración del modelo de IA
Download, release or delete your optional AI from the Member AI page.|Descarga, libera o elimina la IA opcional en la página de IA.
Open Member AI|Abrir IA del miembro
Storage estimate|Espacio estimado
Calculating…|Calculando…
Browser storage may include both apps on this origin. Model cache size is approximate and can be shared.|El almacenamiento del navegador puede incluir ambas aplicaciones del mismo origen. La caché del modelo es aproximada y puede compartirse.
Private record data (before encryption)|Datos privados (antes del cifrado)
Personal images|Imágenes personales
Browser reported usage|Uso informado por el navegador
Cached AI files|Archivos de IA en caché
Known bytes|Tamaño conocido
some sizes unavailable|algunos tamaños no disponibles
Storage estimate unavailable on this device.|Estimación no disponible en este dispositivo.
Search contracts and your records|Buscar contratos y tus registros
Personal records|Registros personales
Open section|Abrir sección
No matching records.|No hay registros coincidentes.
Contract references|Referencias del contrato
No source matches.|No hay fuentes coincidentes.
Bookmark source|Guardar referencia
Page|Página
Saved answer|Respuesta guardada
Saved answers|Respuestas guardadas
Saved item|Elemento guardado
Delete saved item|Eliminar elemento guardado
No saved items.|No hay elementos guardados.
Search contracts|Buscar contratos
How do I request representation?|¿Cómo solicito representación?
Open Rights to read and copy the Weingarten request.|Abre Derechos para leer y copiar la solicitud Weingarten.
How do I file a grievance?|¿Cómo presento una queja?
Prepare your form and contact your steward promptly. Sending a draft is not official filing.|Prepara el formulario y contacta pronto a tu delegado. Enviar un borrador no equivale a presentar una queja formal.
Can I use the app without AI?|¿Puedo usar la aplicación sin IA?
Yes. Contract search, rights and all personal tools work without the model.|Sí. La búsqueda del contrato, los derechos y las herramientas personales funcionan sin el modelo.
How do I find my steward?|¿Cómo encuentro a mi delegado?
Use the representative directory or save your steward in your profile.|Usa el directorio o guarda a tu delegado en tu perfil.
Is the bundled contract current?|¿Está vigente el contrato incluido?
The included 2022–2025 reference is past its stated term. Confirm current coverage with your representative.|La referencia de 2022–2025 ha superado su plazo indicado. Confirma la vigencia con tu representante.
Conversations|Conversaciones
New conversation|Nueva conversación
Save AI history in encrypted vault|Guardar historial de IA en la bóveda cifrada
Conversation history|Historial de conversaciones
Search conversations|Buscar conversaciones
Clear all conversations|Borrar todas las conversaciones
Delete current conversation|Eliminar conversación actual
Temporary mode keeps this conversation in memory only until locked or reloaded. Saved answers are separate.|El modo temporal conserva esta conversación solo en memoria hasta bloquear o recargar la app. Las respuestas guardadas son independientes.
What are my Weingarten rights?|¿Cuáles son mis derechos Weingarten?
Can I grieve a missed meal break?|¿Puedo presentar una queja por no tomar mi descanso de comida?
How does double time work?|¿Cómo funciona el pago doble?
AI model settings|Configuración del modelo de IA
Approximate model weights: Light 0.3–0.6 GB; Standard 0.9–1.4 GB. Extra runtime and cache space may be needed.|Tamaño aproximado: ligero 0,3–0,6 GB; estándar 0,9–1,4 GB. Puede necesitar espacio adicional.
No saved conversations.|No hay conversaciones guardadas.
Wait for the current answer.|Espera la respuesta actual.
Delete this conversation?|¿Eliminar esta conversación?
Clear all AI conversations? Saved answers and personal records will be kept.|¿Borrar todas las conversaciones de IA? Se conservarán las respuestas guardadas y los registros personales.
You|Tú
Save answer|Guardar respuesta
Encrypted backup exported|Respaldo cifrado exportado
Signed|Firmado
`);

pairs(`Clear saved AI answers|Borrar respuestas de IA guardadas
Clear saved AI answers? Contract bookmarks will remain.|¿Borrar respuestas de IA guardadas? Se conservarán los marcadores del contrato.
Bundled Kaiser agreement is past its stated term; confirm applicability and current terms.|El contrato Kaiser incluido ha superado su plazo indicado; confirma su aplicación y vigencia.
Cancel|Cancelar
Unavailable|No disponible`);
