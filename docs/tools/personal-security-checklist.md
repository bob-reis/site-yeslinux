# Personal Security Checklist (PSC)

A PSC é integrada nativamente ao site (Next.js) e oferece um painel de progresso com persistência local. Os dados são lidos de um arquivo gerado mantido no repositório como referência.

## Rotas
- Index: `/tools/personal-security-checklist`
- Seção: `/tools/personal-security-checklist/[slug]`

## Recursos
- Progresso geral e por prioridade (Essencial, Opcional, Avançado)
- Radar “por seção” (legendas responsivas, labels fora do polígono)
- Cards por seção com ícone e barra de progresso
- Persistência no navegador via `localStorage` (`psc:<slug>:checks` e `psc:<slug>:ignore`)
- Ação global para limpar o progresso

## Origem dos dados
- Fonte: `personal-security-checklist/web/src/data/checklists.generated.ts`
- O loader (`src/lib/psc-data.ts`) extrai o array JSON do arquivo (suporta final `as const`).
- A pasta `personal-security-checklist/**` é de referência e não entra no build; está excluída da análise Sonar.

## Componentes principais
- `src/app/tools/personal-security-checklist/page.tsx` — dashboard (progresso, gauges, radar, cards)
- `src/app/tools/personal-security-checklist/[slug]/page.tsx` — checklist por seção
- `src/components/psc/SectionChecklist.tsx` — itens com “check” e toggle “Ignorar”
- `src/components/psc/OverallProgress.tsx` — progresso global
- `src/components/psc/PriorityDashboard.tsx` + `src/components/psc/Gauge.tsx`
- `src/components/psc/RadarChart.tsx` — gráfico spider responsivo
- `src/components/psc/SectionLinkGrid.tsx` — grid de seções com progresso
- `src/components/psc/SecurityTipsCard.tsx` — dicas rotativas

## Testes
- Execução: `npm test`
- Cobertura global (Vitest, v8): alvo ≥ 80%
- Relatórios: `coverage/lcov.info` (consumido pelo Sonar), `coverage/coverage-summary.json`
- Exemplos de testes PSC:
  - Loader: `src/lib/psc-data.test.ts` (mock de `fs.readFileSync`)
  - UI: `SectionChecklist`, `SectionLinkGrid`, `OverallProgress`, `PriorityDashboard`, `Gauge`, `RadarChart`, `SecurityTipsCard`, `PscIcon`

## SonarCloud
- Arquivo: `sonar-project.properties`
- Excluídas da análise: `personal-security-checklist/**`, `referencia/**`
- Cobertura: `coverage/lcov.info`

## Theming
- Cor primária: `#00ff41` (neon). O tema da PSC segue o visual do site (glass + neon).

## Limitações e notas
- O radar ajusta labels responsivamente; em telas muito estreitas, os textos são reduzidos e quebrados para evitar cortes.
- “Limpar progresso” recarrega a página; em testes/JSdom usamos `try/catch` para evitar erros.

