# 🤝 Guia de Contribuição

## 🎯 Bem-vindo à Equipe YesLinux

Este guia estabelece as diretrizes para contribuição no projeto, garantindo qualidade, segurança e consistência em todas as contribuições.

## 🔄 Fluxo de Desenvolvimento

### 1. 🚀 Setup Inicial

```bash
# 1. Clone o repositório
git clone https://github.com/bob-reis/site-yeslinux.git
cd site-yeslinux

# 2. Instale as dependências
npm ci # inclui Tailwind CSS, PostCSS e Autoprefixer para geração de estilos

# 3. Configure o ambiente
cp .env.example .env.local

# 4. Execute os testes
npm test

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

### 2. 🌿 Estratégia de Branches

```
main
├── develop
│   ├── feature/hero-section-animation
│   ├── feature/contact-form
│   └── fix/mobile-navigation
└── hotfix/security-patch
```

#### Tipos de Branch

- **`main`:** Código em produção, sempre estável
- **`develop`:** Integração de features, pre-production
- **`feature/`:** Novas funcionalidades
- **`fix/`:** Correções de bugs
- **`hotfix/`:** Correções urgentes de produção
- **`docs/`:** Atualizações de documentação

### 3. 📝 Conventional Commits

Seguimos o padrão [Conventional Commits](https://conventionalcommits.org/):

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Tipos de Commit

- **`feat:`** Nova funcionalidade
- **`fix:`** Correção de bug
- **`docs:`** Documentação
- **`style:`** Formatação, missing semi colons, etc
- **`refactor:`** Refatoração de código
- **`test:`** Adição de testes
- **`chore:`** Manutenção geral

#### Exemplos

```bash
feat(hero): adiciona animação de typing no título principal

fix(navigation): corrige bug de menu mobile no Safari

docs(readme): atualiza instruções de instalação

test(hero): adiciona testes unitários para HeroSection

refactor(utils): melhora performance da função de validação
```

## 🧪 Padrões de Teste

### Estrutura de Testes

```typescript
// ComponentName.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should handle user interactions', () => {
    render(<ComponentName />)
    fireEvent.click(screen.getByRole('button'))
    expect(/* assertion */).toBeTruthy()
  })
})
```

### Cobertura de Testes

- **Mínimo:** 80% em todas as métricas
- **Meta:** 90%+ para componentes críticos
- **Obrigatório:** Testes para todas as funcionalidades de segurança

```bash
# Executar testes com cobertura
npm test

# Executar testes específicos
npm test -- ComponentName

# Modo watch para desenvolvimento
npm run test:watch
```

## 🎨 Padrões de Código

### TypeScript

```typescript
// ✅ Bom
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick: () => void
  children: React.ReactNode
}

// ❌ Ruim
interface ButtonProps {
  variant: string
  size?: string
  onClick: any
  children: any
}
```

### React Components

```typescript
// ✅ Componente Funcional com TypeScript
interface HeroSectionProps {
  title: string
  subtitle?: string
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  )
}
```

### Tailwind CSS

```typescript
// ✅ Classes organizadas e semânticas
<button className="
  btn-cyber
  px-6 py-3
  bg-primary text-white
  hover:bg-primary-dark
  transition-colors duration-300
  rounded-lg
  font-medium
">
  Clique aqui
</button>

// ❌ Classes desorganizadas
<button className="px-6 bg-primary hover:bg-primary-dark py-3 text-white transition-colors rounded-lg font-medium duration-300">
```

## 🔒 Padrões de Segurança

### Validação de Input

```typescript
// ✅ Sempre validar inputs
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500)
})

// ❌ Nunca confiar em dados externos
function handleSubmit(data: any) {
  // Processamento sem validação - PERIGOSO
}
```

### Sanitização

```typescript
// ✅ Sanitizar outputs
import DOMPurify from 'dompurify'

function SafeHTML({ html }: { html: string }) {
  return (
    <div 
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html)
      }}
    />
  )
}
```

## 📋 Pull Request Process

### 1. Checklist Pré-PR

```bash
# ✅ Verificações obrigatórias
npm run lint           # Sem erros de lint
npm test              # Todos os testes passando
npm run type-check    # Sem erros de TypeScript
npm run build         # Build successful
```

### 2. Template de PR

Use nosso [template de PR](./.github/pull_request_template.md) que inclui:

- [ ] Descrição clara da mudança
- [ ] Tipo de mudança (feature, fix, etc.)
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Verificações de segurança

### 3. Code Review

#### Para Autor do PR

- **Título claro:** Descreva sucintamente a mudança
- **Descrição completa:** Context, motivação e impacto
- **Screenshots:** Para mudanças visuais
- **Self-review:** Revise seu próprio código primeiro

#### Para Reviewers

- **Funcionalidade:** O código faz o que deveria?
- **Segurança:** Há vulnerabilidades ou riscos?
- **Performance:** Impacto na velocidade da aplicação?
- **Manutenibilidade:** Código limpo e documentado?

### 4. Merge Strategy

```bash
# Squash and Merge para features
git checkout main
git merge --squash feature/nova-funcionalidade

# Merge direto para hotfixes urgentes
git checkout main  
git merge hotfix/security-patch
```

## 🛠️ Ferramentas de Desenvolvimento

### VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Git Hooks

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## 🐛 Debugging e Troubleshooting

### Performance Issues

```bash
# Análise de bundle
npm run analyze

# Profiling React
npm run dev
# Abra React DevTools > Profiler
```

### Build Issues

```bash
# Limpar cache
npm run clean
rm -rf .next node_modules
npm ci

# Verificar dependências
npm audit
npm outdated
```

## 📚 Recursos de Aprendizado

### Documentação Essential

- [Next.js Docs](https://nextjs.org/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Testing Library Docs](https://testing-library.com/docs/)

### YesLinux Standards

- [Security Best Practices](../security/practices.md)
- [Performance Guidelines](./performance.md)
- [Component Architecture](../architecture/components.md)

## 🆘 Obtendo Ajuda

- 💬 **Slack:** #dev-website
- 📧 **Email:** dev-team@yeslinux.org
- 🐛 **Issues:** GitHub Issues para bugs
- 💡 **Ideias:** GitHub Discussions

---

<div align="center">
  <p><strong>Obrigado por contribuir com a excelência YesLinux! 🚀</strong></p>
</div>