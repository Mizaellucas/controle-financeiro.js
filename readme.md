# 💰 Gerenciador Financeiro via Terminal

> Um sistema leve e robusto de gestão de finanças pessoais em linha de comando, focado no aprendizado de manipulação de ficheiros, lógica assíncrona e persistência de dados em Node.js.

---

## 📌 Sobre o Projeto

O **Controle-financeiro** é uma aplicação de terminal (*CLI - Command Line Interface*) criada para gerir receitas e despesas de forma simples e eficiente. O projeto foi construído sem dependências externas, utilizando apenas recursos nativos do **Node.js** e ficheiros **JSON** como banco de dados local.

---

## 🚀 Funcionalidades Detalhadas

- 📖 **Leitura e *Parsing* de Dados (`fs.readFileSync` & `JSON.parse`):** 
  O sistema abre o ficheiro `dados.json` do disco de forma síncrona, lê o seu conteúdo em formato de texto bruto e converte-o (`parse`) para um objeto JavaScript estruturado, permitindo que a aplicação consiga manipular as informações em memória.

- ➕ **Manipulação do Array de Transações (`.push()`):** 
  Permite injetar novos registos financeiros diretamente na estrutura de dados em memória. Cada transação armazena informações vitais como identificador único (`id`), descrição detalhada, montante (`valor`), classificação operacional (`tipo` entre receita ou despesa) e agrupamento (`categoria`).

- 💾 **Persistência de Dados em Disco (`JSON.stringify` & `fs.writeFileSync`):** 
  Após atualizar as informações na memória, o programa converte novamente o objeto JavaScript para uma string de texto formatada em JSON legível (com indentação controlada) e sobrescreve o ficheiro de dados no disco, garantindo que as alterações não se perdem quando o terminal é fechado.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (Runtime)
- **JSON** (Armazenamento de dados)
- **Módulo `fs`** (*FileSystem* nativo para I/O)

