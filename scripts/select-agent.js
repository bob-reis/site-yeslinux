#!/usr/bin/env node
/*
  Simple agent selector based on keywords and explicit mentions.
  Usage:
    node scripts/select-agent.js "describe your task here"
  Output: JSON with fields { id, name, description, prompt, tools, category, reason, matches }
*/

const fs = require('fs');
const path = require('path');

function loadManifest() {
  const p = path.resolve(__dirname, '..', 'agents', 'manifest.json');
  const raw = fs.readFileSync(p, 'utf8');
  return JSON.parse(raw).agents;
}

function normalize(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function buildRules() {
  return [
    { id: 'neo', keywords: [
      'threat model', 'modelagem de ameaca', 'stride', 'owasp', 'ameaca', 'threat', 'boundary', 'trust boundary'
    ], reason: 'Threat modeling (STRIDE/OWASP) keywords detected' },
    { id: 'trinity', keywords: [
      'vulnerability', 'vulnerabilidade', 'cve', 'sast', 'dast', 'scan', 'auditoria', 'corrigir falha', 'remediation', 'dependency', 'sca'
    ], reason: 'Vulnerability scanning/remediation context' },
    { id: 'agent-smith', keywords: [
      'pipeline', 'ci', 'cd', 'github actions', 'gitlab', 'azure devops', 'deploy', 'devops', 'iac', 'terraform', 'docker', 'kubernetes', 'workflow'
    ], reason: 'DevSecOps pipelines and CI/CD context' },
    { id: 'architect', keywords: [
      'test', 'tests', 'teste', 'vitest', 'coverage', 'cobertura', 'qa', 'quality gate', 'mock', 'testing library'
    ], reason: 'Testing and QA context' },
    { id: 'merovingian', keywords: [
      'performance', 'observability', 'metrics', 'metricas', 'logs', 'traces', 'profiling', 'lighthouse', 'core web vitals', 'slow'
    ], reason: 'Performance/observability keywords detected' },
    { id: 'persephone', keywords: [
      'ux', 'ui', 'frontend', 'acessibilidade', 'accessibility', 'design', 'aria', 'a11y', 'interface', 'animacao', 'tailwind'
    ], reason: 'UX/Frontend focus' },
    { id: 'morpheus', keywords: [
      'clean code', 'refactor', 'refator', 'dry', 'solid', 'code smell', 'lint', 'manutenibilidade', 'arquitetura'
    ], reason: 'Code quality/refactoring context' },
    { id: 'blue-team', keywords: [
      'blue team', 'deteccao', 'detection', 'siem', 'edr', 'nsn', 'incident', 'incidente', 'resposta', 'monitoramento'
    ], reason: 'Defensive security monitoring/IR' },
    { id: 'red-team', keywords: [
      'red team', 'pentest', 'exploit', 'ofensiva', 'phishing', 'ataque controlado', 'engajamento', 'exfiltration'
    ], reason: 'Offensive testing/pentest context' },
    { id: 'oracle', keywords: [
      'docs', 'documentacao', 'readme', 'guia', 'manual', 'knowledge base', 'document', 'guide'
    ], reason: 'Documentation/information architecture' }
  ];
}

function explicitAgent(text, agents) {
  const m = text.match(/@([a-z0-9-]+)/);
  if (!m) return null;
  const id = m[1];
  return agents.find(a => a.id === id) || null;
}

function scoreAgents(text, rules, agents) {
  const hits = {};
  for (const rule of rules) {
    for (const kw of rule.keywords) {
      if (text.includes(kw)) {
        hits[rule.id] = (hits[rule.id] || 0) + 1;
      }
    }
  }
  const scored = agents.map(a => ({ id: a.id, score: hits[a.id] || 0 }));
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function main() {
  const input = process.argv.slice(2).join(' ').trim();
  if (!input) {
    console.error('Usage: node scripts/select-agent.js "<task description>"');
    process.exit(1);
  }

  const agents = loadManifest();
  const text = normalize(input);
  const rules = buildRules();

  const explicit = explicitAgent(text, agents);
  if (explicit) {
    const reason = `Explicit agent mention: @${explicit.id}`;
    console.log(JSON.stringify({ ...explicit, reason, matches: [{ id: explicit.id, score: 999 }] }, null, 2));
    return;
  }

  const scored = scoreAgents(text, rules, agents);
  const best = scored[0];
  const selected = agents.find(a => a.id === best.id) || agents.find(a => a.id === 'morpheus');
  const rule = rules.find(r => r.id === selected.id);
  const reason = best.score > 0 ? rule?.reason || 'Best keyword match' : 'No strong match; defaulting to morpheus (code quality)';

  console.log(JSON.stringify({ ...selected, reason, matches: scored.slice(0, 5) }, null, 2));
}

main();

