// Contact channels for demo and trial-key requests. Empty entries are hidden.
const CONTACT = {
  email: '',               // e.g. 'sales@example.com'
  telegram: 'gsystemsuz',  // username without @
  whatsapp: '',            // international number, digits only
};

// The same script serves the Russian page and /en/.
const english = document.documentElement.lang === 'en';
const TEXT = english
  ? { subject: 'AlertLine: demo and trial key', email: 'Write to', telegram: 'Message on Telegram', pending: 'Contact details will appear here before publishing.' }
  : { subject: 'AlertLine: демо и пробный ключ', email: 'Написать на', telegram: 'Написать в Telegram', pending: 'Контакты для заявок появятся здесь перед публикацией.' };

const box = document.getElementById('contactActions');
const links = [];
if (CONTACT.email) links.push(`<a class="btn btn-amber" href="mailto:${CONTACT.email}?subject=${encodeURIComponent(TEXT.subject)}">${TEXT.email} ${CONTACT.email}</a>`);
if (CONTACT.telegram) links.push(`<a class="btn ${links.length ? 'btn-ghost' : 'btn-amber'}" href="https://t.me/${CONTACT.telegram}" rel="noopener">${TEXT.telegram} @${CONTACT.telegram}</a>`);
if (CONTACT.whatsapp) links.push(`<a class="btn btn-ghost" href="https://wa.me/${CONTACT.whatsapp}" rel="noopener">WhatsApp</a>`);
box.innerHTML = links.length ? links.join('') : `<p class="pending">${TEXT.pending}</p>`;
