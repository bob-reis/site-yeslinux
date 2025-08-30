# 📊 Diretrizes de Cobertura de Testes

Este documento define as diretrizes para manter a cobertura de testes em 80% ou superior no projeto YesLinux.

## 🎯 Meta de Cobertura

- **Mínimo obrigatório**: 80% (falha no CI/CD se abaixo)
- **Meta recomendada**: 85%+
- **Ideal para software livre**: 90%+

## 📋 Regras de Cobertura

### ✅ Todo arquivo `.tsx` DEVE ter um arquivo `.test.tsx` correspondente

```bash
src/components/ui/Button.tsx     → src/components/ui/Button.test.tsx
src/app/page.tsx                 → src/app/page.test.tsx
src/components/sections/Hero.tsx → src/components/sections/Hero.test.tsx
```

### ✅ Tipos de Testes Obrigatórios

**1. Testes de Renderização**
```tsx
it('renders without crashing', () => {
  const html = renderToString(<Component />)
  expect(html).toContain('expected-content')
})
```

**2. Testes de Props**
```tsx
it('displays correct content from props', () => {
  const html = renderToString(<Component title="Test" />)
  expect(html).toContain('Test')
})
```

**3. Testes de CSS/Classes**
```tsx
it('applies correct CSS classes', () => {
  const html = renderToString(<Component />)
  expect(html).toContain('expected-class')
})
```

**4. Testes de Acessibilidade**
```tsx
it('has proper accessibility attributes', () => {
  const html = renderToString(<Component />)
  expect(html).toContain('aria-')
})
```

### ✅ Arquivos Excluídos da Cobertura

Configurado em `vitest.config.ts`:

```typescript
coverage: {
  exclude: [
    'node_modules/**',
    '.next/**',
    'coverage/**',
    '**/*.d.ts',
    '**/*.config.{js,ts}',
    '**/vitest.setup.ts',
    '**/*.test.{ts,tsx}',  // Arquivos de teste não são cobertos
  ]
}
```

## 🛠️ Processo de Desenvolvimento

### Ao Criar Novo Componente:

1. **Criar componente**: `src/components/ui/NewComponent.tsx`
2. **Criar teste**: `src/components/ui/NewComponent.test.tsx`
3. **Executar testes**: `npm test`
4. **Verificar cobertura**: Deve manter 80%+

### Ao Modificar Componente Existente:

1. **Atualizar código**
2. **Atualizar testes** correspondentes
3. **Adicionar novos testes** se necessário
4. **Verificar cobertura** não diminuiu

## 📊 Monitoramento Contínuo

### Scripts Disponíveis

```bash
# Executar testes com cobertura
npm test

# Verificar arquivos sem teste
./scripts/check-coverage.sh

# Teste local completo
./scripts/test-local.sh
```

### CI/CD - Verificações Automáticas

**No GitHub Actions:**
- ✅ Testes executam em cada push/PR
- ✅ Falha se cobertura < 80%
- ✅ Envia dados para SonarCloud
- ✅ Bloqueia merge se testes falharem

**No SonarCloud:**
- ✅ Quality Gate configurado para 80%
- ✅ Histórico de cobertura
- ✅ Métricas de qualidade

## 🎯 Estado Atual da Cobertura

### Componentes Testados (14/14 - 100%)

**App Pages:**
- ✅ `src/app/layout.tsx` + `layout.test.tsx`
- ✅ `src/app/page.tsx` + `page.test.tsx`
- ✅ `src/app/test/page.tsx` + `page.test.tsx`
- ✅ `src/app/test/simple/page.tsx` + `page.test.tsx`

**Seções:**
- ✅ `AboutSection.tsx` + `AboutSection.test.tsx`
- ✅ `BlogSection.tsx` + `BlogSection.test.tsx`
- ✅ `ContactSection.tsx` + `ContactSection.test.tsx`
- ✅ `GamificationSection.tsx` + `GamificationSection.test.tsx`
- ✅ `HeroSection.tsx` + `HeroSection.test.tsx`
- ✅ `ServicesSection.tsx` + `ServicesSection.test.tsx`
- ✅ `TerminalSection.tsx` + `TerminalSection.test.tsx`

**UI Components:**
- ✅ `LoadingSpinner.tsx` + `LoadingSpinner.test.tsx`
- ✅ `MatrixRain.tsx` + `MatrixRain.test.tsx`
- ✅ `Section.tsx` + `Section.test.tsx`

### Resultado Esperado: 90%+ de cobertura

## 🚀 Melhores Práticas

### ✅ Padrões de Teste

**1. Nomenclatura Consistente**
```bash
ComponentName.test.tsx  # Sempre terminar com .test.tsx
```

**2. Estrutura do Teste**
```tsx
import { renderToString } from 'react-dom/server'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('should render correctly', () => {
    // Arrange
    const props = { title: 'Test' }
    
    // Act  
    const html = renderToString(<ComponentName {...props} />)
    
    // Assert
    expect(html).toContain('Test')
  })
})
```

**3. Descrições Claras**
```tsx
describe('Button Component', () => {
  it('renders primary button with correct styling')
  it('displays loading state when loading prop is true')  
  it('calls onClick handler when clicked')
  it('has proper accessibility attributes')
})
```

### ✅ Testes Mínimos por Componente

1. **Renderização básica** - não quebra
2. **Props principais** - conteúdo correto
3. **CSS classes** - estilização
4. **Acessibilidade** - aria-labels, etc.

### ✅ Casos Especiais

**Componentes com Estado:**
```tsx
it('updates state correctly', () => {
  // Use @testing-library/react para testes interativos
})
```

**Componentes com Effects:**
```tsx
it('cleans up effects on unmount', () => {
  // Mock e verify cleanup
})
```

## 🔧 Ferramentas

### Verificação Local
```bash
# Ver cobertura detalhada
npm test
ls coverage/

# Ver relatório HTML
open coverage/index.html
```

### Integração SonarCloud
- **URL**: https://sonarcloud.io/project/overview?id=bob-reis_site-yeslinux
- **Coverage**: Atualizado automaticamente via CI/CD
- **Quality Gate**: Falha se < 80%

## 📚 Para Novos Contribuidores

1. **Clone o projeto**
2. **Instale dependências**: `npm install`
3. **Execute testes**: `npm test`
4. **Veja cobertura**: Deve estar 80%+
5. **Ao criar componente**: Sempre crie teste correspondente
6. **Antes de commit**: Execute `npm test` e verifique cobertura

---

## 🎯 Filosofia do Projeto

> **"Software livre de qualidade"** - Todo código deve ser testado, documentado e confiável para que outros desenvolvedores possam usar, contribuir e aprender.

A cobertura de 80%+ não é apenas uma métrica, é uma **garantia de qualidade** para a comunidade de software livre.

---

*Mantenha sempre a cobertura alta - sua contribuição impacta toda a comunidade! 🚀*