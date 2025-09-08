"use client"

import Script from 'next/script'
import Section from '@/components/ui/Section'

export default function MaturidadeApp() {
  return (
    <>
    <Section
      id="maturidade"
      title="Maturidade em Segurança"
      description="Avalie a maturidade de segurança da informação da sua organização em domínios-chave, visualize lacunas e gere recomendações prioritárias."
    >
      {/* Metodologia (primeira tela) */}
      <section id="methodologySection" className="space-y-5">
        <h3 className="text-2xl font-semibold">Metodologia de Avaliação</h3>
        <div className="methodology-content">
          <div id="mdHint" className="text-text-muted text-center">Carregando conteúdo…</div>
          <div id="methodologyMd" className="content" />
        </div>
        <div className="mt-4">
          <button
            id="startBtn"
            className="btn-cyber px-5 py-2 rounded"
            onClick={() => {
              // @ts-ignore
              if (typeof (window as any).startAssessment === 'function') (window as any).startAssessment()
            }}
          >
            Iniciar Avaliação
          </button>
        </div>
      </section>

      {/* Questionário */}
      <section id="questionnaireSection" className="space-y-6" style={{ display: 'none' }}>
        <div id="progressContainer" className="w-full" style={{ display: 'none' }}>
          <div className="h-2 w-full bg-dark/60 border border-primary/20 rounded">
            <div id="progressFill" className="h-2 bg-primary rounded" style={{ width: '0%' }} />
          </div>
          <p id="progressText" className="mt-2 text-sm text-text-muted">Inicie o questionário</p>
        </div>

        <div id="domainTabs" className="flex flex-wrap gap-2 mt-4" />

        <div className="mt-6">
          <h3 id="domainTitle" className="text-2xl font-semibold" />
          <p id="domainDescription" className="text-text-muted mt-1" />
        </div>

        <div id="questionsContainer" className="gap-4 mt-4" />

        <div className="flex items-center justify-center mt-6">
          <div className="flex gap-3">
            <button
              id="prevBtn"
              className="btn-cyber px-4 py-2 rounded"
              type="button"
              onClick={() => {
                // @ts-ignore
                if (typeof (window as any).previousDomain === 'function') (window as any).previousDomain()
              }}
            >
              Anterior
            </button>
            <button
              id="nextBtn"
              className="btn-cyber px-4 py-2 rounded"
              type="button"
              onClick={() => {
                // @ts-ignore
                if (typeof (window as any).nextDomain === 'function') (window as any).nextDomain()
              }}
            >
              Próximo
            </button>
            <button
              id="finishBtn"
              className="btn-cyber px-4 py-2 rounded hidden"
              type="button"
              onClick={() => {
                // @ts-ignore
                if (typeof (window as any).showResults === 'function') (window as any).showResults()
              }}
            >
              Ver Resultados
            </button>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultsSection" className="hidden mt-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="card-cyber p-6 rounded">
            <div className="text-center">
              <div className="mx-auto w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center glow-primary">
                <span id="scoreValue" className="text-4xl font-bold">-</span>
              </div>
              <h4 id="levelText" className="text-xl font-semibold mt-3">-</h4>
              <p id="levelDescription" className="text-text-muted mt-2">&nbsp;</p>
            </div>
          </div>

          <div className="card-cyber p-6 rounded">
            <h5 className="font-semibold mb-3">Radar por Domínio</h5>
            <div className="w-full h-[400px] flex items-center justify-center">
              <canvas id="radarChart" />
            </div>
          </div>

          <div className="card-cyber p-6 rounded">
            <h5 className="font-semibold mb-3">Comparativo de Pontuações</h5>
            <div className="w-full h-[400px] flex items-center justify-center">
              <canvas id="barChart" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Resumo por Domínio</h5>
          <div id="domainCards" className="domain-cards" />
        </div>

        <div className="recommendations">
          <h5 className="font-semibold mb-3">Recomendações Prioritárias</h5>
          <div id="recommendationsList" className="recommendations-list" />
        </div>

        <div className="top-gaps">
          <h5 className="font-semibold mb-3">Maiores Gaps</h5>
          <div id="gapsList" className="gaps-list" />
        </div>
      </section>

      {/* Minimal styles to match dark theme and support script behaviors */}
      <style jsx global>{`
        :root { --surface: rgba(13,17,23,0.8); }

        /* Tabs */
        .domain-tab { 
          padding: 8px 12px; border: 1px solid rgba(0,255,65,0.25); 
          border-radius: 8px; cursor: pointer; color: var(--text-light);
          background: rgba(1,4,9,0.6);
        }
        .domain-tab:hover { border-color: var(--primary); }
        .domain-tab.active { background: rgba(0,255,65,0.08); border-color: var(--primary); }
        .domain-tab.completed { box-shadow: 0 0 10px rgba(0,255,65,0.3) inset; }

        /* Questions */
        .question-card { background: rgba(13,17,23,0.8); border: 1px solid rgba(0,255,65,0.25); border-radius: 10px; padding: 16px; }
        .question-text { display: flex; justify-content: space-between; align-items: baseline; font-weight: 600; }
        .question-weight { color: var(--text-muted); font-size: 12px; margin-left: 12px; }
        .answer-options { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .answer-option { text-align: center; padding: 12px; border: 1px solid rgba(0,255,65,0.25); border-radius: 8px; cursor: pointer; background: rgba(1,4,9,0.6); }
        .answer-option:hover { border-color: var(--primary); transform: translateY(-1px); transition: 0.15s; }
        .answer-option.selected { background: rgba(0,255,65,0.08); border-color: var(--primary); }
        .answer-value { display: inline-block; font-weight: 700; color: var(--primary); margin-bottom: 4px; }

        /* Loading overlay */
        .loading-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: none; align-items: center; justify-content: center; z-index: 60; }
        .loading-spinner { background: rgba(13,17,23,0.95); border: 1px solid rgba(0,255,65,0.3); padding: 20px; border-radius: 12px; text-align: center; }
        .spinner { width: 28px; height: 28px; border: 3px solid rgba(0,255,65,0.25); border-top-color: var(--primary); border-radius: 50%; margin: 0 auto 8px; animation: spin 0.8s linear infinite; }
        .loading-text { color: var(--text-light); }
        @keyframes spin { to { transform: rotate(360deg); } }
        /* Original-like cards */
        .domain-cards { display: grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); gap: 20px; }
        .domain-card { background: rgba(30,30,30,0.6); padding: 20px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5); border-left: 4px solid var(--primary); position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
        .domain-card h4 { color: var(--text-light); margin-bottom: 10px; font-size: 1.1rem; }
        .domain-score { font-size: 1.5rem; font-weight: 700; }
        .domain-level { color: var(--text-muted); font-size: 0.9rem; }

        .recommendations-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .recommendation-card { background: rgba(1,4,9,0.8); padding: 20px; border-radius: 10px; border-left: 4px solid var(--primary); position: relative; overflow: hidden; }
        .recommendation-title { font-weight: 700; color: var(--text-light); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
        .recommendation-text { color: var(--text-muted); line-height: 1.5; }

        .top-gaps { background: rgba(30,30,30,0.6); padding: 25px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
        .gaps-list { display: flex; flex-direction: column; gap: 15px; }
        .gap-item { background: rgba(1,4,9,0.8); padding: 15px; border-radius: 10px; border-left: 4px solid #45b7d1; }
        .gap-priority { font-weight: 700; color: #45b7d1; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
        .gap-text { margin-top: 5px; color: var(--text-light); }
      `}</style>
    </Section>

    {/* Chart.js (global) - local vendor */}
    <Script src="/vendor/chart.umd.min.js" strategy="afterInteractive" />
    {/* Data and logic scripts served from public */}
    <Script src="/maturidade/data.js" strategy="afterInteractive" />
    <Script
      src="/maturidade/script.js"
      strategy="afterInteractive"
      onLoad={() => {
        // Load methodology markdown dynamically
        fetch('/maturidade/metodologia.md')
          .then((r: Response) => r.text())
          .then((md: string) => {
            const mdEl = document.getElementById('methodologyMd');
            const hint = document.getElementById('mdHint');
            if (hint) hint.style.display = 'none';
            if (mdEl) {
              const mdInline = (t: string): string => t
                .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
                .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
                .replace(/`([^`]+)`/g,'<code>$1</code>');
              const renderTable = (rows: string[]): string => {
                if(rows.length<2){return '<pre>'+rows.map(r=>r.replace(/</g,'&lt;')).join('\n')+'</pre>'}
                const header=rows[0].split('|').slice(1,-1).map(s=>s.trim());
                const body=rows.slice(2).map(r=>r.split('|').slice(1,-1).map(s=>s.trim()));
                let h='<table><thead><tr>'+header.map(h=>'<th>'+mdInline(h)+'</th>').join('')+'</tr></thead><tbody>';
                body.forEach(c=>{h+='<tr>'+c.map(x=>'<td>'+mdInline(x)+'</td>').join('')+'</tr>'});
                return h+'</tbody></table>';
              };
              const mdToHtml = (src: string): string => {
                const lines=src.replace(/\r\n?/g,'\n').split('\n');
                let html=''; let i=0; let para: string | null = null; const flush=()=>{ if(para && para.trim().length){ html+='<p>'+mdInline(para.trim())+'</p>'; } para=null; };
                while(i<lines.length){
                  const line = lines[i]; const t=line.trim();
                  if(t.startsWith('|')){ flush(); const tbl: string[] = []; while(i<lines.length && lines[i].trim().startsWith('|')){ tbl.push(lines[i]); i++; } html+=renderTable(tbl); continue; }
                  if(/^\s*---+\s*$/.test(t)){ flush(); html+='<hr />'; i++; continue; }
                  if(line.startsWith('### ')){ flush(); html+='<h3>'+mdInline(line.slice(4))+'</h3>'; i++; continue; }
                  if(line.startsWith('## ')){ flush(); html+='<h2>'+mdInline(line.slice(3))+'</h2>'; i++; continue; }
                  if(line.startsWith('# ')){ flush(); html+='<h1>'+mdInline(line.slice(2))+'</h1>'; i++; continue; }
                  if(/^\s*-\s+/.test(line)){ flush(); html+='<ul>'; while(i<lines.length && /^\s*-\s+/.test(lines[i])){ html+='<li>'+mdInline(lines[i].replace(/^\s*-\s+/,''))+'</li>'; i++; } html+='</ul>'; continue; }
                  if(t.length===0){ flush(); i++; continue; }
                  para = (para? para+' ' : '') + line; i++;
                }
                flush(); return html;
              };
              mdEl.innerHTML = mdToHtml(md);
            }
          })
          .catch(() => { const hint = document.getElementById('mdHint'); if (hint) hint.textContent = 'Conteúdo indisponível.' })
        // Ensure initialization when script is loaded after DOMContentLoaded
        // @ts-ignore - defined by the loaded script
        if (typeof window !== 'undefined' && typeof (window as any).initializeApplication === 'function') {
          try {
            // @ts-ignore
            ;(window as any).initializeApplication()
            // @ts-ignore
            if (typeof (window as any).observeChartContainers === 'function') {
              // @ts-ignore
              ;(window as any).observeChartContainers()
            }
          } catch {}
        }
      }}
    />
    </>
  )
}
