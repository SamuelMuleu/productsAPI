# AgilStore Inventory Management

Este é um sistema de gerenciamento de inventário para a loja AgilStore, desenvolvido em Node.js e Express, com persistência de dados em um arquivo JSON.

## Tecnologias Utilizadas

- Node.js
- Express
- UUID
- Body-Parser
- File System (fs)

## Instalação

1. Clone o repositório:
   ```bash
   git clone[ https://github.com/USERNAME/REPOSITORY_NAME.git](https://github.com/SamuelMuleu/productsAPI.git]
   cd agilstore
Instale as dependências:
```bash
npm install
```
Inicie o servidor:
```bash
npm start
O servidor estará rodando em http://localhost:3000.
```
## Endpoints
Adicionar Produto
```bash
URL: /products
Método: POST
Corpo da Requisição:
{
    "name": "Nome do Produto",
    "category": "Categoria",
    "stock": 10,
    "price": 99.99
}
```
Listar Produtos
```bash
URL: /products
Método: GET
```

Atualizar Produto
```bash
URL: /products/:id
Método: PUT
Corpo da Requisição:
{
    "name": "Nome Atualizado",
    "category": "Categoria Atualizada",
    "stock": 15,
    "price": 109.99
}

```
Excluir Produto
```bash
URL: /products/:id
Método: DELETE
```
Buscar Produto
```bash
URL: /products/search
Método: GET
Parâmetros de Consulta: query
/products/search?query=smartphone
```
Estrutura do Projeto
```bash
.src
├── controllers
│   └── productsController.js
├── routes
│   └── products.js
├── utils
│   └── dataUtils.js
   └── data.json
├── app.js
├── package.json
└── server.js
```
