# Budget Page Revamp

Projeto de orçamento detalhado para desenvolvimento de um sistema web para gerenciamento de eventos e fotos, utilizando Django (backend) e Vue.js (frontend).

## Sumário

- [Budget Page Revamp](#budget-page-revamp)
  - [Sumário](#sumário)
  - [Visão Geral](#visão-geral)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Como Rodar Localmente](#como-rodar-localmente)
  - [Fases do Projeto](#fases-do-projeto)
  - [Licença](#licença)
  - [Desenvolvedor](#desenvolvedor)

## Visão Geral

Este projeto apresenta o planejamento, fases e estimativas para a construção de um sistema web, incluindo painel administrativo, upload de múltiplas imagens, autenticação, integração com APIs e implantação em serviços gratuitos.

## Funcionalidades

- CRUD de eventos e fotos
- Upload de múltiplas imagens com processamento
- Painel administrativo em Vue.js
- Autenticação e autorização
- Integração com APIs de pagamento
- Testes, otimização e implantação

## Tecnologias Utilizadas

- **Frontend:** Vue.js, React (para a página de orçamento)
- **Backend:** Django, Django REST Framework
- **Banco de Dados:** Relacional (ex: PostgreSQL)
- **Hospedagem:** Serviços gratuitos para MVP
- **Outros:** TypeScript, TailwindCSS (se aplicável)

## Estrutura do Projeto

```
src/
  components/         # Componentes reutilizáveis (ex: tabelas de fases)
  pages/              # Páginas principais (ex: DjangoProject.tsx)
  assets/             # Imagens e ícones
  ...
README.md
package.json
...
```

## Como Rodar Localmente

1.Clone o repositório:

```sh
 git clone https://github.com/seu-usuario/budget-page-revamp.git
```

2.Instale as dependências:

```sh
npm install
# ou
yarn
```

3.Rode o projeto:

```sh
npm run dev
# ou
yarn dev
```

4.Acesse em `http://localhost:8080`

> **Obs:** O backend Django e o frontend Vue.js devem ser configurados separadamente conforme as instruções de cada stack.

## Fases do Projeto

O projeto está dividido em fases, cada uma com atividades, estimativas de horas e custos. Veja detalhes em [`src/components/ProjectPhaseTable.tsx`](src/components/ProjectPhaseTable.tsx) e [`src/pages/DjangoProject.tsx`](src/pages/DjangoProject.tsx).

Principais fases:

- Levantamento de requisitos e design
- Desenvolvimento backend (Django)
- Desenvolvimento frontend (Vue.js)
- Integração de APIs
- Testes e otimização
- Implantação e suporte inicial

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

## Desenvolvedor

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ldickmann)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-dickmann)

> \_Para dúvidas ou sugestões, entre em contato com o desenvolvedor.\_
