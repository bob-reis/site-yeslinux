## Avaliação de Maturidade em Segurança

- URL: `/tools/maturidade`
- Categoria: Gestão & Conformidade
- Tema: escuro (seguindo o padrão do site)

### Visão Geral
- Questionário com 8 domínios ponderados (Governança & Risco, IAM, Dados & LGPD, AppSec/DevSecOps, Infra/Cloud, Detecção & Resposta, Conscientização, Continuidade & Resiliência)
- Escala: Não (0), Parcial (2), Sim (5)
- Saída: Score por domínio, Score global (0–5), nível de maturidade, recomendações e top gaps

### Metodologia
- Texto completo carregado de `public/maturidade/metodologia.md` e renderizado no tema escuro

### Gráficos
- Radar (maturidade por domínio)
- Barras (comparativo por domínio)
- Alto contraste no tema escuro (ticks/legendas brancos, grid visível)
- Transparência ajustada para reduzir ruído visual

### Estrutura Técnica
- Página: `src/app/tools/maturidade/page.tsx` (Server Component)
- Cliente: `src/components/tools/MaturidadeApp.tsx` (Client Component)
- Scripts: `public/maturidade/{data.js, script.js}`
- Chart.js local: `public/vendor/chart.umd.min.js`

### Testes
- `src/components/tools/MaturidadeApp.test.tsx`: render de containers e elementos principais
- `src/app/tools/maturidade/page.test.tsx`: smoke test de metadata + render

### Notas de Segurança
- Metodologia renderizada via conversão Markdown→HTML com escapes para `<, >` e interpolação segura de células de tabela e texto inline.
- Não há coleta/envio de dados (client-side apenas).

