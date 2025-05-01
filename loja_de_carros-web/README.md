# Concessionária de Carros

Este é um projeto de site para concessionária de carros desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Funcionalidades

- Página inicial com banner principal
- Filtros de busca avançados
- Grid de veículos em destaque
- Página de estoque com visualização em grid e lista
- Formulário de contato
- Design responsivo

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/loja_de_carros.git
cd loja_de_carros/loja_de_carros-web
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
src/
  ├── app/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   ├── globals.css
  │   └── estoque/
  │       └── page.tsx
  └── components/
      ├── HeroBanner.tsx
      ├── SearchFilters.tsx
      ├── FeaturedCars.tsx
      ├── WhyChooseUs.tsx
      └── ContactForm.tsx
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
