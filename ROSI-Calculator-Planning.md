# = ROSI Calculator: Technical Planning Document

## 1. Introdução ao ROSI (Return on Security Investment)

### 1.1 Definição Estratégica
ROSI é uma métrica financeira crítica que quantifica o valor econômico real dos investimentos em segurança cibernética. Diferentemente de métricas tradicionais, o ROSI traduz proteção técnica em linguagem de negócios: retorno financeiro.

### 1.2 Componentes da Fórmula de Cálculo
```
ROSI = [(Benefício Financeiro da Segurança - Custo do Investimento) / Custo do Investimento] * 100%
```

#### Variáveis Chave:
- **Custo Potencial de Incidentes**: Estimativa de perdas sem proteção
- **Custos de Implementação de Segurança**: Investimento direto
- **Redução Percentual de Risco**: Eficácia das medidas de segurança
- **Economia Anualizada**: Valor econômico gerado pela prevenção

### 1.3 Casos de Uso Empresariais
- **Justificativa de Investimentos de Segurança**
- **Comparação de Estratégias de Mitigação**
- **Comunicação com Stakeholders Não-Técnicos**
- **Planejamento Orçamentário de Cibersegurança**

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
|  = ROSI CALCULATOR [Hacker Mode Enabled]           |
+-----------------------------------------------------+
| Investment Amount [$]: [___________________]        |
| Potential Annual Loss [$]: [__________________]     |
| Risk Reduction [%]: [_______]                       |
|                                                     |
| [CALCULATE] [SIMULATE] [EXPORT REPORT]              |
|                                                     |
| RESULTS:                                            |
| ROI: =â 125.34%                                     |
| Annual Savings: $=° 342,500.00                      |
| Risk Mitigation Score: ”  [ˆˆˆˆˆˆˆˆˆˆ] 95%         |
+-----------------------------------------------------+
```

### 3.2 Fluxo de Usuário
1. Inserir dados de investimento
2. Definir potencial de perda
3. Estimar redução de risco
4. Calcular ROSI
5. Visualizar resultados
6. Opcional: Salvar cenário, exportar relatório

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

## Considerações Finais

Este projeto não é apenas uma calculadora, mas uma ferramenta estratégica que transforma segurança cibernética em uma decisão financeira inteligente.

=€ **Transformando Segurança em Valor Mensurável** =