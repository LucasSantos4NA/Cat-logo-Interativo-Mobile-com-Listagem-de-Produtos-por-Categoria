```markdown
# 🛒 Aplicativo de E-commerce Mobile

---

## 📖 Descrição

Este projeto é um aplicativo de e-commerce desenvolvido em React Native (Expo), com foco na integração de APIs REST e na organização do código seguindo boas práticas. 

O aplicativo permite ao usuário:
- Realizar login com validação de campos e autenticação simulada;
- Navegar por produtos organizados em abas (masculino e feminino);
- Visualizar detalhes completos de cada produto (nome, imagem, descrição, preço e desconto);
- Fazer logout através de um botão flutuante funcional.


---

## 🚀 Funcionalidades

- Tela de login com validação de campos obrigatórios e autenticação simulada  
- Listagem de produtos usando abas para separar masculino e feminino  
- Consumo de API REST utilizando Axios  
- Tela de detalhes do produto com informações completas  
- Botão flutuante para logout funcional  
- Layout responsivo e agradável visualmente  

---

## 🛠 Tecnologias Utilizadas

- React Native com Expo  
- Axios para consumo de API REST  
- Redux Toolkit para gerenciamento de estado global  
- React Native Tab View para navegação via abas  
- Expo Linear Gradient para efeitos visuais  

---

## 📂 Estrutura de Pastas


src/
├── api/                 # Consumo de APIs externas
├── components/          # Componentes reutilizáveis
├── screens/             # Telas da aplicação
│   ├── home-screen/
│   ├── product/
│   └── details/
└── 

---
```
## 📦 Como Executar o Projeto

1. Clone o repositório:
```
git clone https://github.com/LucasSantos4NA/Cat-logo-Interativo-Mobile-com-Listagem-de-Produtos-por-Categoria.git
```

2. Navegue até a pasta do projeto e instale as dependências:
```
npm install
```

3. Inicie o projeto:
```
npx expo start
```

---

## 👤 Credenciais de Teste

As credenciais para login estão definidas no arquivo:
```
src/constants/user-credentials.ts
```

---

## ℹ️ Detalhes Adicionais

- API usada: DummyJSON (apenas para demonstração)  
- Botão vermelho no canto inferior direito: Logout funcional  

---

## 📸 Capturas de Tela

| Tela de Login 🔐 | Lista de Produtos Masculinos 🛍 | Lista de Produtos Femininos 👗 | Detalhes do Produto 📄 |
|-----------------|--------------------------------|-------------------------------|------------------------|
| ![login](https://github.com/user-attachments/assets/74515c76-23d2-4ae6-a3e3-01eff4aedd28) | ![produtos-masculinos](https://github.com/user-attachments/assets/52a2f96c-f157-40d1-b183-145bd53cdab4) | ![feminino](https://github.com/user-attachments/assets/26936453-d141-44ee-b850-c0a143ffdf59) | ![detalhes](https://github.com/user-attachments/assets/28565112-05a6-4d15-8fdc-79bd1a5fcd5a) |

---

## 📝 Observações Finais

Este projeto é uma aplicação didática desenvolvida para reforçar conceitos de React Native, consumo de APIs, gerenciamento de estado com Redux e navegação.

---
