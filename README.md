# 🔥 Digidex 

Uma interface web moderna inspirada nas clássicas Pokédex dos jogos Pokémon, adaptada para o universo dos Digimons. Este projeto foi desenvolvido para testar e consumir uma API de Digimons, resultando em uma mini Digidex funcional e visualmente atraente.

## 📋 Sobre o Projeto

O projeto surgiu como uma forma de explorar e testar uma API de Digimons, combinando nostalgia dos dispositivos Pokédex clássicos com um design moderno e responsivo. A interface permite visualizar informações detalhadas sobre diferentes Digimons de forma intuitiva e agradável.

## 🎨 Front-end

### Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS v4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI reutilizáveis

### Funcionalidades Implementadas

#### Página Principal (Listagem de Digimons)
- **Layout Responsivo**: Design adaptável para desktop, tablet e mobile
- **Visualização de Digimon**: Área dedicada para exibir a imagem do Digimon selecionado com borda pontilhada estilo Pokédex
- **Lista Interativa**: Listagem scrollável de Digimons com IDs formatados (001, 002, etc.)
- **Seleção Visual**: Destaque em verde brilhante para o Digimon atualmente selecionado
- **Informações do Digimon**: Exibição do nome e nível (Rookie, Champion, Ultimate, etc.)
- **Tema Escuro Fixo**: Interface com paleta de cores vibrantes em tema escuro permanente

### Design System

- **Tipografia**: Fontes Geist Sans e Geist Mono para uma estética tech e legível
- **Componentes Reutilizáveis**: Botões, cards e elementos UI consistentes em todo o projeto
- **Acessibilidade**: Estrutura semântica e navegação por teclado

## 🔧 Back-end

### Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **MongoDB** - Banco de dados NoSQL para armazenamento de dados dos Digimons

### Estrutura

O back-end fornece uma API RESTful que serve os dados dos Digimons, incluindo informações como nome, nível, imagem e outras características. A integração com MongoDB permite armazenamento persistente e consultas eficientes.

## 🎯 Próximos Passos

- Implementar sistema de busca e filtros
- Adicionar mais informações detalhadas sobre cada Digimon
- Criar sistema de autenticação completo
- Implementar funcionalidade de favoritos persistente
- Adicionar comparação entre Digimons

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de teste de APIs.

---

Desenvolvido para testar APIs de Digimons.

## 🚀 Como Executar

### Front-end

```bash
# Instalar dependências
npm install


# Executar em modo de desenvolvimento
npm run dev

### Back-end

bash
# Navegar para o diretório do back-end
cd server

# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Criar arquivo .env com MONGODB_URI

# Executar servidor
node server.js
```

## 📱 Screenshots

###
<img width="1919" height="947" alt="Image" src="https://github.com/user-attachments/assets/1d0209b6-5fd8-4542-9582-6e177cc12c59" />
<img width="1918" height="946" alt="Image" src="https://github.com/user-attachments/assets/bbc73000-4b69-40a3-a5e8-feb998c8bde3" />

