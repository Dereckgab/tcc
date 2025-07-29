const produtos = [
    // 🥪 Lanches
    { id: 1, nome: "X-Burguer", descricao: "Pão, hambúrguer e queijo", preco: 12.00, categoria: "Lanches", imagem: "img/produtos/xburguer.jpg" },
    { id: 2, nome: "X-Salada", descricao: "Pão, hambúrguer, queijo, alface e tomate", preco: 14.00, categoria: "Lanches", imagem: "img/produtos/xsalada.jpg" },
    { id: 3, nome: "X-Bacon", descricao: "Pão, hambúrguer, queijo e bacon crocante", preco: 16.00, categoria: "Lanches", imagem: "img/produtos/xbacon.jpg" },
    { id: 4, nome: "X-Egg", descricao: "Pão, hambúrguer, ovo e queijo", preco: 15.00, categoria: "Lanches", imagem: "img/produtos/xegg.jpg" },
    { id: 5, nome: "X-Tudo", descricao: "Tudo que tem direito!", preco: 20.00, categoria: "Lanches", imagem: "img/produtos/xtudo.jpg" },
  
    // 🍟 Porções
    { id: 6, nome: "Batata Frita", descricao: "Batata crocante com sal", preco: 10.00, categoria: "Porções", imagem: "img/produtos/batata.jpg" },
    { id: 7, nome: "Batata com Cheddar e Bacon", descricao: "Batata coberta com cheddar e bacon", preco: 18.00, categoria: "Porções", imagem: "img/produtos/batata-bacon.jpg" },
    { id: 8, nome: "Frango à passarinho", descricao: "Frango temperado frito", preco: 22.00, categoria: "Porções", imagem: "img/produtos/frango.jpg" },
  
    // 🥤 Bebidas
    { id: 9, nome: "Coca-Cola Lata", descricao: "350ml gelada", preco: 6.00, categoria: "Bebidas", imagem: "img/produtos/coca.jpg" },
    { id: 10, nome: "Guaraná Antárctica", descricao: "Lata 350ml", preco: 6.00, categoria: "Bebidas", imagem: "img/produtos/guarana.jpg" },
    { id: 11, nome: "Água Mineral", descricao: "Sem gás", preco: 3.00, categoria: "Bebidas", imagem: "img/produtos/agua.jpg" },
  
    // 🍺 Cervejas
    { id: 12, nome: "Skol", descricao: "Lata 350ml", preco: 5.50, categoria: "Cerveja", imagem: "img/produtos/skol.jpg" },
    { id: 13, nome: "Brahma", descricao: "Garrafa 600ml", preco: 8.00, categoria: "Cerveja", imagem: "img/produtos/brahma.jpg" },
    { id: 14, nome: "Heineken", descricao: "Long neck", preco: 9.50, categoria: "Cerveja", imagem: "img/produtos/heineken.jpg" }
  ];
  
  // Campo de busca
  const campoBusca = document.getElementById('campoBusca');
  campoBusca.addEventListener('input', () => filtrarProdutos(campoBusca.value));
  
  // Monta categorias
  function montarCategorias() {
    const todas = ['Todas', ...new Set(produtos.map(p => p.categoria))];
    const nav = document.getElementById('categorias');
    nav.innerHTML = '';
    todas.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.textContent = cat;
      btn.classList.toggle('ativa', i === 0);
      btn.onclick = () => {
        document.querySelectorAll('.categorias button').forEach(b => b.classList.remove('ativa'));
        btn.classList.add('ativa');
        montarProdutos(cat);
      };
      nav.appendChild(btn);
    });
  }
  
  // Monta os cards de produto
  function montarProdutos(categoria = 'Todas') {
    const container = document.getElementById('produtos-list');
    container.innerHTML = '';
    const filtrados = produtos.filter(p => categoria === 'Todas' || p.categoria === categoria);
    filtrados.forEach(p => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}">
        <div class="produto-content">
          <div class="produto-nome">${p.nome}</div>
          <div class="produto-desc">${p.descricao}</div>
          <div class="produto-preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
        </div>`;
      container.appendChild(card);
    });
  }
  
  // Filtro por busca
  function filtrarProdutos(texto) {
    const txt = texto.toLowerCase();
    const container = document.getElementById('produtos-list');
    container.innerHTML = '';
    const encontrados = produtos.filter(p =>
      p.nome.toLowerCase().includes(txt) || p.descricao.toLowerCase().includes(txt)
    );
    encontrados.forEach(p => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}">
        <div class="produto-content">
          <div class="produto-nome">${p.nome}</div>
          <div class="produto-desc">${p.descricao}</div>
          <div class="produto-preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
        </div>`;
      container.appendChild(card);
    });
  }
  
  // Inicialização
  montarCategorias();
  montarProdutos();
  