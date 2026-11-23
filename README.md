# Perfil Avaliado · site do serviço

Site estático do serviço de presença local no Google (respostas às avaliações, pedido de avaliações, cuidado do perfil e páginas para comércios). Publicado em **https://perfilavaliado.paulojr.dev.br** via GitHub Pages.

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
- `CNAME`: perfilavaliado.paulojr.dev.br


