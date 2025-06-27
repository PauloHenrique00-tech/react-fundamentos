# Fundamentos de React

## 09_props-com-dados-dinâmicos

- Utilização de props para enviar dados dinâmicos para um componente
- Configuração de array de dados com definição de tipo
- Refatoração de componentes criando o ListaCursos com o map de Artigo dentro

## 08_props

Props (abreviação de properties/propriedades) são parâmetros que um componente pode receber.

Elas funcionam como argumentos de uma função, que podem receber dados de um componente pai para um componente filho.

Props basicamente são uma forma de comunicação entre componentes.

- Criação de props e definição de tipos para as props
- Desestruturação de props
- Manipulação de props opcionais
- Renderização condicional

## 07_tailwindcss

Tailwind CSS é um framework CSS utilitário. Em vez de criar classes personalizadas para estilizar elementos, você usa classes prontas (utilitárias) diretamente no HTML para aplicar estilos rapidamente.

💡 Como funciona?
Você aplica classes descritivas nos elementos HTML, como:

html
Copiar
Editar
<button class="bg-blue-500 text-white px-4 py-2 rounded">
Clique aqui
</button>
Nesse exemplo:

bg-blue-500 define o fundo azul,

text-white define o texto branco,

px-4 py-2 define o padding horizontal e vertical,

rounded arredonda as bordas.

✅ Vantagens:
Produtividade: escreve menos CSS.

Consistência visual entre componentes.

Personalização fácil via configuração (arquivo tailwind.config.js).

Responsivo por padrão (com classes como md:, lg: etc.).

⚙️ Instalação (resumida):
Usando Vite, por exemplo:

bash
Copiar
Editar
npm install -D tailwindcss
npx tailwindcss init
Depois, adicione ao seu CSS:

css
Copiar
Editar
@tailwind base;
@tailwind components;
@tailwind utilities;
📘 Exemplo de responsividade:
html
Copiar
Editar

<div class="text-base md:text-lg lg:text-xl">
  Texto que muda de tamanho conforme a tela
</div>

## 06_styled-components

Styled Componetes é uma biblioteca (lib) muito usada com projetos React que permite escrever estilos CSS dentro do JavaSciprt ausando a própria sintaxe do CSS. Os estilos ficam acoplados ao componente em que foram declarados.

### Instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- Extensão vscode-styled-components

Ao trabalhar com Styled Components você pode criar regras com qualquer seletor e usar
lógica JavaScript dentro de template string.

## 05_modulos-css

Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivos separados de
extensão `.module.css` em que cada classe e estilo fica isolado para um único componente. Há um **acoplamento** entre o módulo e seu componente, permitindo um escopo bem definido sobre os estilos.

- Criação de módulos para cada componente (exceto Rodape)
- Importação do módulo (chamado de styles ou estilos)
- Aplicação das classes usando className={}
- Reorganização de componentes e seus módulos em pastas
- Instalação da extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicado via style e escrevendo CSS In JS (objeto com propriedades CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-internos

- Criação de um componente filho (Menu) e importação/uso no pai (Cabeçalho)
- Criação de um componente filho (Artigo) e importação/uso no pai (Conteudo)
- Instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e Fragmento React
- Referência sobre Componentes e JSX: https://react.dev/reference/react-dom/components
- Instalação da extensão React Developer Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componente App.tsx e do main.tsx
