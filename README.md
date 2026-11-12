# Perfil Avaliado · site do serviço

Site estático do serviço de presença local no Google (respostas às avaliações, pedido de avaliações, cuidado do perfil e páginas para comércios). Publicado em **https://avaliacoes.paulojr.dev.br** via GitHub Pages.

## Arquivos
- `index.html`: página principal (serviços, pacotes, demonstração, perguntas, contato)
- `pacotes.html` + `js/pacotes.js`: detalhes de cada pacote (âncoras `#presenca`, `#reputacao`, `#completo`); manter o número igual ao do `CONFIG`
- `cadastro.html` + `js/cadastro.js`: formulário de cadastro do cliente (abre o WhatsApp, não guarda dados; manter o número igual ao do `CONFIG`)
- `privacidade.html` e `404.html`: política de privacidade e página de erro
- `css/style.css`: estilos base. `css/secoes.css`: estilos das seções de serviços, pacotes, perguntas e depoimentos
- `css/design.css`: camada de design (botões, hero, serviços, pacotes, faixas); carregar depois dos outros CSS
- `js/tema.js`: modo escuro (todas as páginas). `js/script.js`: configuração, demonstração e contato
- `js/extras.js`: formulário do diagnóstico gratuito (depende do `script.js`; carregue depois dele)
- `img/social-preview.png`: imagem de compartilhamento (1200×630)
- `CNAME`: domínio personalizado

## Configuração
Tudo que muda fica no topo de `js/script.js` (`CONFIG`): nome do serviço, WhatsApp, e-mail e `API_URL`.
Se trocar o nome, altere também `<title>`, as tags `og:` e os textos de `privacidade.html` e `404.html`.

## Antes de publicar
- [ ] Refazer a imagem `img/social-preview.png` com a mensagem atual
- [ ] Revisar o texto da política de privacidade e o texto do "Sobre"
- [ ] Depoimentos: a seção está oculta (`hidden`); só ative com autorização por escrito de um cliente real

## Publicação (GitHub Pages)
1. Repositório → Settings → Pages → Deploy from branch (`main`, pasta `/root`).
2. No DNS do domínio: `CNAME` de `avaliacoes` para `<seu-usuario>.github.io`.
3. Em Pages, informar o domínio personalizado e ativar **Enforce HTTPS** quando liberar.

## Demonstração
Com `API_URL` vazio, o botão usa respostas de exemplo (sem custo). Para usar IA de verdade, aponte `API_URL` para um endpoint seu que receba `{texto, nota, tom}` e devolva `{resposta, aprovacao, motivo}`. **A chave da IA fica só no backend**, com limite por IP e teto de gasto. Nunca no JavaScript.
