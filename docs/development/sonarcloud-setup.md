# 🔧 Configuração do SonarCloud - Guia Rápido

Este guia específico mostra como configurar o SonarCloud para o projeto YesLinux.

## 🚀 Setup Rápido (5 minutos)

### 1. Acessar SonarCloud
- URL: https://sonarcloud.io
- Login: Use sua conta GitHub
- Autorize o acesso aos repositórios

### 2. Importar Projeto
```
1. Clique no "+" no canto superior direito
2. Selecione "Analyze new project"  
3. Encontre "bob-reis/site-yeslinux"
4. Clique "Set up"
5. Escolha "With GitHub Actions"
```

### 3. Obter Credenciais
Após importar, você verá:
- **Organization**: `bob-reis`
- **Project Key**: `bob-reis_site-yeslinux`

✅ **Estes valores já estão configurados no `sonar-project.properties`**

### 4. Gerar Token
```
1. Clique no avatar → My Account
2. Vá para "Security" tab
3. Clique "Generate Tokens"
4. Nome: "GitHub Actions - YesLinux"
5. Type: "Global Analysis Token"  
6. Expires: "No expiration"
7. Clique "Generate"
8. ⚠️ COPIE o token (só aparece uma vez!)
```

### 5. Configurar Secret no GitHub
```
1. Vá para: https://github.com/bob-reis/site-yeslinux/settings/secrets/actions
2. Clique "New repository secret"
3. Name: SONAR_TOKEN
4. Secret: [cole o token copiado]
5. Clique "Add secret"
```

## ✅ Testar Configuração

1. **Faça um commit qualquer**
2. **Aguarde o workflow executar**
3. **Verifique no SonarCloud**: https://sonarcloud.io/project/overview?id=bob-reis_site-yeslinux

### 🎯 Resultado Esperado

Após o primeiro scan bem-sucedido você verá:

- **Coverage**: Percentual de cobertura de testes
- **Bugs**: 0 (meta)
- **Vulnerabilities**: 0 (meta) 
- **Code Smells**: < 10 (meta)
- **Duplicated Lines**: < 3%

## 🐛 Resolução de Problemas

### ❌ "SONAR_TOKEN not found"
```bash
# Verificar se secret existe
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/bob-reis/site-yeslinux/actions/secrets
```

**Soluções:**
1. Recriar o secret com nome exato: `SONAR_TOKEN`
2. Verificar se está em "Actions secrets", não "Codespaces"
3. Aguardar 1-2 minutos após criação

### ❌ "Project not found" 
Verificar `sonar-project.properties`:
```properties
sonar.projectKey=bob-reis_site-yeslinux
sonar.organization=bob-reis
```

### ❌ Coverage não aparece
1. **Verificar se lcov.info é gerado**:
   ```bash
   npm test
   ls -la coverage/lcov.info
   ```

2. **Verificar path no sonar-project.properties**:
   ```properties
   sonar.javascript.lcov.reportPaths=coverage/lcov.info
   ```

## 📊 Dashboard Esperado

### Métricas de Qualidade:
- **Reliability**: A (0 bugs)
- **Security**: A (0 vulnerabilities)  
- **Maintainability**: A (< 5% technical debt)
- **Coverage**: > 80%
- **Duplicated Lines**: < 3%

### Quality Gate:
- ✅ **New Coverage**: > 80%
- ✅ **New Duplicated Lines**: < 3%
- ✅ **New Vulnerabilities**: 0
- ✅ **New Bugs**: 0

## 🔒 Segurança do Token

### ✅ Boas Práticas:
- ✅ Token específico por projeto
- ✅ Sem expiração (projetos ativos)
- ✅ Stored como GitHub Secret
- ✅ Não commitado no código

### ⚠️ Se comprometer o token:
1. **Revogar no SonarCloud**: My Account → Security
2. **Gerar novo token**
3. **Atualizar GitHub Secret**

## 📚 Links Úteis

- **Projeto no SonarCloud**: https://sonarcloud.io/project/overview?id=bob-reis_site-yeslinux
- **Documentação**: https://docs.sonarcloud.io/
- **Status Badges**: https://sonarcloud.io/project/information?id=bob-reis_site-yeslinux
- **Webhook Configuration**: https://sonarcloud.io/project/webhooks?id=bob-reis_site-yeslinux

---

## 🎯 Próximos Passos

Após configurar com sucesso:

1. **Configurar Quality Gate** personalizado se necessário
2. **Adicionar badges** ao README.md
3. **Configurar notifications** para falhas
4. **Integrar com PRs** para block merge em falhas

---

*Configuração testada para o projeto YesLinux - sinta-se livre para usar este guia em outros projetos!*