// Dados estruturados do questionário de maturidade em segurança
const assessmentData = {
    key: "cis-lite-v1",
    version: 1,
    domains: [
        {
            id: "gov",
            name: "Governança & Risco",
            weight: 1.0,
            description: "Políticas, processos e estruturas de governança em segurança da informação",
            icon: "🏛️"
        },
        {
            id: "iam",
            name: "Identidades & Acessos",
            weight: 1.2,
            description: "Gerenciamento de identidades, autenticação e controle de acesso",
            icon: "🔐"
        },
        {
            id: "data",
            name: "Dados & LGPD",
            weight: 1.1,
            description: "Proteção de dados, classificação e conformidade com LGPD",
            icon: "🛡️"
        },
        {
            id: "appsec",
            name: "AppSec/DevSecOps",
            weight: 1.3,
            description: "Segurança no desenvolvimento e DevSecOps",
            icon: "💻"
        },
        {
            id: "cloud",
            name: "Infra/Cloud",
            weight: 1.2,
            description: "Segurança da infraestrutura e ambientes cloud",
            icon: "☁️"
        },
        {
            id: "secops",
            name: "Detecção & Resposta",
            weight: 1.3,
            description: "Monitoramento, detecção e resposta a incidentes",
            icon: "🚨"
        },
        {
            id: "awareness",
            name: "Conscientização",
            weight: 0.9,
            description: "Treinamento e conscientização em segurança",
            icon: "🎓"
        },
        {
            id: "bcdr",
            name: "Continuidade & Resiliência",
            weight: 1.0,
            description: "Continuidade de negócios e recuperação de desastres",
            icon: "🔄"
        }
    ],
    choices: [
        { label: "Não", value: 0, description: "Não implementado ou inexistente" },
        { label: "Parcial", value: 2, description: "Parcialmente implementado" },
        { label: "Sim", value: 5, description: "Totalmente implementado" }
    ],
    questions: {
        gov: [
            {
                id: "gov_1",
                text: "Política de segurança aprovada e comunicada?",
                weight: 2,
                recommendation: "Desenvolva uma política de segurança abrangente, aprovada pela alta direção e comunicada a todos os colaboradores."
            },
            {
                id: "gov_2",
                text: "Fornecedores críticos passam por avaliação de risco periódica?",
                weight: 2,
                recommendation: "Implemente processo formal de due diligence e avaliação contínua de riscos dos fornecedores críticos."
            },
            {
                id: "gov_3",
                text: "Existe inventário de ativos atualizado e classificado?",
                weight: 2,
                recommendation: "Mantenha inventário completo e atualizado de todos os ativos, com classificação baseada na criticidade para o negócio."
            },
            {
                id: "gov_4",
                text: "Há processo formal de gestão de riscos de segurança?",
                weight: 3,
                recommendation: "Estabeleça metodologia formal de identificação, avaliação, tratamento e monitoramento de riscos de segurança."
            },
            {
                id: "gov_5",
                text: "Comitê de segurança se reúne regularmente?",
                weight: 2,
                recommendation: "Forme comitê executivo de segurança com reuniões regulares para governança e tomada de decisões estratégicas."
            },
            {
                id: "gov_6",
                text: "Auditorias internas de segurança realizadas ao menos 1x/ano?",
                weight: 3,
                recommendation: "Conduza auditorias internas regulares para verificar conformidade com políticas e identificar gaps de segurança."
            }
        ],
        iam: [
            {
                id: "iam_1",
                text: "MFA em 100% dos usuários privilegiados?",
                weight: 3,
                recommendation: "Aplique MFA para 100% dos usuários, priorizando contas privilegiadas e acesso a sistemas críticos."
            },
            {
                id: "iam_2",
                text: "Revisão trimestral de acessos e recertificação?",
                weight: 2,
                recommendation: "Implemente processo de revisão e recertificação de acessos pelos gestores a cada trimestre."
            },
            {
                id: "iam_3",
                text: "Contas privilegiadas usam cofre de senhas/rotatividade?",
                weight: 2,
                recommendation: "Utilize solução de PAM (Privileged Access Management) com rotação automática de senhas privilegiadas."
            },
            {
                id: "iam_4",
                text: "Implementado princípio de menor privilégio (least privilege)?",
                weight: 3,
                recommendation: "Aplique o princípio do menor privilégio, concedendo apenas os acessos mínimos necessários para cada função."
            },
            {
                id: "iam_5",
                text: "Processos de onboarding/offboarding automatizados?",
                weight: 2,
                recommendation: "Automatize provisionamento e desprovisionamento de acessos integrado com RH e sistemas corporativos."
            },
            {
                id: "iam_6",
                text: "Autenticação integrada com AD/AzureAD/IdP central?",
                weight: 2,
                recommendation: "Centralize autenticação através de provedores de identidade corporativos com SSO (Single Sign-On)."
            }
        ],
        data: [
            {
                id: "data_1",
                text: "Dados classificados (Público/Interno/Confidencial/Sensível)?",
                weight: 2,
                recommendation: "Implemente esquema de classificação de dados com rótulos e controles adequados para cada categoria."
            },
            {
                id: "data_2",
                text: "Registro das operações de tratamento (ROPA) atualizado?",
                weight: 2,
                recommendation: "Mantenha ROPA (Record of Processing Activities) atualizado conforme exigências da LGPD."
            },
            {
                id: "data_3",
                text: "Existe processo de consentimento e base legal definida?",
                weight: 3,
                recommendation: "Defina bases legais claras para tratamento de dados e implemente processos de consentimento quando necessário."
            },
            {
                id: "data_4",
                text: "DLP implantado em e-mail e endpoints críticos?",
                weight: 2,
                recommendation: "Implemente solução de DLP (Data Loss Prevention) para prevenir vazamentos de dados sensíveis."
            },
            {
                id: "data_5",
                text: "Criptografia em repouso e em trânsito aplicada?",
                weight: 3,
                recommendation: "Aplique criptografia forte para dados em repouso (storage) e em trânsito (comunicações)."
            },
            {
                id: "data_6",
                text: "Plano de retenção e descarte seguro de dados sensíveis?",
                weight: 2,
                recommendation: "Estabeleça políticas de retenção e procedimentos de descarte seguro de dados conforme regulamentações."
            }
        ],
        appsec: [
            {
                id: "appsec_1",
                text: "SAST com gate bloqueante nas PRs?",
                weight: 3,
                recommendation: "Ative SAST com quality gate bloqueante e defina política de correção por severidade antes do merge."
            },
            {
                id: "appsec_2",
                text: "Gestão de dependências com SBOM e pinning/renovação?",
                weight: 2,
                recommendation: "Implemente gestão de dependências com SBOM, dependency pinning e processo de atualização controlada."
            },
            {
                id: "appsec_3",
                text: "DAST em staging com correções antes do go-live?",
                weight: 3,
                recommendation: "Execute DAST em ambiente de staging com correção obrigatória de vulnerabilidades antes da produção."
            },
            {
                id: "appsec_4",
                text: "Scans de secrets em pipelines e repositórios?",
                weight: 2,
                recommendation: "Implemente verificação automática de secrets em repositórios e pipelines CI/CD."
            },
            {
                id: "appsec_5",
                text: "Testes de cobertura mínima e análise de qualidade em PRs?",
                weight: 2,
                recommendation: "Defina cobertura mínima de testes e análise de qualidade de código como gates obrigatórios."
            },
            {
                id: "appsec_6",
                text: "Treinamento de desenvolvedores em segurança (OWASP Top 10)?",
                weight: 2,
                recommendation: "Conduza treinamentos regulares em secure coding e OWASP Top 10 para toda equipe de desenvolvimento."
            }
        ],
        cloud: [
            {
                id: "cloud_1",
                text: "IaC com PR e baseline CIS aplicados?",
                weight: 2,
                recommendation: "Adote Infrastructure as Code com revisões via PR e aplicação de baselines de segurança CIS."
            },
            {
                id: "cloud_2",
                text: "Backups imutáveis/testados (3-2-1) e restauração verificada?",
                weight: 3,
                recommendation: "Implemente estratégia 3-2-1 de backup com storage imutável e testes regulares de restauração."
            },
            {
                id: "cloud_3",
                text: "WAF ativo e monitorado em aplicações expostas?",
                weight: 2,
                recommendation: "Configure WAF (Web Application Firewall) com regras adequadas e monitoramento ativo."
            },
            {
                id: "cloud_4",
                text: "Hardening de servidores e imagens base atualizadas?",
                weight: 2,
                recommendation: "Aplique hardening conforme benchmarks CIS e mantenha imagens base sempre atualizadas."
            },
            {
                id: "cloud_5",
                text: "Inventário de cloud e on-prem centralizado?",
                weight: 2,
                recommendation: "Mantenha inventário centralizado de recursos cloud e on-premises com descoberta automática."
            },
            {
                id: "cloud_6",
                text: "Logging centralizado com retenção de 12+ meses?",
                weight: 3,
                recommendation: "Implemente logging centralizado com retenção adequada para atender requisitos de auditoria e forense."
            }
        ],
        secops: [
            {
                id: "secops_1",
                text: "EDR/XDR implantado em >90% dos ativos?",
                weight: 3,
                recommendation: "Implemente solução EDR/XDR com cobertura superior a 90% dos endpoints e servidores críticos."
            },
            {
                id: "secops_2",
                text: "Playbooks testados (tabletop últimos 12 meses)?",
                weight: 2,
                recommendation: "Desenvolva e teste playbooks de resposta a incidentes através de exercícios tabletop regulares."
            },
            {
                id: "secops_3",
                text: "Centralização de logs em SIEM?",
                weight: 3,
                recommendation: "Implemente SIEM com coleta centralizada de logs e regras de correlação para detecção de ameaças."
            },
            {
                id: "secops_4",
                text: "KPIs (MTTD/MTTR) monitorados e revisados?",
                weight: 2,
                recommendation: "Defina e monitore KPIs de segurança como MTTD (Mean Time to Detect) e MTTR (Mean Time to Respond)."
            },
            {
                id: "secops_5",
                text: "Equipe/fornecedor de resposta a incidentes definida?",
                weight: 2,
                recommendation: "Estabeleça equipe interna ou contrato com fornecedor especializado para resposta a incidentes 24/7."
            },
            {
                id: "secops_6",
                text: "Testes de Red Team ou simulações de ataque realizadas?",
                weight: 3,
                recommendation: "Conduza exercícios de Red Team ou simulações de ataque para validar capacidades defensivas."
            }
        ],
        awareness: [
            {
                id: "awareness_1",
                text: "Simulações de phishing com feedback por função?",
                weight: 2,
                recommendation: "Execute campanhas simuladas de phishing por função com microtreinamentos corretivos personalizados."
            },
            {
                id: "awareness_2",
                text: "Onboarding/offboarding com checklist de segurança?",
                weight: 2,
                recommendation: "Inclua checklist de segurança nos processos de onboarding e offboarding de colaboradores."
            },
            {
                id: "awareness_3",
                text: "Treinamentos anuais obrigatórios de segurança?",
                weight: 2,
                recommendation: "Implemente treinamento anual obrigatório de conscientização em segurança para todos os colaboradores."
            },
            {
                id: "awareness_4",
                text: "Treinamentos específicos por função (dev, suporte, vendas)?",
                weight: 2,
                recommendation: "Desenvolva treinamentos específicos de segurança adaptados para cada função/departamento."
            },
            {
                id: "awareness_5",
                text: "Comunicações periódicas de segurança (newsletter, intranet)?",
                weight: 1,
                recommendation: "Mantenha comunicação regular sobre segurança através de newsletters, intranet ou outros canais internos."
            },
            {
                id: "awareness_6",
                text: "Campanhas de conscientização com gamificação/premiação?",
                weight: 1,
                recommendation: "Implemente campanhas de conscientização com elementos de gamificação e sistemas de reconhecimento."
            }
        ],
        bcdr: [
            {
                id: "bcdr_1",
                text: "RTO/RPO definidos por sistema e testados?",
                weight: 3,
                recommendation: "Defina RTO/RPO para cada sistema crítico e valide através de testes regulares de recuperação."
            },
            {
                id: "bcdr_2",
                text: "DR testado no último ano?",
                weight: 3,
                recommendation: "Execute testes completos de Disaster Recovery ao menos anualmente com documentação de resultados."
            },
            {
                id: "bcdr_3",
                text: "BCP formalizado e comunicado aos times críticos?",
                weight: 2,
                recommendation: "Formalize Business Continuity Plan e comunique procedimentos para todas as equipes críticas."
            },
            {
                id: "bcdr_4",
                text: "Teste de failover em sistemas críticos nos últimos 12 meses?",
                weight: 3,
                recommendation: "Conduza testes de failover em todos os sistemas críticos com documentação de tempos e procedimentos."
            },
            {
                id: "bcdr_5",
                text: "Exercícios de crise/cenários de indisponibilidade simulados?",
                weight: 2,
                recommendation: "Realize exercícios de gerenciamento de crise simulando diferentes cenários de indisponibilidade."
            },
            {
                id: "bcdr_6",
                text: "Inventário de contatos e fornecedores de contingência disponível?",
                weight: 1,
                recommendation: "Mantenha inventário atualizado de contatos emergenciais e fornecedores alternativos para continuidade."
            }
        ]
    },
    maturityLevels: [
        {
            level: "Inicial",
            range: [0, 0.9],
            description: "Práticas de segurança inexistentes ou completamente ad-hoc",
            shortDescription: "Improviso",
            fullDescription: "Não há práticas formais de segurança. Se existem, são ad-hoc, dependem de pessoas específicas.",
            example: "Não existe política de senhas, cada equipe decide a sua forma.",
            color: "#dc3545",
            icon: "🔴"
        },
        {
            level: "Repetível",
            range: [1.0, 1.9],
            description: "Práticas existem em alguns setores, mas sem uniformidade",
            shortDescription: "Faz, mas cada um do seu jeito",
            fullDescription: "Algumas práticas existem e já são repetidas de forma parecida em mais de um time, mas ainda sem formalização completa.",
            example: "Equipe de TI sempre pede MFA para admins, mas não existe política oficial para toda a empresa.",
            color: "#fd7e14",
            icon: "🟠"
        },
        {
            level: "Definido",
            range: [2.0, 2.9],
            description: "Processos formalizados e documentados",
            shortDescription: "Política documentada, implementação parcial",
            fullDescription: "Processos formalizados e documentados. Existe política, norma, procedimento. Todos conhecem a regra, mas pode faltar consistência ou métricas.",
            example: "Política de senhas definida e publicada, mas ainda não há auditoria contínua para garantir cumprimento.",
            color: "#ffc107",
            icon: "🟡"
        },
        {
            level: "Gerenciado",
            range: [3.0, 3.9],
            description: "Segurança monitorada, medida e auditada",
            shortDescription: "Mede, audita, cobra resultado",
            fullDescription: "Segurança monitorada e medida. Controles têm KPIs e são auditados. Existe governança e acompanhamento por gestão.",
            example: "MFA obrigatório em 100% dos acessos, revisado trimestralmente, com relatórios para a direção.",
            color: "#20c997",
            icon: "🟢"
        },
        {
            level: "Otimizado",
            range: [4.0, 5.0],
            description: "Segurança é cultura organizacional com melhoria contínua",
            shortDescription: "Automatiza, melhora sempre, cultura enraizada",
            fullDescription: "Segurança é cultura. Processos passam por melhoria contínua e são adaptados ao negócio. Existe automação, métricas avançadas e integração com a estratégia da empresa.",
            example: "Revisão de acessos é automática, com integração ao AD e alertas de risco; melhorias são feitas de forma proativa.",
            color: "#28a745",
            icon: "🌟"
        }
    ]
};