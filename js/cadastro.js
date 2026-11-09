// Cadastro do negócio: monta um resumo e abre o WhatsApp. Nada é salvo no site.
const WHATSAPP = "5551989406950"; // manter igual ao CONFIG do script.js
const f = document.getElementById("cadastro");
const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ""; };
const CAMPOS = [["Negócio", "nome"], ["Segmento", "seg"], ["Cidade e bairro", "cid"], ["Endereço", "end"], ["WhatsApp do negócio", "zap"],
  ["Horário", "hor"], ["Serviços principais", "srv"], ["Perfil no Google", "tem"], ["Link do perfil", "link"], ["Quem responde as avaliações", "quem"],
  ["Site atual", "site"], ["Domínio", "dom"], ["Instagram", "insta"], ["Identidade visual", "ident"], ["Fotos e logo (link)", "fotos"], ["Observações", "obs"]];
function resumo() {
  const out = ["Olá! Quero começar com o Perfil Avaliado. Segue o cadastro do meu negócio:", `Responsável: ${val("contato")}`];
  CAMPOS.forEach(([t, id]) => { const v = val(id); if (v) out.push(`${t}: ${v}`); });
  const ch = [...f.querySelectorAll('input[name="svc"]:checked')].map(c => c.value);
  if (ch.length) out.push("Quero: " + ch.join(", "));
  return out.join("\n");
}
f.onsubmit = e => {
  e.preventDefault();
  const u = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(resumo())}`;
  if (u.length > 3500) { document.getElementById("aviso").hidden = false; return; }
  window.open(u, "_blank", "noopener");
};
document.getElementById("copiar-resumo").onclick = async e => {
  try { await navigator.clipboard.writeText(resumo()); e.target.textContent = "Respostas copiadas"; } catch (_) { e.target.textContent = "Não foi possível copiar"; }
};