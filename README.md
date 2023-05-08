# Teste Front-End Chico Rei

## Configuração de IDE recomendada:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desativar Vetur)+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Configuração do projeto

```sh
npm install
```

### Compilar e atualizar para desenvolvimento

```sh
npm run dev
```

### Compilar e Minificar para Produção

```sh
npm run build
```

### Lint com [ESLint](https://eslint.org/)

```sh
npm run lint
```
### Estilos personalizados localizados no arquivo 'tailwind.config.js' na raiz do projeto:

```sh
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1280px',
        '1/8': '50%',
        '1/4': '100%'
      },
      fontSize: {
        sm: ['14px'],
        base: ['16px'],
        lg: ['20px'],
        xl: ['24px']
      },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}

```
