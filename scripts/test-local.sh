#!/bin/bash

# Script para testar localmente a configuração de coverage
echo "🧪 Testando configuração de coverage localmente..."

# Check if vitest is available
if ! npx vitest --version > /dev/null 2>&1; then
    echo "❌ Vitest não encontrado. Instalando dependências..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Falha na instalação das dependências"
        exit 1
    fi
fi

echo "✅ Vitest encontrado"

# Run tests
echo "🏃 Executando testes..."
npm test

if [ $? -ne 0 ]; then
    echo "❌ Testes falharam"
    exit 1
fi

# Check coverage files
echo "📊 Verificando arquivos de cobertura..."

if [ -f "coverage/lcov.info" ]; then
    echo "✅ Arquivo lcov.info encontrado"
    wc -l coverage/lcov.info
else
    echo "❌ Arquivo lcov.info não encontrado"
    echo "Arquivos na pasta coverage:"
    ls -la coverage/ || echo "Pasta coverage não existe"
fi

if [ -f "coverage/coverage-summary.json" ]; then
    echo "✅ Arquivo coverage-summary.json encontrado"
    echo "Coverage summary:"
    cat coverage/coverage-summary.json | grep -E '"lines"|"functions"|"branches"|"statements"' | head -4
else
    echo "❌ Arquivo coverage-summary.json não encontrado"
fi

echo "🎯 Teste local concluído!"