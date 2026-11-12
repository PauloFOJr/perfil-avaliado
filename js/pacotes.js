// Links de WhatsApp da página de pacotes (manter o número igual ao CONFIG do script.js)
const WHATSAPP = "5551989406950";
document.querySelectorAll("a[data-pkg]").forEach(a => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Vi o pacote " + a.dataset.pkg + " no site do Perfil Avaliado e quero saber mais.")}`;
  a.target = "_blank"; a.rel = "noopener";
});