CREATE TABLE produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  descricao TEXT,
  preco REAL NOT NULL,
  disponivel INTEGER NOT NULL,
  categoria TEXT NOT NULL,
  imagem TEXT
);

INSERT INTO produtos (nome, descricao, preco, disponivel, categoria, imagem) VALUES
('X-Salada', 'Hambúrguer com salada e queijo', 19.0, 1, 'Lanches', 'xsalada.jpg'),
('Hot Dog Especial', 'Cachorro quente com cheddar e bacon', 15.0, 1, 'Cachorro Quente', 'hotdog.jpg'),
('Batata Frita', 'Porção de batata frita crocante', 8.5, 1, 'Porções', 'batata.jpg');
