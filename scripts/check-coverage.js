#!/usr/bin/env node
// Simple coverage check for module-specific paths using Vitest json-summary
// Usage: node scripts/check-coverage.js <path1> <path2> ... [threshold]

const fs = require('fs')
const path = require('path')

function fail(msg) {
  console.error(`Coverage check failed: ${msg}`)
  process.exit(1)
}

const args = process.argv.slice(2)
if (args.length === 0) fail('no paths provided')

let threshold = 80
const maybeNumber = Number(args[args.length - 1])
let patterns = args
if (!Number.isNaN(maybeNumber)) {
  threshold = maybeNumber
  patterns = args.slice(0, -1)
}

const summaryPath = path.resolve(process.cwd(), 'coverage', 'coverage-summary.json')
if (!fs.existsSync(summaryPath)) fail(`coverage-summary not found at ${summaryPath}`)

const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'))

let totalLines = 0
let coveredLines = 0
let totalStatements = 0
let coveredStatements = 0

const matches = Object.entries(summary).filter(([file]) =>
  patterns.some(p => file.includes(p))
)

if (matches.length === 0) fail(`no covered files matched patterns: ${patterns.join(', ')}`)

for (const [, metrics] of matches) {
  if (metrics && metrics.lines) {
    totalLines += metrics.lines.total || 0
    coveredLines += metrics.lines.covered || 0
  }
  if (metrics && metrics.statements) {
    totalStatements += metrics.statements.total || 0
    coveredStatements += metrics.statements.covered || 0
  }
}

const linesPct = totalLines ? (coveredLines / totalLines) * 100 : 0
const statementsPct = totalStatements ? (coveredStatements / totalStatements) * 100 : 0

const minPct = Math.min(linesPct, statementsPct)

console.log(`Module coverage (min of lines/statements): ${minPct.toFixed(2)}% (threshold ${threshold}%)`)

if (minPct + 1e-9 < threshold) {
  fail(`module coverage ${minPct.toFixed(2)}% is below threshold ${threshold}%`)
}

console.log('Module coverage OK')

