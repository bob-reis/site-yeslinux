# 🤝 Guia de Contribuição - YesLinux

Obrigado pelo interesse em contribuir com o projeto YesLinux! Este guia fornece todas as informações necessárias para participar do desenvolvimento de forma efetiva e alinhada com nossos padrões de excelência.

## 🎯 Código de Conduta

Ao participar deste projeto, você concorda em manter um ambiente respeitoso e profissional. Seguimos os princípios:

- **Respeito mútuo** entre todos os colaboradores
- **Comunicação clara e construtiva**
- **Foco na qualidade técnica e segurança**
- **Transparência** em todas as decisões

## 🚀 Como Contribuir

### 1. 🔧 Configuração do Ambiente

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/site-yeslinux.git
cd site-yeslinux

# Adicione o repositório original como upstream
git remote add upstream https://github.com/bob-reis/site-yeslinux.git

# Instale as dependências
npm ci

# Configure o ambiente
cp .env.example .env.local

# Execute os testes para verificar se tudo está funcionando
npm test

# Inicie o servidor de desenvolvimento
npm run dev
```

### 2. 🌿 Workflow de Desenvolvimento

```bash
# 1. Atualize sua branch main
git checkout main
git pull upstream main

# 2. Crie uma branch para sua feature/fix
git checkout -b feature/nome-descritivo

# 3. Faça suas alterações seguindo nossos padrões

# 4. Execute os testes e verificações
npm test                    # Testes unitários
npm run lint               # Verificação de código
npm run type-check         # Verificação TypeScript
npm run build              # Verificação de build

# 5. Commit suas alterações
git add .
git commit -m "feat: adiciona nova funcionalidade X"

# 6. Push para seu fork
git push origin feature/nome-descritivo

# 7. Abra um Pull Request
```

## 📝 Padrões de Desenvolvimento

### Conventional Commits

Usamos o padrão [Conventional Commits](https://conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Tipos permitidos:**
- `feat` - Nova funcionalidade
- `fix` - Correção de bug  
- `docs` - Documentação
- `style` - Formatação, lint fixes
- `refactor` - Refatoração sem mudança de comportamento
- `test` - Adição/correção de testes
- `chore` - Manutenção, deps, config

**Exemplos:**
```bash
feat(hero): adiciona animação de typing no título
fix(navigation): corrige bug no menu mobile
docs(readme): atualiza instruções de instalação
test(hero): adiciona testes para HeroSection
```

### Estrutura de Branches

- `main` - Código em produção
- `develop` - Branch de integração (futuro)
- `feature/*` - Novas funcionalidades  
- `fix/*` - Correções de bugs
- `hotfix/*` - Correções urgentes
- `docs/*` - Atualizações de documentação

## 🧪 Padrões de Teste

### Cobertura Obrigatória

- **Mínimo:** 80% em todas as métricas
- **Recomendado:** 90%+ para componentes críticos
- **Obrigatório:** 100% para funções de segurança

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
    // Verificações específicas
  })

  it('should be accessible', () => {
    const { container } = render(<ComponentName />)
    // Testes de acessibilidade
  })
})
```

## 🔒 Segurança

### Práticas Obrigatórias

1. **Validação de Input**
   ```typescript
   import { z } from 'zod'
   
   const schema = z.object({
     name: z.string().min(1).max(100),
     email: z.string().email()
   })
   ```

2. **Sanitização de Output**
   ```typescript
   import DOMPurify from 'dompurify'
   
   const cleanHTML = DOMPurify.sanitize(userInput)
   ```

3. **TypeScript Strict**
   - Sempre tipar adequadamente
   - Evitar `any` - use `unknown` quando necessário
   - Validar dados externos

### Security Checklist

- [ ] Inputs validados com schemas
- [ ] Outputs sanitizados adequadamente
- [ ] Não há dados sensíveis em logs
- [ ] Headers de segurança verificados
- [ ] Dependências auditadas

## 📋 Pull Request Process

### Template Obrigatório

Use nosso [template de PR](.github/pull_request_template.md) que inclui:

- Descrição clara da mudança
- Tipo de mudança (feature, fix, etc.)
- Checklist de verificações
- Screenshots (se aplicável)
- Considerações de segurança

### Checklist Pré-PR

```bash
# ✅ Verificações obrigatórias antes de abrir PR
npm run lint           # ✅ Sem erros de lint
npm test              # ✅ Todos os testes passando  
npm run type-check    # ✅ Sem erros TypeScript
npm run build         # ✅ Build successful
git log --oneline -5  # ✅ Commits bem estruturados
```

### Code Review

#### Para Autores
- **Self-review primeiro** - revise seu próprio código
- **Testes incluídos** - toda nova funcionalidade testada
- **Documentação atualizada** - se necessário
- **Screenshots** para mudanças visuais

#### Para Reviewers
- **Funcionalidade** - faz o que deveria?
- **Segurança** - há riscos ou vulnerabilidades?
- **Performance** - impacto na velocidade?
- **Manutenibilidade** - código limpo e claro?
- **Testes** - cobertura adequada?

## 🎨 Padrões de Código

### TypeScript

```typescript
// ✅ Bom - interfaces claras e específicas
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

// ❌ Evitar - tipos genéricos demais
interface ButtonProps {
  variant: string
  onClick: any
  children: any
}
```

### React Components

```typescript
// ✅ Componente funcional bem estruturado
interface HeroSectionProps {
  title: string
  subtitle?: string
  showAnimation?: boolean
}

export default function HeroSection({ 
  title, 
  subtitle, 
  showAnimation = true 
}: HeroSectionProps) {
  // Hooks primeiro
  const [isVisible, setIsVisible] = useState(false)
  
  // Effects  
  useEffect(() => {
    // Implementation
  }, [])
  
  // Event handlers
  const handleClick = useCallback(() => {
    // Implementation  
  }, [])
  
  // Render
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  )
}
```

### CSS/Tailwind

```typescript
// ✅ Classes organizadas e semânticas
<button className="
  btn-cyber
  px-6 py-3
  bg-primary hover:bg-primary-dark
  text-white font-medium
  rounded-lg
  transition-colors duration-300
  focus:outline-none focus:ring-2 focus:ring-primary
">
  Click me
</button>
```

## 🐛 Reportando Issues

### Bug Reports

Use o [template de bug](.github/ISSUE_TEMPLATE/bug_report.md):

- **Descrição clara** do problema
- **Passos para reproduzir**
- **Comportamento esperado vs atual**
- **Screenshots** se aplicável
- **Ambiente** (OS, browser, versões)

### Feature Requests

Use o [template de feature](.github/ISSUE_TEMPLATE/feature_request.md):

- **Motivação** - por que é necessário?
- **Solução proposta** - como deveria funcionar?
- **Alternativas consideradas**
- **Contexto adicional**

## 🏆 Reconhecimento

### Contribuidores

Valorizamos todas as contribuições:

- **Code contributors** - desenvolvimento direto
- **Reviewers** - garantia de qualidade
- **Documentation** - melhoria da docs
- **Testing** - ajuda com QA
- **Security** - identificação de vulnerabilidades

### Hall of Fame

Contributors que fazem diferença significativa serão reconhecidos:

- Menção no README principal
- Badge especial nos PRs
- Certificado de contribuição YesLinux

## 📚 Recursos de Aprendizado

### Documentação Essencial

- [Documentação do Projeto](./docs/README.md)
- [Práticas de Segurança](./docs/security/practices.md)
- [Arquitetura](./docs/architecture/overview.md)

### Ferramentas Recomendadas

- **IDE:** VS Code com extensões React/TypeScript
- **Git:** GitHub CLI para PRs
- **Testing:** Vitest + Testing Library
- **Debugging:** React DevTools

## 📞 Obtendo Ajuda

### Canais de Suporte

- 🐛 **Bugs:** [GitHub Issues](https://github.com/bob-reis/site-yeslinux/issues)
- 💬 **Discussões:** [GitHub Discussions](https://github.com/bob-reis/site-yeslinux/discussions)
- 📧 **Email:** dev-team@yeslinux.org

### FAQ

**P: Como posso começar a contribuir?**
R: Comece pelos issues marcados com `good first issue` ou `help wanted`.

**P: Preciso de experiência específica?**
R: Básico em React/TypeScript é suficiente. Documentamos tudo!

**P: Como reportar uma vulnerabilidade?**
R: Use nosso email de segurança: security@yeslinux.org

---

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a [MIT License](./LICENSE).

---

<div align="center">
  <p><strong>🚀 Obrigado por contribuir com a YesLinux!</strong></p>
  <p>Juntos construímos software mais seguro e livre</p>
  
  [![Contributors](https://img.shields.io/badge/Contributors-Welcome-green?style=flat&logo=github)](https://github.com/bob-reis/site-yeslinux/graphs/contributors)
  [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green?style=flat&logo=github)](https://github.com/bob-reis/site-yeslinux/pulls)
</div>