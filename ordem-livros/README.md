# Ordem Livros

Ordem Livros é um projeto web desenvolvido com o framework Svelte Kit que permite gerenciar e organizar informações sobre livros, autores e séries literárias.

## Principais Características

- Interface web intuitiva e responsiva construída com Svelte
- Rotas e navegação gerenciadas pelo Svelte Kit 
- Listagem e detalhes de autores
- Listagem e detalhes de séries literárias
- Integração com API backend para buscar os dados (não incluída neste projeto)

## Tecnologias Utilizadas

- [Svelte](https://svelte.dev/) - Framework web reativo 
- [Svelte Kit](https://kit.svelte.dev/) - Framework para construção de apps Svelte com SSR, code splitting, etc
- [Vite](https://vitejs.dev/) - Build tool moderna e rápida
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript

## Estrutura do Projeto

- `src/routes` - Contém as páginas e rotas da aplicação
  - `src/routes/autores` - Páginas relacionadas a listagem e detalhes de autores
  - `src/routes/series` - Páginas relacionadas a listagem e detalhes de séries
- `static` - Arquivos estáticos como imagens e ícones
- `package.json` - Manifesto do projeto e dependências
- `svelte.config.js` - Configuração do Svelte Kit
- `tsconfig.json` - Configuração do TypeScript
- `vite.config.js` - Configuração do Vite

## Instalação

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado 
2. Clone este repositório: `git clone https://github.com/seu-usuario/ordem-livros.git`
3. Navegue até o diretório do projeto: `cd ordem-livros` 
4. Instale as dependências: `npm install`

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação rodando.

## Build

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos gerados estarão no diretório `build`.

## Deploy

O deploy pode ser feito em qualquer serviço de hospedagem de sites estáticos, como [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), etc.

Basta apontar o serviço para o diretório `build` gerado no passo anterior.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
