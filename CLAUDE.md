# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YesLinux website is a Next.js 14 application showcasing cybersecurity and free software consultancy services. Built with TypeScript, React 18, and Tailwind CSS, it features a hacker-themed design with 3D graphics and terminal simulations.

O objetivo deste projeto não é apenas criar um site, é criar uma aplicação usando todos os conceitos de desenvolvimento seguro, clean code e DRY, usar o Sonarcloud para testes, ter cobertura de codigo, para torna-lo um case de desenvolvimento para o portfolio. Precisa ser algo impressionante

Para cada tarefa devemos usar o agente mais adequado

## Development Commands

### Core Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run lint --fix   # Fix linting issues automatically
npx tsc --noEmit     # Type checking without build
```

### Testing
```bash
npm test             # Run all tests with coverage (80% minimum required)
npm run test:watch   # Run tests in watch mode for development
npm run test:ui      # Open Vitest UI for interactive testing
```

### Docker Considerations
Docker commands require unsetting DOCKER_HOST due to Podman conflicts:
```bash
unset DOCKER_HOST && docker-compose up -d
unset DOCKER_HOST && docker ps
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.4+ (strict mode)
- **Styling**: Tailwind CSS 3.4+ with custom hacker theme
- **Animations**: Framer Motion 11+
- **3D Graphics**: Three.js + React Three Fiber
- **Testing**: Vitest + React Testing Library
- **State Management**: Zustand 4.5+

### Directory Structure
```
src/
├── app/                    # Next.js App Router (pages and layouts)
├── components/
│   ├── sections/          # Main page sections (Hero, Services, etc.)
│   └── ui/                # Reusable UI components (Navbar, Cards, etc.)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and helpers
├── stores/                # Zustand state management
└── types/                 # TypeScript type definitions
```

### Component Architecture
- **Sections**: Large page sections like HeroSection, ServicesSection, AboutSection
- **UI Components**: Reusable components like Navbar, HackerCard, LoadingSpinner
- **Layout**: Root layout with Navbar integration and global metadata

### Theme & Design System
Custom Tailwind theme with hacker/cybersecurity aesthetic:
- **Primary Color**: `#00ff41` (Matrix green)
- **Dark Backgrounds**: `darker: #010409`, `dark: #0d1117`
- **Typography**: JetBrains Mono for monospace elements
- **Animations**: Custom keyframes for matrix rain, pulse glow effects

## Testing Guidelines

### Coverage Requirements
- **Minimum**: 80% coverage (lines, functions, branches, statements)
- **Configuration**: vitest.config.ts with V8 provider
- **Reports**: HTML, LCOV, JSON formats generated in `/coverage`

### Test Structure
- Co-located tests: Each component has a corresponding `.test.tsx` file
- Test utilities in `src/test-utils/render.tsx`
- Mock setup in `vitest.setup.ts`

### Running Single Tests
```bash
npx vitest src/components/ui/Navbar.test.tsx    # Single test file
npx vitest --run --reporter=verbose Navbar      # Pattern matching
```

## CI/CD Integration

### GitHub Actions Workflows
- **test.yml**: Runs tests, type checking, linting, and coverage validation
- **security.yml**: Security scanning and vulnerability checks
- **pr-checks.yml**: Pull request validation

### SonarCloud Integration
- Project key: `bob-reis_site-yeslinux`
- Coverage reports: `coverage/lcov.info`
- Quality gate: Sonar Way standards
- Configuration: `sonar-project.properties`

## Code Quality Standards

### ESLint & TypeScript
- Extends Next.js ESLint config
- Strict TypeScript mode enabled
- Path aliases configured (`@/`, `@/components/`, etc.)

### Import Aliases
```typescript
@/*           -> ./src/*
@/components/* -> ./src/components/*
@/lib/*       -> ./src/lib/*
@/hooks/*     -> ./src/hooks/*
@/types/*     -> ./src/types/*
```

## Security Considerations

This is a cybersecurity consultancy website with emphasis on:
- Clean code practices
- Security-first development approach
- OWASP compliance considerations
- Regular dependency vulnerability scanning

## Performance & SEO

### Optimization Features
- Next.js Image optimization enabled
- Three.js transpilation configured
- Static generation where possible
- SEO metadata in layout.tsx

### Core Web Vitals Target
- Lighthouse score: 95+ (all categories)
- Bundle size: <500KB initial load

## Development Best Practices

### Component Development
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Follow accessibility guidelines (WCAG 2.1 AA)
- Test-driven development approach

### Styling Conventions
- Tailwind classes for styling
- Custom theme colors for brand consistency
- Responsive design patterns
- Dark theme optimized (hacker aesthetic)

### State Management
- Zustand for complex state
- React hooks for component-local state
- Avoid prop drilling with proper state lifting

## Browser Support
- Modern browsers (ES6+)
- Chrome, Firefox, Safari, Edge latest versions
- Mobile responsive design

## Deployment
- Target platform: Vercel
- Automatic deployments from main branch
- Environment variables in `.env.local` (copy from `.env.example`)

## UX/UI Design Avançado: ROSI Calculator

### Design Educacional Progressivo
- **Onboarding Interativo**
  - Walkthrough guiado explicando cada etapa do cálculo ROSI
  - Tutorial inicial com animações explicativas
  - Botão "Explicar" em cada seção para detalhamento
  
- **Sistema de Tooltips Contextuais**
  - Explicações dinâmicas para cada campo de input
  - Ícones de ajuda com informações técnicas
  - Exemplos práticos de preenchimento
  
- **Glossário de Segurança Financeira**
  - Termos técnicos traduzidos para linguagem executiva
  - Definições interativas com links para estudos de caso
  - Modo de aprendizado progressivo

### Interface Adaptativa & Acessível
- **Modos de Visualização**
  - Modo Executivo: Dashboard simplificado com métricas-chave
  - Modo Técnico: Detalhamento completo dos cálculos
  - Tema Hacker com opções de personalização
  
- **Acessibilidade Avançada**
  - Compatibilidade total com leitores de tela
  - Temas de alto contraste para dislexia
  - Suporte a daltonismo nos gráficos
  - Navegação via teclado 100% funcional
  
- **Responsividade Inteligente**
  - Design adaptativo para desktop, tablet e mobile
  - Layouts reorganizados dinamicamente
  - Componentes redimensionáveis

### Feedback Visual Inteligente
- **Validação em Tempo Real**
  - Indicadores de qualidade/confiabilidade dos dados
  - Sugestões automáticas de correção
  - Animações sutis de validação
  
- **Guia Visual de Usuário**
  - Animações que direcionam a atenção
  - Progress indicators durante cálculos
  - Transições suaves entre estados
  
- **Indicadores de Risco**
  - Medidores visuais de exposição
  - Semáforo de risco (verde/amarelo/vermelho)
  - Comparativo com benchmarks da indústria

### Componentes de Coleta de Dados Inteligentes
- **Assistente de Estimativa**
  - Calculadora guiada para "Potencial Loss"
  - Estimativas baseadas em dados históricos
  - Sugestões automáticas por setor
  
- **Templates Inteligentes**
  - Pré-configurações por indústria
  - Ajuste automático baseado no porte da empresa
  - Importação de dados de planilhas/sistemas
  
- **Análise de Controles de Segurança**
  - Avaliação automatizada de redução de risco
  - Recomendações de melhorias
  - Simulação de impacto de novos controles

### Visualização de Resultados Impactante
- **Dashboard Executivo**
  - Métricas-chave em formato de infográfico
  - Gráficos interativos de cenários
  - Comparativo com média do setor
  
- **Simulação de Cenários**
  - Ferramenta "What-if" para projeções
  - Visualização de múltiplos cenários
  - Exportação de relatórios executivos
  
- **Recomendações Acionáveis**
  - Insights baseados em resultados
  - Priorização de ações de segurança
  - Links para recursos adicionais

### Princípios de Design
- **Tema Hacker Sofisticado**
  - Estética cyberpunk com clareza
  - Paleta de cores de alto contraste
  - Tipografia técnica e legível
  
- **Filosofia de Design**
  - Simplicidade sem perder profundidade
  - Educação contínua do usuário
  - Transparência nos cálculos
  - Empoderamento através do conhecimento