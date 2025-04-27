# Ghanor RPG - Aplicativo Web para Gerenciamento de Personagens

Uma ferramenta web para criar, gerenciar e organizar personagens para o sistema de RPG Ghanor, incluindo raças, classes e características dos personagens.

## Funcionalidades

- **Criação de Personagens**: Interface intuitiva para criação de personagens com as raças e classes do universo Ghanor
- **Gerenciamento de Fichas**: Visualize, edite e imprima fichas de personagens salvas
- **Filtros e Busca**: Encontre facilmente personagens por nome, classe, nível e outras características
- **Seleção de Raças**: Escolha entre Humanos, Anões, Elfos, Meio-Elfos, Hobgoblins, Gigantes e Aberrantes
- **Salvamento Local**: Armazena seus personagens no navegador (localStorage)
- **Exportação de Fichas**: Imprima ou salve fichas em formato digital para uso nas sessões
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela
- **Interface Temática**: Visual imersivo no estilo medieval-fantástico

## Para Mestres de Jogo

Esta ferramenta é perfeita para MJs que desejam:
- Agilizar o acesso aos dados de jogo durante as sessões
- Manter um registro organizado de itens, raças, classes e mecânicas
- Permitir que os jogadores acessem e gerenciem seus próprios personagens
- Personalizar o conteúdo do cenário Ghanor para suas próprias campanhas

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Use o menu de navegação para acessar as diferentes seções:
   - **Início**: Página principal com acesso às funcionalidades
   - **Personagens**: Lista dos personagens salvos
   - **Criar Personagem**: Interface para criação de novos personagens
   - **Regras**: Referência rápida às regras do sistema

## Tecnologias Utilizadas

- **HTML5, CSS3 e JavaScript**: Para estrutura, estilo e funcionalidade da interface
- **LocalStorage API**: Para persistência de dados no navegador
- **Font Awesome**: Para ícones e elementos visuais
- **Google Fonts**: Para tipografia personalizável (Roboto e MedievalSharp)

## Estrutura do Projeto

```
/
├── index.html             # Página inicial do projeto
├── personagens.html       # Página de listagem de personagens
├── teste-racas.html       # Página de teste para raças
├── assets/                # Recursos estáticos
│   └── images/            # Imagens do projeto
├── css/                   # Arquivos de estilo
│   ├── home.css           # Estilos da página inicial
│   ├── personagens.css    # Estilos da página de personagens
│   └── styles.css         # Estilos globais
├── js/                    # Scripts JavaScript
│   ├── classes/           # Scripts de classes de personagem
│   ├── racas/             # Scripts de raças de personagem
│   ├── character.js       # Lógica de gerenciamento de personagens
│   ├── characters-list.js # Lógica da listagem de personagens
│   ├── classes.js         # Definições de classes
│   ├── racas.js           # Definições de raças
│   └── home.js            # Scripts da página inicial
└── pages/                 # Páginas adicionais
    ├── criar-personagem.html # Página de criação de personagem
    └── personagens.html   # Versão alternativa da página de personagens
```

## Desenvolvimento

Este projeto é estruturado de forma modular, com arquivos JavaScript separados para cada raça e classe. O arquivo `convert_classes.js` fornece uma ferramenta para converter dados JSON de classes para os formatos JS necessários.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## Créditos

Desenvolvido para o RPG Ghanor. 