package main

import (
  "encoding/json"
  "net/http"
)

type Produto struct {
  ID         int     `json:"id"`
  Nome       string  `json:"nome"`
  Descricao  string  `json:"descricao"`
  Preco      float64 `json:"preco"`
  Disponivel bool    `json:"disponivel"`
  Categoria  string  `json:"categoria"`
  Imagem     string  `json:"imagem"`
}

func main() {
  InitDB()
  defer DB.Close()

  http.Handle("/", http.FileServer(http.Dir("../frontend")))
  http.HandleFunc("/api/produtos", produtosHandler)

  log.Println("Servidor rodando em http://localhost:8080")
  http.ListenAndServe(":8080", nil)
}

func produtosHandler(w http.ResponseWriter, r *http.Request) {
  rows, err := DB.Query("SELECT id,nome,descricao,preco,disponivel,categoria,imagem FROM produtos")
  if err != nil {
    http.Error(w, err.Error(), 500)
    return
  }
  defer rows.Close()

  var produtos []Produto
  for rows.Next() {
    var p Produto
    var dispo int
    err := rows.Scan(&p.ID, &p.Nome, &p.Descricao, &p.Preco, &dispo, &p.Categoria, &p.Imagem)
    if err != nil {
      http.Error(w, err.Error(), 500)
      return
    }
    p.Disponivel = dispo == 1
    produtos = append(produtos, p)
  }

  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(produtos)
}
