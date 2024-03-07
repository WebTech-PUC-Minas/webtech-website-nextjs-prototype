# webtech-website-nextjs-prototype

Este repositório contém um protótipo bastante simples de uma aplicação web que exibe os labs publicados na organização do GitHub da WebTech e os membros públicos da organização. Os dados são obtidos por meio da API do GitHub.

## Motivação

Duas das seções do futuro site da WebTech, que está em desenvolvimento, são:

- **Labs:** exibirá os labs produzidos pelos membros da WebTech, que se concretizam como repositórios no GitHub;
- **Membros:** exibe os membros e orientadores da WebTech.

Foi levantada a possibilidade de obter estes dados de forma automática a partir da organização do GitHub. Ou seja, no lugar de construir um banco de dados contendo os dados dos labs e dos membros de cada uma das unidades da WebTech, e criar a necessidade de mantê-lo sempre atualizado, estas informações seriam obtidas por meio de uma integração com a API do GitHub. **Afinal, todos os metadados acerca dos repositórios e dos membros da WebTech já existem de forma estruturada no GitHub.**

## Tecnologia

As seguintes ferramentas foram utilizadas para o desenvolvimento deste protótipo, e as referências mencionados foram usados para compreender o funcionamento de cada uma delas.

- **[Octokit](https://github.com/octokit/octokit.js)**: para integração com a API do GitHub;
  - [GitHub Rest API Documentation](https://docs.github.com/en/rest)
  - [Quickstart for GitHub REST API](https://docs.github.com/en/rest/quickstart?apiVersion=2022-11-28)
  - [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- **[Next.js](https://nextjs.org/)**: para permitir a execução de código no servidor e no cliente;
  - [React foundations](https://nextjs.org/learn/react-foundations)
- **[React](https://reactjs.org/)**: para a construção da interface;
  - [Quick Start](https://react.dev/learn)
- **[Tailwind](https://tailwindcss.com/)**: para a estilização da interface;
  - [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- **[Vercel](https://vercel.com/)**: para hospedar a aplicação com deploy automático.

### Sobre a API do GitHub

A API do GitHub é bastante completa e muito bem documetada. Ela permite realizar a consulta e manipulação de quase todas as entidades da plataforma, incluindo organizações, repositórios e usuários.

Existem endpoints públicos que permitem o acesso a informações públicas. Por meio [deste endpoint](https://api.github.com/orgs/WebTech-PUC-Minas), por exemplo, é possível consultar as informações da organização da WebTech. Contudo, a quantidade de requisições que podem ser feitas por hora é muito limitada.

Para contornar este problema, surge a necessidade de executar as requisições de forma autenticada, o que requer a execução de código no servidor. O Next.js permite a execução de código no [servidor](https://nextjs.org/docs/app/building-your-application/rendering/server-components) e no [cliente](https://nextjs.org/docs/app/building-your-application/rendering/client-components), o que torna possível a execução de requisições autenticadas.

Para executar requisições autenticadas, é necessário criar um token de acesso, como [descrito na documentação](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). Neste protótipo, o token de acesso fica armazenado na variável de ambiente `GITHUB_AUTH`.

### Sobre o Octokit

Trata-se de uma biblioteca (também chamado de SDK) que facilita a integração com a API do GitHub. Ela evita que precisemos ficar construindo as requisições manualmente, e já oferece métodos prontos para cada um dos endpoints, indicando em sua documentação, inclusive, quais parâmetros precisam ser passados.

Neste protótipo, a instância do Octokit é criada no arquivo [github.js](https://github.com/WebTech-PUC-Minas/webtech-website-nextjs-prototype/blob/main/github.js). A instância é criada com o token de acesso, e é exportada para que possa ser utilizada em outros arquivos.

### Sobre o Tailwind

O Tailwind é uma biblioteca de estilização que permite a construção de interfaces de forma bastante rápida. Ele oferece uma série de classes que podem ser aplicadas diretamente nos elementos HTML, evitando a necessidade de criar classes CSS personalizadas.

Neste protótipo, ela foi incluída como uma sugestão de ferramenta a ser utilizada no desenvolvimento das interfaces do site da WebTech.

