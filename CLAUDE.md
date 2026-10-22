# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Página web pessoal de presente (1 ano de namoro), em português do Brasil. Não há build, dependências, testes nem lint configurados.

Para testar, basta abrir `index.html` no navegador.

## Estrutura

- `index.html`: marcação da página. Cada tela é uma `<section>`, e a função `irPara(id)` (em `script.js`) troca de tela.
- `style.css`: todo o visual, com cores em variáveis no `:root`.
- `script.js`: toda a lógica. O bloco `CONFIG` no topo concentra o conteúdo pessoal (nome, apelidos, data de início, carta, motivos, cards de fotos com mensagem e versículo). Mudanças de conteúdo devem ser feitas aqui, não no HTML.
- `fotos/`: fotos `1.jpeg` a `9.jpeg`, uma por card em `CONFIG.cartoes`.
- `.claude/skills/ui-ux-pro-max/`: skill de design de UI/UX (repositório nextlevelbuilder/ui-ux-pro-max-skill, versão 2.15.0, licença MIT), instalada manualmente a partir do ZIP do GitHub. Os scripts são locais; não fazem chamadas de rede.
- `.claude/skills/frontend-design/`: skill da Anthropic (repositório anthropics/skills, licença em `LICENSE.txt`), instalada manualmente a partir do ZIP do GitHub. Só contém instruções em Markdown.
- `musica.mp3`: música de fundo, carregada pelo elemento `<audio id="musica">`. Só toca após o primeiro clique dela, porque navegadores bloqueiam som automático.

## Pontos de atenção

- `inicioNamoro` é `new Date(2025, 9, 22, 12, 40)`. O mês do `Date` começa em 0, então `9` é outubro.
- O contador e a contagem regressiva para o próximo mesversário são calculados a partir de `inicioNamoro`, a cada segundo.
- Efeitos 3D e animações (coração girando, envelope que abre, fotos que inclinam, post-its que viram, corações ao fundo) usam só CSS e JavaScript simples, sem bibliotecas. A perspectiva dos cards de foto fica em cada card (`perspective(900px)` no `transform`), não no contêiner, senão cards longe do centro deformam. `prefers-reduced-motion` desliga o movimento.
- O botão "Não" da pergunta final foge do cursor (`fugir`). Isso é intencional.
- O botão "Salvar esta página" faz `fetch` de `style.css` e `script.js` e embute os dois no HTML baixado. Por isso ele falha quando `index.html` é aberto direto por duplo clique (`file://`), já que o navegador bloqueia o `fetch`. Nesse caso, o alerta pede para guardar a pasta inteira.
- A carta (`mensagemCarta`) ainda é um placeholder e deve ser escrita antes de enviar. As mensagens dos cards e os motivos são rascunhos editáveis.
- Os versículos dos cards são citados de memória (estilo Almeida Revista e Atualizada); conferir o texto numa Bíblia antes de enviar.
