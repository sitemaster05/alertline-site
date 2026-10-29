// Contact channels for demo and trial-key requests. Fill in before publishing; empty entries are hidden.
const CONTACT = {
  email: '',     // e.g. 'sales@example.com'
  telegram: 'gsystemsuz',  // username without @
  whatsapp: '',  // international number, digits only
};

const box = document.getElementById('contactActions');
const subject = encodeURIComponent('AlertLine: демо и пробный ключ');
const links = [];
if (CONTACT.email) links.push(`<a class="btn btn-amber" href="mailto:${CONTACT.email}?subject=${subject}">Написать на ${CONTACT.email}</a>`);
if (CONTACT.telegram) links.push(`<a class="btn ${links.length ? 'btn-ghost' : 'btn-amber'}" href="https://t.me/${CONTACT.telegram}" rel="noopener">Написать в Telegram @${CONTACT.telegram}</a>`);
if (CONTACT.whatsapp) links.push(`<a class="btn btn-ghost" href="https://wa.me/${CONTACT.whatsapp}" rel="noopener">WhatsApp</a>`);
box.innerHTML = links.length ? links.join('') : '<p class="pending">Контакты для заявок появятся здесь перед публикацией.</p>';
