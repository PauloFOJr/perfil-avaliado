// Formulário do diagnóstico gratuito (substitui o envio do formulário de contato; depende do script.js)
document.getElementById("contato-form").onsubmit = e => {
  e.preventDefault();
  const v = id => document.getElementById(id).value.trim();
  const msg = `Olá! Quero o diagnóstico gratuito do meu perfil. Meu nome é ${v("c-nome")}${v("c-neg") ? ", do negócio " + v("c-neg") : ""}. WhatsApp: ${v("c-zap")}.${v("c-maps") ? " Link no Google: " + v("c-maps") : ""}`;
  window.open(wa(msg), "_blank", "noopener");
};