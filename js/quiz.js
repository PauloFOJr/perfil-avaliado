// Raio-X grátis: transforma cada <p> do #quiz em pergunta sim/não e mostra o resultado num medidor
(() => {
    const f = document.querySelector("#quiz"); if (!f) return;
    const ZAP = "5551989406950";
    const COR = n => n <= 4 ? "#E5484D" : n <= 7 ? "#F5B13D" : "#30A46C";
    // ponto no arco: v de 0 a 10 vira ângulo de 180° a 0°
    const pt = v => { const a = Math.PI * (1 - v / 10); return [100 + 80 * Math.cos(a), 100 - 80 * Math.sin(a)]; };
    const arco = (a, b, c) => {
        const [x1, y1] = pt(a), [x2, y2] = pt(b);
        return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} A80 80 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${c}"/>`;
    };
    const medidor = total => `
        <svg class="gauge" viewBox="0 0 200 118" role="img" aria-label="Nota ${total} de 10">
            <g fill="none" stroke-width="18">${arco(0, 4.5, "#E5484D")}${arco(4.6, 7.5, "#F5B13D")}${arco(7.6, 10, "#30A46C")}</g>
            <g class="ponteiro" style="--ang:${total * 18 - 90}deg">
                <line x1="100" y1="100" x2="100" y2="34" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                <circle cx="100" cy="100" r="7" fill="currentColor"/>
            </g>
            <text x="20" y="116" font-size="9" text-anchor="middle" fill="currentColor">0</text>
            <text x="180" y="116" font-size="9" text-anchor="middle" fill="currentColor">10</text>
        </svg>`;

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
            notas.push([fs.dataset.f, Math.round(s / r.length * 10)]);
        });
        const faixa = total <= 4 ? "Invisível" : total <= 7 ? "Aparece, mas perde cliente" : "Bem posicionado";
        const txt = notas.map(([n, v]) => `${n}: ${v}/10`).join(", ");
        const msg = `Olá! Fiz o raio-X no site. Nota geral ${total}/10 (${faixa}). ${txt}. Quero o raio-X completo do meu perfil.`;
        const o = f.querySelector("#quiz-res"); o.hidden = false;
        o.innerHTML = `<div class="painel">
            <div class="geral">${medidor(total)}
                <p class="nota"><strong>${total}/10</strong><span style="color:${COR(total)}">${faixa}</span></p></div>
            <ul class="frentes-nota">${notas.map(([n, v]) =>
            `<li><span>${n}</span><b>${v}/10</b><i><em style="--w:${v * 10}%;--c:${COR(v)}"></em></i></li>`).join("")}</ul>
        </div>
        <p>Quer o raio-X completo com 3 ações para o seu caso? É grátis.</p>
        <a class="btn" target="_blank" rel="noopener" href="https://wa.me/${ZAP}?text=${encodeURIComponent(msg)}">Receber pelo WhatsApp</a>`;
        requestAnimationFrame(() => setTimeout(() => o.classList.add("on"), 50));
        o.scrollIntoView({ behavior: "smooth", block: "center" });
    };
})();