# = ROSI Calculator: Technical Planning Document

## 1. Introdu��o ao ROSI (Return on Security Investment)

### 1.1 Defini��o Estrat�gica
ROSI � uma m�trica financeira cr�tica que quantifica o valor econ�mico real dos investimentos em seguran�a cibern�tica. Diferentemente de m�tricas tradicionais, o ROSI traduz prote��o t�cnica em linguagem de neg�cios: retorno financeiro.

### 1.2 Componentes da F�rmula de C�lculo
```
ROSI = [(Benef�cio Financeiro da Seguran�a - Custo do Investimento) / Custo do Investimento] * 100%
```

#### Vari�veis Chave:
- **Custo Potencial de Incidentes**: Estimativa de perdas sem prote��o
- **Custos de Implementa��o de Seguran�a**: Investimento direto
- **Redu��o Percentual de Risco**: Efic�cia das medidas de seguran�a
- **Economia Anualizada**: Valor econ�mico gerado pela preven��o

### 1.3 Casos de Uso Empresariais
- **Justificativa de Investimentos de Seguran�a**
- **Compara��o de Estrat�gias de Mitiga��o**
- **Comunica��o com Stakeholders N�o-T�cnicos**
- **Planejamento Or�ament�rio de Ciberseguran�a**

## 2. Arquitetura T�cnica Detalhada

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
  // Implementa��o do c�lculo
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
    // L�gica de c�lculo complexa
  },
  exportReport: () => {
    // Gera��o de relat�rio
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

## 3. Especifica��o da Interface

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
| ROI: =� 125.34%                                     |
| Annual Savings: $=� 342,500.00                      |
| Risk Mitigation Score: �  [����������] 95%         |
+-----------------------------------------------------+
```

### 3.2 Fluxo de Usu�rio
1. Inserir dados de investimento
2. Definir potencial de perda
3. Estimar redu��o de risco
4. Calcular ROSI
5. Visualizar resultados
6. Opcional: Salvar cen�rio, exportar relat�rio

## 4. Engine de C�lculo

### 4.1 F�rmulas Matem�ticas
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

### 4.2 Algoritmos de Valida��o
- Verifica��o de limites de entrada
- Preven��o de divis�o por zero
- C�lculo de intervalo de confian�a estat�stico
- Valida��o de consist�ncia de dados

## 5. Funcionalidades Avan�adas

### 5.1 Compara��o de Benchmarks
- Dados de ROSI por setor
- Compara��o com m�dias de mercado
- Identifica��o de outliers

### 5.2 Gera��o de Relat�rios
- PDF executivo
- Gr�ficos comparativos
- An�lise de tend�ncias
- Recomenda��es personalizadas

### 5.3 Exporta��o de Dados
- Formatos: CSV, JSON, XLSX
- Integra��o com ferramentas de BI
- Compatibilidade com planilhas corporativas

## 6. Roadmap de Implementa��o

### Fase 1: Funda��o (Sprint 1-2)
- [x] Arquitetura base
- [x] C�lculo core do ROSI
- [x] Interface inicial de terminal
- [ ] Valida��es de entrada

### Fase 2: Refinamento (Sprint 3-4)
- [ ] Visualiza��es de dados
- [ ] Sistema de armazenamento de cen�rios
- [ ] Exporta��o de relat�rios
- [ ] Testes unit�rios e de integra��o

### Fase 3: Avan�ado (Sprint 5-6)
- [ ] Benchmarking din�mico
- [ ] Machine learning para predi��es
- [ ] Integra��o com dashboards
- [ ] M�dulo de recomenda��es

### Crit�rios de Sucesso
- 95%+ cobertura de testes
- Performance de c�lculo < 50ms
- UX intuitiva e hacker-themed
- Precis�o estat�stica comprovada

## Considera��es Finais

Este projeto n�o � apenas uma calculadora, mas uma ferramenta estrat�gica que transforma seguran�a cibern�tica em uma decis�o financeira inteligente.

=� **Transformando Seguran�a em Valor Mensur�vel** =