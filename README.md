
# 🛒 Aplicativo de E-commerce Mobile

---

## 📖 Descrição

Este projeto é um aplicativo de e-commerce desenvolvido em React Native (Expo), com foco na integração de APIs REST e na organização do código seguindo boas práticas. 

O aplicativo permite ao usuário:
- Realizar login com validação de campos e autenticação simulada;
- Navegar por produtos organizados em abas (masculino e feminino);
- Visualizar detalhes completos de cada produto (nome, imagem, descrição, preço e desconto);
- Fazer logout através de um botão flutuante funcional.

O objetivo foi aplicar conceitos aprendidos em aulas, criando uma aplicação funcional, organizada, responsiva e fiel ao layout definido no Figma.

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
```
## 📂 Estrutura de Pastas


src/
├── api/                 # Consumo de APIs externas
├── components/          # Componentes reutilizáveis
├── screens/             # Telas da aplicação
│   ├── home-screen/
│   ├── product/
│   └── details/
└── constants/           # Constantes do projeto (ex: credenciais, temas)


```

---

## 📦 Como Executar o Projeto

1. Clone o repositório:
```
git clone https://github.com/LucasSantos4NA/Listagem-de-Produtos-por-Categoria.git
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
| ![login](https://github.com/user-attachments/assets/e607b4ca-c445-453b-b218-50f969a3236c) | ![masculino](https://github.com/user-attachments/assets/480f459d-b55d-4ec0-b278-4d74ab0cbdc3) | ![feminino](https://github.com/user-attachments/assets/8bc2eb32-60b9-4918-97ef-60ec52a56b52) | ![detalhes](https://github.com/user-attachments/assets/0af662d4-0594-46d0-bd87-d342b536bd1d) |

---

## 📝 Observações Finais

Este projeto é uma aplicação didática desenvolvida para reforçar conceitos de React Native, consumo de APIs, gerenciamento de estado com Redux e navegação.

---
