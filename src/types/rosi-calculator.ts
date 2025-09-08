// ROSI Calculator Type Definitions

export enum IndustryVertical {
  TECHNOLOGY = 'technology',
  FINANCE = 'finance',
  HEALTHCARE = 'healthcare',
  RETAIL = 'retail',
  GOVERNMENT = 'government',
  MANUFACTURING = 'manufacturing',
  ENERGY = 'energy',
  TELECOMMUNICATIONS = 'telecommunications'
}

export enum CompanySize {
  STARTUP = 'startup',
  SMB = 'small_medium_business',
  ENTERPRISE = 'enterprise',
  MULTINATIONAL = 'multinational'
}

export interface SecurityIncident {
  type: string;
  frequency: number;
  averageCost: number;
}

export interface SecurityInvestmentInput {
  industryVertical: IndustryVertical;
  companySize: CompanySize;
  annualRevenue: number;
  currentSecuritySpend: number;
  historicalIncidents: SecurityIncident[];
  complianceRequirements: string[];
}

export interface RiskReductionFactor {
  securityMeasure: string;
  reductionPercentage: number;
  confidenceLevel: number;
}

export interface ROSICalculationResult {
  annualLossExpectancy: number;
  currentRiskExposure: number;
  potentialLossMitigated: number;
  securityInvestment: number;
  riskReductionFactor: number;
  rosiPercentage: number;
  recommendedActions: string[];
}

export interface BenchmarkComparison {
  industryAverage: number;
  percentileRank: number;
  peerComparisonInsights: string[];
}

export interface ROSIReport {
  calculationResult: ROSICalculationResult;
  benchmarkComparison?: BenchmarkComparison;
  visualizationData: {
    riskTrend: number[];
    investmentImpact: number[];
  };
}

export interface ROSICalculator {
  calculateROSI(input: SecurityInvestmentInput): ROSICalculationResult;
  generateReport(result: ROSICalculationResult): ROSIReport;
  getBenchmarkData(input: SecurityInvestmentInput): BenchmarkComparison;
}

// Machine Learning Enhanced Risk Assessment
export interface RiskAssessmentModel {
  predictIncidentProbability(input: SecurityInvestmentInput): number;
  recommendSecurityInterventions(input: SecurityInvestmentInput): string[];
}

// Security Investment Recommendation Engine
export interface SecurityRecommendationEngine {
  analyzeInvestmentEffectiveness(input: SecurityInvestmentInput): {
    recommendedInvestments: string[];
    potentialImpact: number;
    confidenceScore: number;
  };
}