
# ☀️ React Native com useState

Este mini projeto é uma demonstração de como usar o **Hook `useState`** no React Native para alternar entre dois estados: **modo claro** e **modo escuro**, utilizando imagens para representar os estados (sol e lua).

Os temas abordados incluem:
- Uso do Hook `useState` para gerenciar estados em componentes funcionais.
- Manipulação de eventos com o componente `TouchableOpacity`.
- Alteração de estilos e conteúdo dinâmico com base no estado.


## Estrutura do Projeto

- **App.tsx:** Componente principal contendo a lógica e interface do aplicativo.
- **assets/**
  - **sol.png:** Imagem representando o modo claro.
  - **lua.png:** Imagem representando o modo escuro.



## 💻 Tecnologias utilizadas neste projeto:

<div style="display: inline_block">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</div>


## Funcionalidades

- Alternar entre **modo claro** e **modo escuro** ao clicar na imagem.
- Exibição de diferentes imagens (sol e lua) com base no estado atual.
- Alteração da cor de fundo dinamicamente usando `StyleSheet`.


## 🚀 Como o projeto funciona?

### 🛠️ Código Explicado

#### **Hook `useState`**
O `useState` é usado para criar e gerenciar o estado do componente. No exemplo, o estado `isActive` é utilizado para alternar entre os modos claro e escuro.

```javascript
const [isActive, setisActive] = useState(false);
```

#### **Função `handleSymbol`**
A função `handleSymbol` alterna o valor de `isActive` ao ser acionada.

```javascript
function handleSymbol() {
  setisActive((oldValue) => !oldValue);
}
```

#### **Renderização Condicional**
Com base no valor de `isActive`, diferentes estilos e imagens são exibidos.

```javascript
<View style={isActive ? styles.container : styles.containerDark}>
  <Image style={styles.img} source={isActive ? symbol : symbolOff} />
</View>
```


## 🎯 Resumo sobre `useState`

- **Definição:** O Hook `useState` permite adicionar e gerenciar estados em componentes funcionais.
- **Como funciona:** 
  - Inicializa com um valor padrão.
  - Retorna um array com dois itens:
    1. O valor atual do estado.
    2. Uma função para atualizar o estado.
- **Exemplo:** No código, o `isActive` controla o modo claro/escuro, e `setisActive` altera o estado quando o botão é pressionado.



## 📄 Documentação:
- Leia mais sobre o `useState`: [React Docs - useState](https://reactjs.org/docs/hooks-state.html)
- Explore o React Native: [Documentação Oficial](https://reactnative.dev/)


## 📌 Créditos:
- **Videoaula:** ✨Primeiros passos com React Native & Expo:
  [DIO](https://web.dio.me/track/formacao-react-native-developer)
