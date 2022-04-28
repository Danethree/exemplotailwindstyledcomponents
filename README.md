# Exemplo usando Tailwind e Styled Components

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Esse projeto trata-se de um exemplo usando o Tailwind junto com o Styled Components.

## Tailwind CSS

O interessante do Tailwind é que ele facilita muito na hora do design com sua extensa lista de opções de customização. Gostei bastante dele pois ajuda a poupar tempo na criação do CSS.

## Styled Components

Já usava e gosto muito do jeito de usar componentes estilizados da biblioteca Styled Components. Poder usar no projeto junto do Tailwind me permitiu me localizar melhor e poupar tempo pois ao olhar um componente que precisava ser melhorado na customização eu não perdi tempo entre os extensos nomes de className. Eu somente fui para o meu código "styles"correspondente ao componente e alterei o que precisava.

## Conclusão

Além da organização o uso conjunto também permite uma boa escalabilidade de um projeto com Tailwind.

### Como usar o Tailwind com Styled Components? 
 Veja como usar nas instruções a seguir (exemplo com o Next JS com Typescript)

 * Passo 1: Criar o projeto  no terminal e diretório da sua escolha com Next JS:


 ```shell
    npx create-next-app@latest --ts
 ```

 * Passo 2: Instalar o Tailwind e configurá-lo:

 A configuração está disponível na documentação do Tailwind. É a mesma tanto para o javascript quanto para o typescript:

 https://tailwindcss.com/docs/guides/nextjs.

* Passo 3: Importar o styled-components:

Instale primeiro a biblioteca dessa forma: 

```shell
npm install --save styled-components
```
Em seguida instale com esse comando para suportar o typescript:
```shell
npm install --save @types/styled-components
```

* Passo 4: Com o Tailwind e Styled Components instalados instale:

```shell
npm i -D tailwind-styled-components
```
Agora é só usar o Tailwind Styled Components no projeto! Este projeto é um exemplo de uso, se você quiser, pode se guiar por ele.
