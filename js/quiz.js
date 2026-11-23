// Raio-X grátis: transforma cada <p> do #quiz em pergunta sim/não e calcula a nota
(() => {
    const f = document.querySelector("#quiz"); if (!f) return;
    const ZAP = "5551989406950";
    f.querySelectorAll("fieldset p").forEach((p, i) => {
        p.insertAdjacentHTML("beforeend",
            `<span class="sn"><label><input type="radio" name="q${i}" value="1" required> Sim</label>` +
            `<label><input type="radio" name="q${i}" value="0"> Não</label></span>`);
    });
    f.onsubmit = e => {
        e.preventDefault();
        let total = 0; const notas = [];
        f.querySelectorAll("fieldset").forEach(fs => {
            const r = [...fs.querySelectorAll("input:checked")].map(x => +x.value);
            const s = r.reduce((a, b) => a + b, 0); total += s;
            notas.push(`${fs.dataset.f}: ${Math.round(s / r.length * 10)}/10`);
        });
        const faixa = total <= 4 ? "Invisível" : total <= 7 ? "Aparece, mas perde cliente" : "Bem posicionado";
        const msg = `Olá! Fiz o raio-X no site. Nota geral ${total}/10 (${faixa}). ${notas.join(", ")}. Quero o raio-X completo do meu perfil.`;
        const o = f.querySelector("#quiz-res"); o.hidden = false;
        o.innerHTML = `<p class="nota"><strong>${total}/10</strong> · ${faixa}</p><p>${notas.join(" · ")}</p>` +
            `<p>Quer o raio-X completo com 3 ações para o seu caso? É grátis.</p>` +
            `<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${ZAP}?text=${encodeURIComponent(msg)}">Receber pelo WhatsApp</a>`;
        o.scrollIntoView({ behavior: "smooth", block: "center" });
    };
})();