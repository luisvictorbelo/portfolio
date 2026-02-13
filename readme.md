# Portfolio - Luís Victor Belo

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e informações de contato como desenvolvedor full-stack.

## 🛠️ Tecnologias Utilizadas

- **Front-end**: React, Next.js, TypeScript, Tailwind CSS
- **Back-end**: Node.js
- **Outras Ferramentas**: Resend (para envio de e-mails)

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
.env.local
.eslintrc.json
.gitignore
components.json
next-env.d.ts
next.config.js
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
.next/
app/
components/
hooks/
lib/
public/
```

### Principais Diretórios

- **`app/`**: Contém as páginas principais do projeto, como layout e rotas.
- **`components/`**: Componentes reutilizáveis, como Header, Footer, Hero, Projects, Contact, etc.
- **`hooks/`**: Hooks personalizados para funcionalidades específicas.
- **`lib/`**: Funções auxiliares e bibliotecas customizadas.
- **`public/`**: Arquivos estáticos, como imagens e ícones.

## 🚀 Funcionalidades

- **Tema Claro/Escuro**: Implementado com o componente `ThemeProvider`.
- **Seção de Projetos**: Lista de projetos com filtros por tecnologia.
- **Formulário de Contato**: Envio de mensagens via API integrada ao serviço Resend.
- **Animações**: Transições suaves e animações para melhorar a experiência do usuário.

## 📄 Estrutura de Componentes

### Header

- Navegação com links para as seções do site.
- Menu responsivo para dispositivos móveis.

### Hero

- Apresentação com título, descrição e botões de ação.

### About

- Seção "Sobre Mim" com informações pessoais e habilidades.

### Projects

- Lista de projetos com imagens, descrições, tecnologias utilizadas e links para demonstrações ou repositórios.

### Contact

- Formulário de contato com validação e envio de mensagens.
- Informações de contato adicionais.

### Footer

- Informações de copyright e link para voltar ao topo.

## 📦 Como Executar o Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/luisvictorbelo/portfolio.git
    cd portfolio
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente no arquivo `.env.local`:

    ```
    RESEND_API_KEY=your_resend_api_key
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5. Acesse o projeto em [http://localhost:3000](http://localhost:3000).

## 🌟 Demonstração

Você pode acessar a versão online do portfólio [aqui](https://portfolio-phi-fawn-54.vercel.app/).

## 📧 Contato

- **E-mail**: luis.belo@outlook.com.br
- **GitHub**: [luisvictorbelo](https://github.com/luisvictorbelo)
- **LinkedIn**: [linkedin.com/in/luisvictorbelo](https://linkedin.com/in/luisvictorbelo)

---

Desenvolvido por Luís Victor Belo.
