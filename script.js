const burger = document.getElementById('burgerBtn');
const panel = document.getElementById('mobilePanel');

burger.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.textContent = open ? '✕' : '☰';
});

panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    panel.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.textContent = '☰';
}));

const form = document.getElementById('formulario');
const ok = document.getElementById('formSuccess');
const err = form.querySelector('.form-error');

function showErr(msg, field) { err.textContent = msg; err.hidden = false; field.focus(); }
form.addEventListener('submit', e => {
    e.preventDefault();
    err.hidden = true;
    const nome = form.elements.nome.value.trim();
    const tel = form.elements.telefone.value.replace(/\D/g, '');
    if (nome.length < 2) return showErr('Digite seu nome para continuarmos.', form.elements.nome);
    if (tel.length < 10 || tel.length > 11) return showErr('Digite o WhatsApp com DDD, por exemplo (11) 90000-0000.', form.elements.telefone);
    document.getElementById('okNome').textContent = nome.split(' ')[0];
    form.hidden = true;
    ok.hidden = false;
    ok.focus();
});

document.querySelectorAll('a[href="#formulario"]').forEach(a => a.addEventListener('click', () => {
    setTimeout(() => { if (!form.hidden) form.elements.nome.focus({ preventScroll: true }); }, 500);
}));