# ROSI Calculator: Technical Planning Document

## 1. Introdução ao ROSI (Return on Security Investment)

### 1.1 Definição Estratégica
ROSI é uma métrica financeira crítica que quantifica o valor econômico real dos investimentos em segurança cibernética. Diferentemente de métricas tradicionais, o ROSI traduz proteção técnica em linguagem de negócios: retorno financeiro.

### 1.2 Componentes da Fórmula de Cálculo
```
ROSI = [(Benefício Financeiro da Segurança - Custo do Investimento) / Custo do Investimento] * 100%
```

#### Variáveis Chave:
- Custo Potencial de Incidentes: estimativa de perdas sem proteção
- Custos de Implementação de Segurança: investimento direto
- Redução Percentual de Risco: eficácia das medidas de segurança
- Economia Anualizada: valor econômico gerado pela prevenção

### 1.3 Casos de Uso Empresariais
- Justificativa de investimentos de segurança
- Comparação de estratégias de mitigação
- Comunicação com stakeholders não-técnicos
- Planejamento orçamentário de cibersegurança

## 2. Arquitetura Técnica Detalhada

### 2.1 Estrutura de Componentes React
```typescript
interface ROSICalculatorProps {
  initialInvestment: number;
  potentialLoss: number;
  riskReductionPercentage: number;
}

interface ROSIResult {
  roiPercentage: number;
  annualizedSavings: number;
  paybackPeriod: number;
  riskMitigationScore: number;
}

const ROSICalculator: React.FC<ROSICalculatorProps> = ({ 
  initialInvestment, 
  potentialLoss, 
  riskReductionPercentage 
}) => {
  // Implementação do cálculo
}
```

### 2.2 Gerenciamento de Estado com Zustand
```typescript
interface ROSIStore {
  scenarios: ROSIScenario[];
  currentCalculation: ROSIResult | null;
  addScenario: (scenario: ROSIScenario) => void;
  calculateROSI: (input: ROSICalculatorProps) => ROSIResult;
  exportReport: () => void;
}

const useROSIStore = create<ROSIStore>((set) => ({
  scenarios: [],
  currentCalculation: null,
  addScenario: (scenario) => set((state) => ({
    scenarios: [...state.scenarios, scenario]
  })),
  calculateROSI: (input) => {
    // Lógica de cálculo complexa
  },
  exportReport: () => {
    // Geração de relatório
  }
}));
```

### 2.3 Tipos TypeScript
```typescript
type SecurityControlType = 
  | 'Preventive'
  | 'Detective'
  | 'Corrective'
  | 'Compensating';

interface ROSIScenario {
  id: string;
  name: string;
  securityControlType: SecurityControlType;
  initialInvestment: number;
  potentialLoss: number;
  riskReductionPercentage: number;
  calculatedAt: Date;
}
```

## 3. Especificação da Interface

### 3.1 Wireframe Terminal/Matrix
```
+-----------------------------------------------------+
|  ROSI CALCULATOR [Hacker Mode Enabled]              |
+-----------------------------------------------------+
| Investment Amount [$]: [___________________]        |
| Potential Annual Loss [$]: [__________________]     |
| Risk Reduction [%]: [_______]                       |
|                                                     |
| [CALCULATE] [SIMULATE] [EXPORT REPORT]              |
|                                                     |
| RESULTS:                                            |
| ROI: 125.34%                                        |
| Annual Savings: $342,500.00                         |
| Risk Mitigation Score: [##########] 95%             |
+-----------------------------------------------------+
```

### 3.2 Fluxo de Usuário
1. Inserir dados de investimento
2. Definir potencial de perda
3. Estimar redução de risco
4. Calcular ROSI
5. Visualizar resultados
6. Opcional: salvar cenário, exportar relatório

## 4. Engine de Cálculo

### 4.1 Fórmulas Matemáticas
```typescript
function calculateROSI(
  initialInvestment: number, 
  potentialLoss: number, 
  riskReductionPercentage: number
): ROSIResult {
  const avoidedLoss = potentialLoss * (riskReductionPercentage / 100);
  const annualizedSavings = avoidedLoss - initialInvestment;
  const roiPercentage = (annualizedSavings / initialInvestment) * 100;
  
  const riskMitigationScore = calculateRiskScore(
    riskReductionPercentage, 
    initialInvestment, 
    potentialLoss
  );

  return {
    roiPercentage,
    annualizedSavings,
    paybackPeriod: calculatePaybackPeriod(initialInvestment, annualizedSavings),
    riskMitigationScore
  };
}
```

### 4.2 Algoritmos de Validação
- Verificação de limites de entrada
- Prevenção de divisão por zero
- Cálculo de intervalo de confiança estatístico
- Validação de consistência de dados

## 5. Funcionalidades Avançadas

### 5.1 Comparação de Benchmarks
- Dados de ROSI por setor
- Comparação com médias de mercado
- Identificação de outliers

### 5.2 Geração de Relatórios
- PDF executivo
- Gráficos comparativos
- Análise de tendências
- Recomendações personalizadas

### 5.3 Exportação de Dados
- Formatos: CSV, JSON, XLSX
- Integração com ferramentas de BI
- Compatibilidade com planilhas corporativas

## 6. Roadmap de Implementação

### Fase 1: Fundação (Sprint 1-2)
- [x] Arquitetura base
- [x] Cálculo core do ROSI
- [x] Interface inicial de terminal
- [ ] Validações de entrada

### Fase 2: Refinamento (Sprint 3-4)
- [ ] Visualizações de dados
- [ ] Sistema de armazenamento de cenários
- [ ] Exportação de relatórios
- [ ] Testes unitários e de integração

### Fase 3: Avançado (Sprint 5-6)
- [ ] Benchmarking dinâmico
- [ ] Machine learning para predições
- [ ] Integração com dashboards
- [ ] Módulo de recomendações

### Critérios de Sucesso
- 95%+ cobertura de testes
- Performance de cálculo < 50ms
- UX intuitiva e hacker-themed
- Precisão estatística comprovada

## 7. Modelagem de Ameaças e Controles de Segurança

### 7.1 Threat Model: ROSI Calculator

#### Ativos Críticos
- Dados financeiros sensíveis de investimento
- Cálculos de ROSI e projeções de segurança
- Histórico de cenários de segurança
- Metadados de configurações de segurança

#### Vetores de Ataque Específicos
1. **Manipulação de Dados de Entrada**
   - Injeção de valores maliciosos para distorcer resultados
   - Overflow de campos numéricos
   - Inserção de scripts ou comandos em campos de texto

2. **Exposição de Informações Confidenciais**
   - Vazamento de dados financeiros estratégicos
   - Exposição de métricas de segurança internas
   - Riscos de engenharia social através de relatórios

3. **Adulteração de Cálculos**
   - Modificação de algoritmos de ROSI
   - Manipulação de fórmulas de redução de risco
   - Geração de relatórios fraudulentos

4. **Ataques de Disponibilidade**
   - Sobrecarga de cálculos complexos
   - Negação de serviço por processamento excessivo
   - Indisponibilidade durante exportação de relatórios

### 7.2 Controles de Segurança

#### Validação e Sanitização de Inputs
```typescript
function validateFinancialInput(input: number): boolean {
  // Validações rigorosas de input financeiro
  if (input < 0 || input > 1_000_000_000) return false;
  if (Number.isNaN(input) || !Number.isFinite(input)) return false;
  
  // Proteção contra overflow e underflow
  const sanitizedInput = Math.max(0, Math.min(input, Number.MAX_SAFE_INTEGER));
  return true;
}
```

#### Criptografia de Dados Sensíveis
```typescript
// Criptografia de dados em repouso usando AES-256
const encryptScenario = (scenario: ROSIScenario): EncryptedScenario => {
  const key = deriveSecureKey(); // Geração segura de chave
  return {
    encryptedData: encrypt(JSON.stringify(scenario), key),
    metadata: {
      version: '1.0',
      encryptionMethod: 'AES-256-GCM'
    }
  };
}
```

#### Auditoria e Logging Seguro
```typescript
interface AuditLog {
  timestamp: Date;
  userHash: string;  // Hash anonimizado
  action: 'CALCULATE' | 'EXPORT' | 'SCENARIO_SAVE';
  sensitivityLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

class SecureAuditor {
  private static anonymizeUser(userId: string): string {
    return createHash('sha256').update(userId).digest('hex');
  }

  logAction(action: AuditLog) {
    // Logging seguro sem expor dados sensíveis
    this.secureStorage.append(sanitizeLog(action));
  }
}
```

#### Controles de Privacidade
- **Anonimização por Padrão**: 
  - Não armazenar identificadores diretos
  - Hash de usuários e organizações
  - Agregação de dados para benchmarking

- **Conformidade Regulatória**:
  - LGPD (Lei Geral de Proteção de Dados)
  - GDPR (Regulamento Geral de Proteção de Dados)
  - Princípios de Privacy by Design

### 7.3 Práticas de Desenvolvimento Seguro

#### Padrões de Validação
```typescript
class InputValidator {
  static validateROSIInput(props: ROSICalculatorProps): boolean {
    const { 
      initialInvestment, 
      potentialLoss, 
      riskReductionPercentage 
    } = props;

    // Validações múltiplas
    const checks = [
      initialInvestment > 0 && initialInvestment < 1_000_000_000,
      potentialLoss >= 0 && potentialLoss < 10_000_000_000,
      riskReductionPercentage >= 0 && riskReductionPercentage <= 100
    ];

    return checks.every(Boolean);
  }
}
```

#### Error Handling Seguro
- Não revelar detalhes técnicos em erros
- Mensagens genéricas para usuários
- Logging detalhado para equipe de segurança

#### Proteção Contra Ataques
- Rate limiting para cálculos
- Timeout em processamentos longos
- Validação de origem das requisições

### 7.4 Monitoramento e Resposta

#### Indicadores de Segurança
- Tentativas de input inválido
- Padrões suspeitos de uso
- Anomalias nos cálculos
- Exportações frequentes de relatórios

#### Plano de Resposta a Incidentes
1. Detecção de anomalias
2. Isolamento de sessão/usuário
3. Coleta de evidências
4. Notificação de stakeholders
5. Restauração de integridade

### 7.5 Roadmap de Segurança
- [ ] Implementar validações rigorosas de input
- [ ] Desenvolver sistema de criptografia
- [ ] Configurar auditoria de segurança
- [ ] Realizar testes de penetração
- [ ] Estabelecer monitoramento contínuo

## Considera��es Finais

Este projeto n�o � apenas uma calculadora, mas uma ferramenta estrat�gica que transforma seguran�a cibern�tica em uma decis�o financeira inteligente, com foco absoluto em proteção, privacidade e conformidade.

=� **Transformando Seguran�a em Valor Mensur�vel e Seguro** =
