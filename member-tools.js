/* Member V7: local language, sharing, reminders, calculator. No personal info sent to QR service. */
let memberLang='en';
const spanish={};
function pairs(s){for(const line of s.trim().split('\n')){let i=line.indexOf('|');if(i>0)spanish[line.slice(0,i)]=line.slice(i+1)}}
pairs(`
Member Assistant|Asistente de miembros
Welcome back|Bienvenido de nuevo
First-time setup|Configuración inicial
Unlock Member Assistant|Desbloquear asistente
Create your private member vault|Crea tu bóveda privada
Passphrase (12+ characters)|Contraseña (12 caracteres o más)
Confirm passphrase|Confirma la contraseña
Create vault|Crear bóveda
Unlock|Desbloquear
Lock|Bloquear
Vault|Bóveda
Private member vault|Bóveda privada
Export encrypted backup|Exportar copia cifrada
Lock vault|Bloquear bóveda
Restore encrypted backup|Restaurar copia cifrada
Restore encrypted member backup (replaces existing vault)|Restaurar copia cifrada (reemplaza la bóveda)
Restore using passphrase above|Restaurar con la contraseña indicada
Emergency Weingarten rights|Derechos Weingarten de emergencia
Back to unlock|Volver al acceso
Find my representative|Buscar mi representante
Home|Inicio
Member AI|IA sindical
Incident Log|Incidentes
Grievance|Queja
More|Más
Rights|Derechos
Contacts|Contactos
Resources|Recursos
Calendar|Calendario
Library|Biblioteca
Profile|Perfil
Share app|Compartir app
QR code and link|Código QR y enlace
Paycheck audit|Revisar pago
Compare expected and paid|Compara el pago esperado y recibido
BUILT FOR MEMBERS|PARA MIEMBROS
Your union.|Tu sindicato.
Your rights.|Tus derechos.
Know your contract. Find support. Stand together.|Conoce tu contrato. Busca apoyo. Mantente unido.
KNOW YOUR RIGHTS|CONOCE TUS DERECHOS
Meeting with management?|¿Reunión con la gerencia?
Request union representation.|Solicita representación sindical.
MEMBER AI|IA SINDICAL
Do I have a case?|¿Tengo un caso?
Check an issue or ask a contract question.|Consulta un problema o pregunta sobre tu contrato.
Your toolkit|Tus herramientas
Record a workplace incident|Registra un incidente laboral
Start a grievance|Iniciar una queja
Build a draft for your rep|Prepara un borrador para tu representante
Find my rep|Buscar representante
Stewards & business agents|Delegados y agentes sindicales
My calendar|Mi calendario
Dates and follow-ups|Fechas y seguimiento
My contract|Mi contrato
Built-in contract & private documents|Contrato incluido y documentos privados
Union information|Información sindical
News, benefits & dues|Noticias, beneficios y cuotas
My profile|Mi perfil
Workplace and contacts|Trabajo y contactos
Private by design|Privacidad desde el diseño
No account required. Encrypted vault records stay on this device. Nothing is filed or sent automatically.|No se requiere cuenta. Los datos cifrados quedan en este dispositivo. Nada se presenta ni se envía automáticamente.
Member tools|Herramientas del miembro
Weingarten rights|Derechos Weingarten
Official Local 166 links|Enlaces oficiales de Local 166
Private reminders|Recordatorios privados
Contracts and documents|Contratos y documentos
Personal settings|Configuración personal
Encrypted backup and access|Copia cifrada y acceso
Name|Nombre
Employer|Empleador
Job classification|Clasificación del puesto
Department|Departamento
Employee ID (optional)|Número de empleado (opcional)
Last four digits of SSN (optional)|Últimos 4 dígitos del SSN (opcional)
Work location|Lugar de trabajo
Email|Correo electrónico
Phone|Teléfono
My steward / representative|Mi delegado o representante
Representative email|Correo del representante
Representative phone|Teléfono del representante
Save profile|Guardar perfil
Switch light / dark mode|Cambiar modo claro / oscuro
Toggle larger text|Cambiar tamaño del texto
Last four digits are optional and used only for your grievance form. Never enter your full SSN.|Los últimos cuatro dígitos son opcionales y solo se usan en tu formulario. Nunca ingreses tu SSN completo.
My grievances|Mis quejas
＋ Start new grievance|＋ Nueva queja
Open draft|Abrir borrador
Delete|Eliminar
No saved drafts.|No hay borradores guardados.
New grievance|Nueva queja
Grievance builder|Preparar queja
Draft • private|Borrador • privado
Your full name|Tu nombre completo
Supervisor / manager|Supervisor / gerente
Date of incident|Fecha del incidente
What happened? Include facts, dates and who was involved.|¿Qué ocurrió? Incluye hechos, fechas y personas involucradas.
Possible contract violations (leave blank if unknown)|Posibles incumplimientos del contrato (deja en blanco si no sabes)
What would resolve the issue?|¿Qué resolvería el problema?
Your phone|Tu teléfono
Your email|Tu correo electrónico
Mailing address (optional)|Dirección postal (opcional)
City, state and ZIP (optional)|Ciudad, estado y código postal (opcional)
Hire date (optional)|Fecha de contratación (opcional)
Hourly rate (optional)|Pago por hora (opcional)
Work shift (optional)|Turno laboral (opcional)
Work phone (optional)|Teléfono del trabajo (opcional)
Witnesses / evidence / additional notes (optional)|Testigos, pruebas y notas adicionales (opcional)
Back|Atrás
Review|Revisar
Save & next|Guardar y seguir
Review all fields|Revisar todos los campos
Save & exit|Guardar y salir
Review grievance draft|Revisar borrador de queja
Edit|Editar
Not provided|No indicado
FINAL STEP · OPTIONAL|PASO FINAL · OPCIONAL
Sign your grievance|Firma tu queja
Use your finger, mouse or stylus to sign inside the box.|Firma con el dedo, ratón o lápiz digital dentro del cuadro.
Employee signature|Firma del empleado
Undo|Deshacer
Clear|Borrar
Date is applied automatically when signing.|La fecha se agrega automáticamente al firmar.
I reviewed all information and intend to sign this grievance electronically. The information is accurate to the best of my knowledge.|Revisé la información y deseo firmar electrónicamente. La información es correcta según mi conocimiento.
Sign & generate PDF|Firmar y generar PDF
Generate unsigned PDF instead|Generar PDF sin firma
Open saved signed PDF|Abrir PDF firmado
Sign again / replace saved copy|Firmar de nuevo / reemplazar copia
Your PDF is ready|Tu PDF está listo
Signed grievance ready|Queja firmada lista
Unsigned grievance ready|Queja sin firma lista
Preview completed form|Vista previa del formulario
Share PDF by text / email|Compartir PDF por mensaje o correo
Download completed PDF|Descargar PDF completado
Personal submission tracker|Seguimiento personal del envío
Personal status|Estado personal
Draft|Borrador
Sent to representative|Enviado al representante
Awaiting follow-up|Esperando seguimiento
Resolved / closed|Resuelto / cerrado
Sent to (optional)|Enviado a (opcional)
Save status|Guardar estado
Mark as sent to my representative|Marcar como enviado a mi representante
Open email to saved rep (attach PDF manually)|Abrir correo al representante (adjunta el PDF)
Open text to saved rep (attach PDF manually)|Abrir mensaje al representante (adjunta el PDF)
Add follow-up to calendar|Agregar seguimiento al calendario
Back to drafts|Volver a borradores
Document. Preserve. Protect.|Documenta. Conserva. Protege.
Record a voice memo|Grabar nota de voz
Automatically date and time stamped|Fecha y hora automáticas
＋ New written incident|＋ Nuevo incidente escrito
Open incident calendar|Abrir calendario de incidentes
Incident history|Historial de incidentes
No incidents yet.|Aún no hay incidentes.
Review selected with Member AI|Revisar selección con IA
Create grievance from selected|Crear queja con la selección
Share selected report|Compartir informe seleccionado
Open incident|Abrir incidente
Edit incident|Editar incidente
New incident|Nuevo incidente
Title|Título
Incident date|Fecha del incidente
Incident time|Hora del incidente
Category|Categoría
What happened?|¿Qué ocurrió?
Witnesses / people involved|Testigos / personas involucradas
Voice memo|Nota de voz
Start recording|Iniciar grabación
Stop recording|Detener grabación
No recording yet.|Aún no hay grabación.
Voice memo attached.|Nota de voz adjunta.
Play recording|Reproducir grabación
Share audio|Compartir audio
Remove|Quitar
Evidence|Pruebas
Attach images or documents (5 MB each)|Adjuntar imágenes o documentos (5 MB cada uno)
Scan / photograph evidence|Escanear / fotografiar pruebas
Camera capture only. Check readability and avoid patient details.|Solo captura de cámara. Verifica la legibilidad y evita datos de pacientes.
Share|Compartir
Save & open calendar|Guardar y abrir calendario
Back to incident history|Volver al historial
Delete saved incident|Eliminar incidente guardado
Pay / overtime|Pago / horas extra
Missed meal break|Descanso de comida omitido
Discipline / investigation|Disciplina / investigación
Harassment / retaliation|Acoso / represalias
Staffing / safety|Personal / seguridad
Scheduling / seniority|Horario / antigüedad
Contract concern|Problema contractual
Management instruction / CYA|Instrucción de gerencia / constancia
Other|Otro
Incident|Incidente
Confirmed deadline|Plazo confirmado
Union meeting|Reunión sindical
Grievance follow-up|Seguimiento de queja
Personal|Personal
Work schedule|Horario laboral
Scholarship|Beca
No incidents for this day.|No hay incidentes este día.
＋ Log incident for this day|＋ Registrar incidente de este día
Add event|Agregar evento
Date|Fecha
Notes (optional)|Notas (opcional)
Save event|Guardar evento
Upcoming / saved events|Eventos próximos / guardados
No saved events.|No hay eventos guardados.
Export to phone calendar|Exportar al calendario del teléfono
Find your representative|Encuentra a tu representante
My saved steward / rep|Mi delegado o representante guardado
Local 166 resources|Recursos de Local 166
Contract library|Biblioteca de contratos
My contract library|Mi biblioteca de contratos
Document title|Título del documento
Effective dates / employer / version|Vigencia / empleador / versión
Document type|Tipo de documento
Contract|Contrato
Ratification / amendment|Ratificación / enmienda
Policy|Política
Grievance form|Formulario de queja
PDF or text file (up to 12 MB)|Archivo PDF o texto (hasta 12 MB)
Searchable text (optional)|Texto para búsqueda (opcional)
Save to private library|Guardar en biblioteca privada
Download original|Descargar original
No documents yet.|Aún no hay documentos.
Ask Member AI|Consultar IA sindical
Which agreement applies?|¿Qué convenio corresponde?
Kaiser / SCPMG — Local 166 (reference)|Kaiser / SCPMG — Local 166 (referencia)
Other employer / private documents only|Otro empleador / solo documentos privados
What kind of concern?|¿Qué tipo de problema?
Contract question|Pregunta contractual
Pay / overtime / meal break|Pago / horas extra / comida
Safety / retaliation|Seguridad / represalias
Leave / benefits|Licencias / beneficios
Tell us what happened or ask a contract question|Describe lo ocurrido o pregunta sobre el contrato
Could it involve discipline?|¿Podría implicar disciplina?
Unsure|No estoy seguro
Yes / possible discipline|Sí / posible disciplina
No known discipline|Sin disciplina conocida
Is there a filing deadline or urgent date?|¿Hay un plazo o fecha urgente?
Yes / unknown deadline|Sí / plazo desconocido
No known deadline|Sin plazo conocido
Do you have records or witnesses?|¿Tienes registros o testigos?
Yes, records available|Sí, hay registros
Not yet|Todavía no
Check my issue|Revisar mi problema
Optional on-device AI|IA local opcional
Model|Modelo
Load local AI|Cargar IA local
Release model|Liberar modelo
Ask local AI using source excerpts|Consultar IA con extractos de fuentes
Upload / manage contract|Cargar / gestionar contrato
Potential source matches|Posibles coincidencias de fuentes
Contact representative|Contactar representante
Start a draft|Iniciar borrador
RED — contact a representative promptly|ROJO — contacta pronto al representante
GREEN — possible issue worth review|VERDE — posible problema para revisar
YELLOW — more information needed|AMARILLO — falta información
Know your Weingarten rights|Conoce tus derechos Weingarten
REQUEST REPRESENTATION|SOLICITA REPRESENTACIÓN
Copy statement|Copiar declaración
When it applies|Cuándo aplica
After requesting a representative|Después de solicitar representación
When it may not apply|Cuándo podría no aplicar
Contact my union|Contactar a mi sindicato
If this discussion could in any way lead to my being disciplined or terminated, I request that my union representative be present. I do not wish to answer investigatory questions without representation.|Si esta conversación pudiera resultar en una sanción disciplinaria o mi despido, solicito que esté presente mi representante sindical. No deseo responder preguntas de investigación sin representación.
A union-represented employee may request representation during an investigatory interview when they reasonably believe it could lead to discipline. The employee must request it; management generally does not have to remind them.|Un trabajador representado por un sindicato puede solicitar representación durante una entrevista de investigación si cree razonablemente que podría resultar en disciplina. El trabajador debe solicitarla; por lo general, la gerencia no tiene que recordárselo.
Management may grant the request, end the interview, or offer the choice to continue without representation or end the interview. You may decline to answer investigatory questions without representation. Do not assume you can leave the workplace or refuse unrelated work instructions.|La gerencia puede conceder la solicitud, terminar la entrevista u ofrecer la opción de continuar sin representación o terminar la entrevista. Puedes negarte a responder preguntas de investigación sin representación. No supongas que puedes abandonar el trabajo o rechazar instrucciones laborales ajenas a la investigación.
Routine instruction or a meeting solely announcing a final disciplinary decision may not qualify. If questioning begins, circumstances can change. Your contract may provide additional protections.|Las instrucciones rutinarias o una reunión que solo anuncia una decisión disciplinaria final podrían no calificar. Si comienzan las preguntas, las circunstancias pueden cambiar. Tu contrato podría brindar protección adicional.
If uncertain or denied representation, document what occurred and contact your union promptly. Do not wait for the app to decide.|Si tienes dudas o te niegan representación, documenta lo ocurrido y contacta pronto a tu sindicato. No esperes una decisión de la aplicación.
A separate encrypted vault for member records, not the steward vault. Public rights and contact information require no passphrase.|Bóveda cifrada separada para miembros, no para delegados. Los derechos y contactos públicos no requieren contraseña.
Encrypted backups contain your private records. Keep your passphrase safe. No password reset.|Las copias cifradas contienen tus registros privados. Protege tu contraseña. No hay recuperación de contraseña.
Share Member Assistant|Compartir Asistente de miembros
Scan to open the member app|Escanea para abrir la aplicación
Copy link|Copiar enlace
Share link|Compartir enlace
Download QR code|Descargar código QR
Back to tools|Volver a herramientas
Paycheck comparison|Comparación de pago
Base hourly rate|Tarifa base por hora
Regular hours|Horas regulares
Overtime hours|Horas extra
Overtime multiplier|Multiplicador de horas extra
Double-time hours|Horas dobles
Double-time multiplier|Multiplicador de horas dobles
Other expected premiums ($)|Otras primas esperadas ($)
Actual gross pay for same hours ($)|Pago bruto recibido por las mismas horas ($)
Calculate difference|Calcular diferencia
Expected gross pay|Pago bruto esperado
Actual gross pay|Pago bruto recibido
Difference (expected minus actual)|Diferencia (esperado menos recibido)
Log possible pay discrepancy|Registrar posible diferencia de pago
Upcoming deadlines & follow-ups|Próximos plazos y seguimientos
Open calendar|Abrir calendario
`);
function tr(s){return memberLang==='es'?(spanish[s]||s):s}
function initMemberLanguage(){memberLang=localStorage.getItem('memberLanguage')==='es'?'es':'en';for(const [id,lang] of [['langEN','en'],['langES','es']])$(id).onclick=()=>{if(memberLang===lang)return;if(capture){notify('Stop recording before changing language.',true);return;}if(state&&['Builder','Profile','Incident Log','Member AI','Calendar','Paycheck','Library'].includes(tab)&&!confirm(tr('Changing language reloads this screen. Save any unfinished work first. Continue?')))return;memberLang=lang;localStorage.setItem('memberLanguage',lang);render()};}
function applyLanguage(){document.documentElement.lang=memberLang;for(const [id,lang] of [['langEN','en'],['langES','es']])$(id)?.setAttribute('aria-pressed',String(memberLang===lang));document.querySelector('.masthead-title h1').textContent=tr('Member Assistant');if(!state&&tab==='Contacts'&&!$('backGate')){let b=document.createElement('button');b.id='backGate';b.className='full';b.textContent='Back to unlock';b.onclick=()=>go('Vault');$('view').append(b)}if(memberLang!=='es')return;for(const e of document.querySelectorAll('#view option')){const original=e.value;if(spanish[original]){e.value=original;e.textContent=spanish[original]}}const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){let p=n.parentElement;if(!p||p.closest('script,style,textarea,.wraptext,.resource a,canvas,svg,option,#answerAI, .reviewline p'))continue;let s=n.nodeValue.trim();if(spanish[s])n.nodeValue=n.nodeValue.replace(s,spanish[s]);else if(/^Step \d+ of \d+$/.test(s))n.nodeValue=s.replace('Step','Paso').replace(' of ',' de ');else if(/^Welcome, /.test(s))n.nodeValue=s.replace('Welcome, ','Bienvenido, ')} }
function validateLast4(v){if(v&&!/^\d{4}$/.test(v))throw Error(memberLang==='es'?'Ingresa exactamente cuatro dígitos o deja en blanco.':'Enter exactly four digits or leave blank.')}
function lastFourField(id,v=''){return `<label for="${id}">${tr('Last four digits of SSN (optional)')}</label><input id="${id}" type="password" inputmode="numeric" autocomplete="off" maxlength="4" pattern="[0-9]{4}" value="${esc(v)}"><small>${tr('Last four digits are optional and used only for your grievance form. Never enter your full SSN.')}</small>`}
function expandSpanishQuery(q){const map=[[/horas? extra|tiempo extra/g,'overtime'],[/comida|almuerzo|descanso/g,'meal lunch break'],[/salario|pago|sueldo/g,'wage pay premium'],[/despid|desped|disciplin|suspend/g,'discharge discipline suspension'],[/antigüedad/g,'seniority'],[/vacaci|licencia/g,'vacation leave'],[/turno|horario/g,'shift schedule'],[/seguridad|acoso|represalia/g,'safety harassment retaliation'],[/queja|agravio|plazo/g,'grievance deadline']];return q+' '+map.filter(([r])=>r.test(q)).map(([,s])=>s).join(' ')}
function shareApp(){const u=new URL('./',location.href);u.search='';u.hash='';const url=u.href;$('view').innerHTML=`<h2>Share Member Assistant</h2>${notice('Share only this public app link, not a vault backup or personal record. Intended for members; the public link does not verify membership.')}${panel(`<h3>Scan to open the member app</h3><canvas id="shareQR" class="share-qr" aria-label="QR code for public member app link"></canvas><p class="wraptext">${esc(url)}</p>${btn('copyApp','Copy link',true)}${btn('shareApp','Share link')}${btn('downloadQR','Download QR code')}`)}<button data-go="More" class="full">Back to tools</button>`;let q=new LocalQRCode(-1,1);q.addData(url);q.make();let n=q.getModuleCount(),scale=Math.max(4,Math.floor(320/(n+8))),c=$('shareQR');c.width=c.height=(n+8)*scale;let ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#111';for(let r=0;r<n;r++)for(let col=0;col<n;col++)if(q.isDark(r,col))ctx.fillRect((col+4)*scale,(r+4)*scale,scale,scale);act('copyApp',async()=>{await navigator.clipboard.writeText(url);notify('Link copied')});act('shareApp',async()=>{if(navigator.share)await navigator.share({title:'Teamsters Member Assistant',url});else{await navigator.clipboard.writeText(url);notify('Link copied')}});act('downloadQR',()=>c.toBlob(b=>blobDownload(b,'member-assistant-QR.png'),'image/png'))}
function deadlineSummary(){if(!state)return '';let now=today();let events=state.events.filter(e=>['Confirmed deadline','Grievance follow-up'].includes(e.type)&&e.date>=now).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,3);return events.length?panel(`<h3>Upcoming deadlines & follow-ups</h3>${events.map(e=>`<p>${esc(e.date)} · ${esc(e.title)}</p>`).join('')}<button data-go="Calendar">Open calendar</button>`):''}
function paycheck(){const inputs=[['payRate','Base hourly rate',''],['regHours','Regular hours','0'],['otHours','Overtime hours','0'],['otMult','Overtime multiplier','1.5'],['dtHours','Double-time hours','0'],['dtMult','Double-time multiplier','2'],['otherPay','Other expected premiums ($)','0'],['actualPay','Actual gross pay for same hours ($)','']];$('view').innerHTML=`<h2>Paycheck comparison</h2>${notice('Estimate only. Enter confirmed hours, rates and multipliers from your applicable agreement. Do not count the same hours twice. Include verified meal or standby premiums separately. The bundled contract is past its stated term. Compare gross pay for the same hours before deductions.')}<form id="payForm">${panel(inputs.map(([id,l,v])=>`<label for="${id}">${tr(l)}</label><input id="${id}" type="number" min="0" step="any" inputmode="decimal" value="${v}" required>`).join(''))}<button class="primary full">Calculate difference</button></form><div id="payResult"></div><button data-go="More" class="full">Back to tools</button>`;form('payForm',()=>{let nums=inputs.map(([id])=>Number(val(id)));if(nums.some(n=>!Number.isFinite(n)||n<0)||nums[0]<=0||nums[3]<1||nums[5]<1)throw Error('Enter valid nonnegative values and multipliers of at least 1.');let [r,h,o,om,d,dm,x,paid]=nums;let expected=r*(h+o*om+d*dm)+x,delta=expected-paid;const money=v=>new Intl.NumberFormat(memberLang==='es'?'es-US':'en-US',{style:'currency',currency:'USD'}).format(v);$('payResult').innerHTML=panel(`<p>${tr('Expected gross pay')}: <b>${money(expected)}</b></p><p>${tr('Actual gross pay')}: <b>${money(paid)}</b></p><h3>${tr('Difference (expected minus actual)')}: ${money(delta)}</h3>${btn('logPay',tr('Log possible pay discrepancy'),true)}`);act('logPay',()=>{tab='Incident Log';newIncident();incidentDraft.title=memberLang==='es'?'Posible diferencia de pago':'Possible pay discrepancy';incidentDraft.category='Pay / overtime';incidentDraft.notes=`Estimated gross: ${money(expected)}; paid: ${money(paid)}; difference: ${money(delta)}. Rate ${money(r)}, regular ${h}h, OT ${o}h × ${om}, DT ${d}h × ${dm}, other premiums ${money(x)}. Verify hours and applicable rules with steward.`;render()})})}
pairs(`
Changing language reloads this screen. Save any unfinished work first. Continue?|Cambiar el idioma recarga esta pantalla. Guarda los cambios antes de continuar. ¿Continuar?
Stop recording before changing language.|Detén la grabación antes de cambiar de idioma.
Private vault locked.|Bóveda privada bloqueada.
Profile saved|Perfil guardado
Enter name, employer and department.|Ingresa nombre, empleador y departamento.
Passphrases differ|Las contraseñas no coinciden
Use at least 12 characters.|Usa al menos 12 caracteres.
Prepare a draft for your steward. Sending a draft is not official filing. Contact your representative promptly about filing deadlines.|Prepara un borrador para tu delegado. Enviarlo no constituye una presentación oficial. Contacta pronto a tu representante para confirmar los plazos.
Leave optional or unknown information blank. Do not include patient information or unnecessary identifiers.|Deja en blanco los datos opcionales o desconocidos. No incluyas datos de pacientes ni identificadores innecesarios.
Review every detail. Only sign for yourself. Grievance number, union representative signature and official dispositions remain blank. Contact your steward to confirm electronic signature acceptance and filing deadlines.|Revisa cada detalle. Firma solo por ti. El número de queja, la firma del representante y las resoluciones oficiales quedan en blanco. Confirma con tu delegado la aceptación de firmas electrónicas y los plazos.
Preview all pages and verify the recipient. The shared PDF is not encrypted. Sharing is not official filing.|Revisa todas las páginas y verifica el destinatario. El PDF compartido no está cifrado. Compartirlo no equivale a presentarlo oficialmente.
If direct file sharing is unavailable, download and manually attach the PDF to your message.|Si no puedes compartir directamente, descarga y adjunta el PDF a tu mensaje.
Record your own recollection, not confidential conversations without consent. Never include patient-identifying information. Saved entries stay in your encrypted vault.|Graba tus propios recuerdos, no conversaciones confidenciales sin consentimiento. Nunca incluyas datos que identifiquen a pacientes. Los registros quedan en tu bóveda cifrada.
Record your own recollection. Saved audio stays local.|Graba tus propios recuerdos. El audio guardado queda en el dispositivo.
Included contract · Kaiser / SCPMG|Contrato incluido · Kaiser / SCPMG
January 1, 2022 – December 31, 2025 · 89 PDF pages|1 de enero de 2022 – 31 de diciembre de 2025 · 89 páginas PDF
Past stated term. Confirm the current agreement, any extensions and amendments with your steward. This agreement does not apply to every Local 166 employer.|Vigencia indicada vencida. Confirma con tu delegado el convenio actual, extensiones y enmiendas. Este convenio no aplica a todos los empleadores de Local 166.
Open / download contract PDF ↗|Abrir / descargar contrato PDF ↗
Open blank grievance template ↗|Abrir formulario de queja en blanco ↗
Pre-indexed for Member AI. No upload needed.|Indexado para la IA sindical. No requiere carga.
This is an independent screening tool, not a legal or union determination. Red means urgent, green means worth review, yellow means uncertain. None of these results means you cannot file.|Herramienta independiente de orientación, no decisión legal ni sindical. Rojo significa urgente; verde, merece revisión; amarillo, incertidumbre. Ningún resultado impide presentar una queja.
Possible discipline, safety, retaliation or a time-sensitive concern. Contact your steward or business agent now; do not wait for AI.|Posible disciplina, seguridad, represalias o asunto urgente. Contacta ahora a tu delegado o agente; no esperes a la IA.
Your description has potentially relevant source text and you report supporting records. A representative must check the actual facts, contract and filing requirements.|Tu descripción tiene posibles coincidencias en las fuentes y cuentas con registros. Un representante debe verificar los hechos, el contrato y los requisitos.
There is not enough verified information to assess the issue. Gather records and ask a representative; this is not a denial.|No hay suficiente información verificada. Reúne registros y consulta a un representante; esto no es una denegación.
Model not loaded. Screening and source search work without AI.|Modelo no cargado. La evaluación preliminar y búsqueda funcionan sin IA.
Uses the built-in Kaiser / SCPMG reference and, when unlocked, your private contract excerpts. Confirm current coverage first. Initial runtime/model download requires Wi-Fi and a WebGPU-compatible browser. Test with fictional or redacted information.|Usa la referencia Kaiser / SCPMG y tus extractos privados cuando la bóveda está abierta. Confirma la vigencia. La descarga inicial requiere Wi-Fi y un navegador compatible con WebGPU. Prueba con datos ficticios o anonimizados.
Share only this public app link, not a vault backup or personal record. Intended for members; the public link does not verify membership.|Comparte solo el enlace público, no una copia de la bóveda ni registros personales. Para miembros; el enlace público no verifica la membresía.
Estimate only. Enter confirmed hours, rates and multipliers from your applicable agreement. Do not count the same hours twice. Include verified meal or standby premiums separately. The bundled contract is past its stated term. Compare gross pay for the same hours before deductions.|Solo estimación. Ingresa horas, tarifas y multiplicadores confirmados de tu convenio. No cuentes horas dos veces. Añade primas verificadas de comida o guardia por separado. El contrato incluido ha superado su vigencia indicada. Compara el pago bruto de las mismas horas antes de deducciones.
Link copied|Enlace copiado
Incident saved to calendar.|Incidente guardado en el calendario.
Local 166 main office|Oficina principal de Local 166
Search employer or account|Buscar empleador o cuenta
Save my steward’s contact|Guardar contacto de mi delegado
Edit contact|Editar contacto
No match. Call the main office to identify your representative.|Sin resultados. Llama a la oficina principal para identificar a tu representante.
`);

pairs(`
Delete AI Download|Eliminar descarga de IA
Release model frees working memory. Delete AI Download removes cached model files to free storage. Redownload anytime. Your private vault is not deleted.|Liberar modelo libera memoria de trabajo. Eliminar descarga de IA borra los archivos del modelo para liberar almacenamiento. Puedes descargarlo de nuevo. Tu bóveda privada no se elimina.
Checking downloaded AI files…|Comprobando archivos de IA descargados…
Cached AI files found. You can remove them below.|Se encontraron archivos de IA guardados. Puedes eliminarlos aquí.
No matching downloaded AI files found.|No se encontraron archivos de IA descargados.
Cached model status unavailable.|Estado de descarga no disponible.
Delete both downloaded AI models from this browser? Your private vault, grievances, recordings, calendar and contract will be kept. Other apps on the same website may share these model files. Close other AI tabs first. You can download again anytime.|¿Eliminar los dos modelos de IA descargados de este navegador? Se conservarán tu bóveda, quejas, grabaciones, calendario y contrato. Otras aplicaciones del mismo sitio pueden compartir estos archivos. Cierra otras pestañas de IA primero. Puedes descargarlos de nuevo cuando quieras.
Removing AI download…|Eliminando descarga de IA…
AI download removed. Load local AI to download it again.|Descarga de IA eliminada. Carga la IA local para descargarla de nuevo.
No matching AI download found. You can load AI anytime.|No se encontró una descarga de IA. Puedes cargar la IA en cualquier momento.
Model removal could not be verified. Try again.|No se pudo verificar la eliminación. Inténtalo de nuevo.
Model released. Download kept.|Modelo liberado. Descarga conservada.
Model cache management is unavailable in this browser.|La gestión de descargas de IA no está disponible en este navegador.
Some model files remain. Close other AI tabs and try again.|Quedan archivos del modelo. Cierra otras pestañas de IA e inténtalo de nuevo.
`);
