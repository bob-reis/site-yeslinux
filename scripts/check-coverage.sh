#!/bin/bash

echo "🧪 Verificando cobertura de testes..."

# Create a simple test to verify setup
echo "Contando arquivos de teste..."
echo "Arquivos .tsx sem teste:"
find src -name "*.tsx" -not -name "*.test.tsx" | while read file; do
    test_file="${file%.tsx}.test.tsx"
    if [ ! -f "$test_file" ]; then
        echo "  ❌ $file (sem teste: $test_file)"
    else
        echo "  ✅ $file"
    fi
done

echo ""
echo "Total de arquivos TypeScript React:"
find src -name "*.tsx" -not -name "*.test.tsx" | wc -l

echo "Total de arquivos de teste:"
find src -name "*.test.tsx" | wc -l

echo ""
echo "📊 Estrutura de cobertura esperada:"
echo "src/app/:"
ls -la src/app/*.tsx src/app/*.test.tsx 2>/dev/null || echo "  Nenhum arquivo na raiz"
echo ""
echo "src/app/test/:"
ls -la src/app/test/*.tsx src/app/test/*.test.tsx 2>/dev/null || echo "  Nenhum arquivo em test/"
echo ""
echo "src/components/sections/:"
ls -la src/components/sections/*.tsx | grep -v test | wc -l
ls -la src/components/sections/*.test.tsx | wc -l
echo ""
echo "src/components/ui/:"
ls -la src/components/ui/*.tsx | grep -v test | wc -l  
ls -la src/components/ui/*.test.tsx | wc -l

echo ""
echo "🎯 Cobertura deveria estar próxima de 100% agora!"