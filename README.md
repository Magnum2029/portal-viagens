# 🌍 Portal de Viagens

Aplicação web desenvolvida com **Next.js, React e TypeScript** para apresentar destinos turísticos através de uma interface moderna, responsiva e organizada.

O projeto utiliza o **App Router do Next.js**, rotas dinâmicas para páginas individuais de destinos e geração dinâmica de metadados para melhorar SEO e compartilhamento nas redes sociais.

---

## 🚀 Funcionalidades

* Listagem de destinos turísticos
* Página individual para cada destino
* Rotas dinâmicas utilizando `[slug]`
* Informações sobre país, fuso horário e melhor época para visitar
* Exibição de destaques turísticos
* Sistema de tags por destino
* Página personalizada para destinos não encontrados
* Geração dinâmica de metadados
* Configuração de Open Graph
* Otimização de imagens com `next/image`
* Navegação utilizando `next/link`
* Layout responsivo
* Componentização da interface

---

## 🛠️ Tecnologias utilizadas

* **Next.js 15**
* **React 19**
* **TypeScript**
* **App Router**
* **CSS Modules**
* **Next Image**
* **ESLint**
* **Git**
* **GitHub**

---

## 🧠 Conceitos aplicados

Este projeto demonstra a utilização de conceitos importantes do desenvolvimento moderno com Next.js:

### Rotas dinâmicas

Cada destino possui uma página própria através da estrutura:

```text
/destinos/[slug]
```

Exemplo:

```text
/destinos/paris
```

---

### SEO dinâmico

As páginas dos destinos utilizam `generateMetadata` para criar título, descrição e informações de Open Graph dinamicamente de acordo com o destino acessado.

Isso permite que cada página tenha metadados específicos para mecanismos de pesquisa e compartilhamento.

---

### Tratamento de páginas inexistentes

Caso um destino informado na URL não exista, a aplicação utiliza:

```typescript
notFound()
```

para apresentar uma página 404 personalizada.

---

### Otimização de imagens

As imagens são renderizadas utilizando o componente:

```typescript
next/image
```

permitindo que o Next.js realize otimizações de carregamento e responsividade.

---

## 📁 Estrutura principal

```text
portal-viagens/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── destinos/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── CardDestino.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── lib/
│       └── destinos.ts
│
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## ▶️ Executando o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Magnum2029/portal-viagens.git
```

### 2. Entre na pasta

```bash
cd portal-viagens
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em modo de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível normalmente em:

```text
http://localhost:3000
```

---

## 🏗️ Build de produção

Para gerar uma versão otimizada:

```bash
npm run build
```

Para iniciar a versão de produção:

```bash
npm start
```

---

## 🔍 Qualidade de código

O projeto possui ESLint configurado.

Para executar a análise:

```bash
npm run lint
```

---

## 🌐 Deploy

A publicação online será adicionada após a configuração do deploy.

---

## 📈 Melhorias futuras

Algumas evoluções previstas para o projeto:

* Integração com API externa de turismo
* Sistema de pesquisa de destinos
* Filtros por país e categoria
* Favoritos
* Novos destinos
* Melhorias de acessibilidade
* Testes automatizados
* CI/CD com GitHub Actions

---

## 👨‍💻 Autor

**Magnum de Oliveira Santos**

Desenvolvedor Front-End & Back-End

* GitHub: https://github.com/Magnum2029
* Portfólio: https://github.com/Magnum2029/portfolio-magnum-react

---

⭐ Projeto desenvolvido como parte da evolução profissional em desenvolvimento Front-End com React, TypeScript e Next.js.
