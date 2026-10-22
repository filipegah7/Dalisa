// ====== CONFIGURAÇÃO: troque os textos, fotos e a música aqui ======
const CONFIG = {
  nomeDela: "Dalisa",
  apelidos: ["amor", "moh", "princesa", "meu bem", "linda", "Lisa", "Lisinha"],
  inicioNamoro: new Date(2025, 9, 22, 12, 40), // 22/10/2025 às 12:40 (mês começa em 0)
  sorrisosPorDia: 10, // estimativa de quantos sorrisos ela te arranca por dia
  mensagemCarta: "[Escreva aqui a sua carta. Pode quebrar linhas à vontade.]\n\nCom amor,\n[Seu nome]",
  motivos: [
    "Seu sorriso que ilumina meu dia",
    "Seu jeito de cuidar das pessoas",
    "Sua risada, que eu adoro ouvir",
    "Como você me entende sem eu precisar falar",
    "A paciência que você tem comigo",
    "Seus abraços",
    "Sua coragem de ser você mesma",
    "Os planos que fazemos juntos"
  ],
  // Um card por foto: troque as mensagens pelas suas, se quiser
  cartoes: [
    { foto: "fotos/1.jpeg", mensagem: "Você fazendo careta e eu sem conseguir parar de rir. Com você, até um cantinho de parede vira o meu lugar favorito, linda.", versiculo: "O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbece.", referencia: "1 Coríntios 13:4" },
    { foto: "fotos/2.jpeg", mensagem: "Seu olhar calmo me diz tudo sem uma palavra. Perto de você o mundo fica em silêncio e eu fico em paz, amor.", versiculo: "No amor não existe medo; antes, o perfeito amor lança fora o medo.", referencia: "1 João 4:18" },
    { foto: "fotos/3.jpeg", mensagem: "Até uma conversa no meio da rua, com você, vira um momento que eu queria guardar para sempre, princesa.", versiculo: "Acima de tudo isto, porém, revesti-vos do amor, que é o vínculo da perfeição.", referencia: "Colossenses 3:14" },
    { foto: "fotos/4.jpeg", mensagem: "Um beijo seu e o tempo para. No nosso cantinho eu tenho tudo o que preciso, moh.", versiculo: "Tudo sofre, tudo crê, tudo espera, tudo suporta.", referencia: "1 Coríntios 13:7" },
    { foto: "fotos/5.jpeg", mensagem: "Nada me deixa mais feliz do que esse abraço. Sorrir ao seu lado é o que eu mais gosto de fazer, meu bem.", versiculo: "Amados, amemo-nos uns aos outros, porque o amor procede de Deus.", referencia: "1 João 4:7" },
    { foto: "fotos/6.jpeg", mensagem: "Suas mãos no meu rosto, seus olhos fechados… é esse carinho que eu quero receber todos os dias, Lisinha.", versiculo: "Põe-me como selo sobre o teu coração… porque o amor é forte como a morte.", referencia: "Cantares 8:6" },
    { foto: "fotos/7.jpeg", mensagem: "Perto de você eu me sinto em casa. Seu rosto colado no meu é o lugar onde eu quero ficar, Lisa.", versiculo: "Todos os vossos atos sejam feitos com amor.", referencia: "1 Coríntios 16:14" },
    { foto: "fotos/8.jpeg", mensagem: "Até um beijo de ponta-cabeça vira o mais bonito do mundo quando é com você, amor.", versiculo: "Nós amamos porque ele nos amou primeiro.", referencia: "1 João 4:19" },
    { foto: "fotos/9.jpeg", mensagem: "Um beijo na testa e você me responde com careta. Eu me apaixono por você em cada detalhe, moh. Que venham muitos anos mais.", versiculo: "Em todo o tempo ama o amigo, e na angústia se faz o irmão.", referencia: "Provérbios 17:17" }
  ]
};

// ====== Ícones SVG (herdam a cor do texto) ======
const ICONES = {
  coracao: '<svg class="icone preenchido" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.3 3.1 5 6.5 5c2 0 3.6 1.1 4.5 2.6C11.9 6.1 13.5 5 15.5 5c3.4 0 5.5 3.3 5 6.8C18.5 16.4 12 21 12 21z"/></svg>',
  play: '<svg class="icone preenchido" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z"/></svg>',
  pausa: '<svg class="icone preenchido" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4.5" width="4" height="15" rx="1"/><rect x="14" y="4.5" width="4" height="15" rx="1"/></svg>'
};

// ====== Navegação ======
function irPara(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
  window.scrollTo(0, 0);
  if (id === "final") chuvaDePetalas(60);
}

// ====== Música ======
// Navegadores bloqueiam som automático ao abrir a página; por isso a música
// começa no primeiro clique dela ("Claro que sim"), que libera o áudio.
const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("musica-botao");
function atualizarBotaoMusica() {
  const tocando = !musica.paused;
  botaoMusica.innerHTML = tocando ? ICONES.pausa : ICONES.play;
  botaoMusica.setAttribute("aria-label", tocando ? "Pausar música" : "Tocar música");
}
function tocarMusica() {
  musica.play().then(atualizarBotaoMusica).catch(() => {});
}
function alternarMusica() {
  if (musica.paused) tocarMusica();
  else { musica.pause(); atualizarBotaoMusica(); }
}
atualizarBotaoMusica();

// ====== Chuva de pétalas ======
function chuvaDePetalas(quantidade = 40) {
  const cores = ["#c2415f", "#e27a95", "#f0a6bb"];
  for (let i = 0; i < quantidade; i++) {
    const petala = document.createElement("div");
    petala.className = "petala";
    const tamanho = 14 + Math.round(Math.random() * 14);
    const cor = cores[Math.floor(Math.random() * cores.length)];
    petala.innerHTML = `<svg viewBox="0 0 24 24" width="${tamanho}" height="${tamanho}" fill="${cor}" aria-hidden="true"><path d="M12 2C7 7 5 12 12 22c7-10 5-15 0-20z"/></svg>`;
    const duracao = 4 + Math.random() * 4;
    const atraso = Math.random() * 2.5;
    petala.style.left = Math.random() * 100 + "vw";
    petala.style.animationDuration = duracao + "s";
    petala.style.animationDelay = atraso + "s";
    petala.style.setProperty("--deriva", (Math.random() * 160 - 80) + "px");
    petala.style.setProperty("--giro", (Math.random() * 720 - 360) + "deg");
    document.body.appendChild(petala);
    setTimeout(() => petala.remove(), (duracao + atraso) * 1000);
  }
}

// ====== Carta com efeito de digitação ======
let cartaDigitada = false;
function abrirCarta() {
  const envelope = document.querySelector(".envelope");
  if (envelope.classList.contains("aberto")) return;
  envelope.classList.add("aberto");
  setTimeout(mostrarCarta, 1500);
}

function mostrarCarta() {
  document.querySelector(".envelope").style.display = "none";
  document.getElementById("carta-area").style.display = "block";
  if (cartaDigitada) return;
  cartaDigitada = true;
  chuvaDePetalas();
  const texto = CONFIG.mensagemCarta;
  const alvo = document.getElementById("carta-texto");
  let i = 0;
  const intervalo = setInterval(() => {
    alvo.textContent = texto.slice(0, ++i);
    if (i >= texto.length) clearInterval(intervalo);
  }, 35);
}

// ====== Contador ======
function diferencaCalendario(inicio, fim) {
  let anos = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth() - inicio.getMonth();
  let dias = fim.getDate() - inicio.getDate();
  if (dias < 0) {
    meses--;
    dias += new Date(fim.getFullYear(), fim.getMonth(), 0).getDate();
  }
  if (meses < 0) { anos--; meses += 12; }
  return { anos, meses, dias };
}

function proximoMesversario(agora) {
  const data = new Date(CONFIG.inicioNamoro);
  let n = 1;
  while (true) {
    const candidata = new Date(CONFIG.inicioNamoro.getFullYear(), CONFIG.inicioNamoro.getMonth() + n, CONFIG.inicioNamoro.getDate());
    if (candidata > agora) return candidata;
    n++;
  }
}

// Atualiza o número e dispara a animação só quando o valor muda
function setNumero(id, valor) {
  const el = document.getElementById(id);
  if (el.textContent === String(valor)) return;
  el.textContent = valor;
  el.classList.remove("tick");
  void el.offsetWidth;
  el.classList.add("tick");
}

function atualizarContador() {
  const agora = new Date();
  const diff = agora - CONFIG.inicioNamoro;
  const { anos, meses, dias } = diferencaCalendario(CONFIG.inicioNamoro, agora);
  const totalDias = Math.floor(diff / 86400000);
  const horas = Math.floor(diff / 3600000) % 24;
  const minutos = Math.floor(diff / 60000) % 60;
  const segundos = Math.floor(diff / 1000) % 60;

  setNumero("c-anos", anos);
  setNumero("c-meses", meses);
  setNumero("c-dias", dias);
  setNumero("c-horas", horas);
  setNumero("c-minutos", minutos);
  setNumero("c-segundos", segundos);
  document.getElementById("c-total").textContent = totalDias;
  document.getElementById("final-dias").textContent = totalDias;
  const sorrisos = Math.floor(diff / 86400000 * CONFIG.sorrisosPorDia);
  document.getElementById("c-sorrisos").textContent = sorrisos.toLocaleString("pt-BR");

  const proximo = proximoMesversario(agora);
  const restante = proximo - agora;
  const diasRest = Math.floor(restante / 86400000);
  const horasRest = Math.floor(restante / 3600000) % 24;
  document.getElementById("proximo-mes").textContent = `${diasRest}d ${horasRest}h`;
  document.getElementById("proximo-data").textContent = `Dia ${proximo.toLocaleDateString("pt-BR")}`;
}
atualizarContador();
setInterval(atualizarContador, 1000);

// ====== Cards de fotos com mensagem e versículo ======
const areaCartoes = document.getElementById("cartoes");
CONFIG.cartoes.forEach(c => {
  const cartao = document.createElement("div");
  cartao.className = "cartao";
  cartao.innerHTML = `
    <img src="${c.foto}" alt="Nós dois">
    <p>${c.mensagem}</p>
    <p class="versiculo">“${c.versiculo}”<small>${c.referencia}</small></p>
  `;
  areaCartoes.appendChild(cartao);
});

// Entrada ao rolar: cada card aparece quando chega na tela
const observador = "IntersectionObserver" in window
  ? new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visivel"); observador.unobserve(e.target); }
      });
    }, { threshold: 0.15 })
  : null;

// Inclinação 3D e brilho que seguem o dedo ou o mouse
document.querySelectorAll("#cartoes .cartao").forEach(cartao => {
  if (observador) observador.observe(cartao); else cartao.classList.add("visivel");

  cartao.addEventListener("pointermove", e => {
    const r = cartao.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cartao.style.setProperty("--ry", ((x - 0.5) * 12).toFixed(1) + "deg");
    cartao.style.setProperty("--rx", ((0.5 - y) * 12).toFixed(1) + "deg");
    cartao.style.setProperty("--mx", (x * 100).toFixed(0) + "%");
    cartao.style.setProperty("--my", (y * 100).toFixed(0) + "%");
    cartao.classList.add("inclinado");
  });
  const soltar = () => {
    cartao.style.setProperty("--rx", "0deg");
    cartao.style.setProperty("--ry", "0deg");
    cartao.classList.remove("inclinado");
  };
  cartao.addEventListener("pointerleave", soltar);
  cartao.addEventListener("pointercancel", soltar);
  cartao.addEventListener("pointerup", e => { if (e.pointerType !== "mouse") soltar(); });
});

// ====== Mural de motivos ======
const mural = document.getElementById("mural");
CONFIG.motivos.forEach(texto => {
  const post = document.createElement("div");
  post.className = "postit";
  post.setAttribute("role", "button");
  post.tabIndex = 0;
  post.innerHTML = `<div class="miolo"><div class="face frente">${ICONES.coracao}</div><div class="face verso"></div></div>`;
  post.querySelector(".verso").textContent = texto;
  const virar = () => post.classList.add("virado");
  post.addEventListener("click", virar);
  post.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); virar(); } });
  mural.appendChild(post);
});

function sortearMotivo() {
  const i = Math.floor(Math.random() * CONFIG.motivos.length);
  const apelido = CONFIG.apelidos[Math.floor(Math.random() * CONFIG.apelidos.length)];
  const destino = document.getElementById("motivo-sorteado");
  destino.innerHTML = ICONES.coracao;
  destino.append(` ${CONFIG.motivos[i]}, ${apelido}.`);
}

// ====== Botão "Não" que foge ======
function fugir(botao) {
  const x = Math.random() * (window.innerWidth - botao.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - botao.offsetHeight - 20);
  botao.style.position = "fixed";
  botao.style.left = x + "px";
  botao.style.top = y + "px";
}

// ====== Coração 3D da abertura: camadas empilhadas em profundidade ======
(function montarCoracao3D() {
  const palco = document.getElementById("coracao-3d");
  const camadas = 18;
  for (let i = 0; i < camadas; i++) {
    const t = i / (camadas - 1);
    // do fundo (vinho) até a frente (rosa claro), para dar volume
    const cor = `hsl(${344 + t * 6}, ${62 + t * 6}%, ${30 + t * 34}%)`;
    const camada = document.createElement("div");
    camada.className = "camada";
    camada.style.transform = `translateZ(${(i - camadas / 2) * 2.4}px)`;
    camada.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="${cor}" d="M12 21s-7.5-4.6-9.5-9.2C1 8.3 3.1 5 6.5 5c2 0 3.6 1.1 4.5 2.6C11.9 6.1 13.5 5 15.5 5c3.4 0 5.5 3.3 5 6.8C18.5 16.4 12 21 12 21z"/></svg>`;
    palco.appendChild(camada);
  }
})();

// ====== Fundo: corações pequenos que sobem devagar ======
(function montarFundo() {
  const fundo = document.getElementById("fundo-flutuante");
  const cores = ["#c2415f", "#e27a95", "#f0a6bb"];
  for (let i = 0; i < 14; i++) {
    const tamanho = 12 + Math.round(Math.random() * 16);
    const item = document.createElement("div");
    item.className = "flutuante";
    item.innerHTML = `<svg viewBox="0 0 24 24" width="${tamanho}" height="${tamanho}" fill="${cores[i % cores.length]}" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.3 3.1 5 6.5 5c2 0 3.6 1.1 4.5 2.6C11.9 6.1 13.5 5 15.5 5c3.4 0 5.5 3.3 5 6.8C18.5 16.4 12 21 12 21z"/></svg>`;
    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = 16 + Math.random() * 16 + "s";
    item.style.animationDelay = -Math.random() * 30 + "s";
    item.style.setProperty("--x", (Math.random() * 120 - 60) + "px");
    item.style.setProperty("--r", (Math.random() * 120 - 60) + "deg");
    fundo.appendChild(item);
  }
})();

// ====== Final ======
document.getElementById("final-nome").textContent = CONFIG.nomeDela;

// Salva uma cópia da página como um único arquivo HTML, com CSS e JS embutidos
async function baixarPagina() {
  try {
    const [css, js] = await Promise.all([
      fetch("style.css").then(r => r.text()),
      fetch("script.js").then(r => r.text())
    ]);
    const html = "<!doctype html>\n" + document.documentElement.outerHTML
      .replace('<link rel="stylesheet" href="style.css">', `<style>\n${css}\n</style>`)
      .replace('<script src="script.js"></script>', `<script>\n${js}\n</script>`);
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "nosso-primeiro-ano.html";
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (erro) {
    alert("Não consegui gerar o arquivo. Abra a página por um servidor local ou guarde a pasta inteira (index.html, style.css, script.js, fotos e música).");
  }
}
