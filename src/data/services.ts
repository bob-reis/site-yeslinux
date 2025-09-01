export type ServiceCategory = {
  title: string
  items: string[]
}

function parseServices(raw: string): ServiceCategory[] {
  const lines = raw.split(/\r?\n/)
  const result: ServiceCategory[] = []
  let current: ServiceCategory | null = null

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (trimmed.startsWith('#')) {
      // Start a new section
      const title = trimmed.replace(/^#+\s*/, '')
      if (current) result.push(current)
      current = { title, items: [] }
      continue
    }

    if (trimmed.startsWith('-')) {
      const item = trimmed.replace(/^[-•]\s*/, '')
      if (!current) continue
      current.items.push(item)
    }
  }

  if (current) result.push(current)
  return result
}

const RAW_SERVICES = `
# Desenvolvimento Seguro e DevSecOps
- Consultoria em código seguro
- Integração de segurança em pipelines CI/CD
- Revisão e auditoria de código-fonte
- Modelagem de ameaças e análise de riscos em sistemas
- Implementação de SAST, DAST e SCA com software livre

# Investigação Cibernética
- Rastreamento de perfis falsos em redes sociais
- Identificação de golpistas e fraudadores online
- Localização e análise de pessoas desaparecidas
- Análise forense digital em dispositivos e sistemas
- Apoio jurídico com relatórios técnicos investigativos

# Defesa Cibernética e Infraestruturas
- Implementação e gestão de firewalls (pfSense/OPNsense)
- XDR e EDR com software livre (Wazuh e afins)
- Monitoramento de incidentes e resposta a ataques
- Hardening de servidores, redes e aplicações
- Segurança em nuvem (Azure, AWS, OCI, GCP)

# Testes de Segurança
- Pentest digital (aplicações web, APIs, redes)
- Pentest físico (simulação de invasão em empresas)
- Análise de vulnerabilidades contínua
- Relatórios técnicos + executivos para tomada de decisão

# Treinamentos e Capacitação
- Conscientização em segurança digital para colaboradores
- Formação em DevSecOps e desenvolvimento seguro
- Treinamento em resposta a incidentes
- Capacitação em ferramentas open source (Wazuh, pfSense, OpenCTI, etc.)
- Workshops personalizados para empresas e equipes técnicas

# Desenvolvimento de Soluções
- APIs e ferramentas sob medida para segurança
- Automação de processos de defesa
- Integração de dashboards de monitoramento (ELK, Grafana, Kibana)
- Consultoria em open source para reduzir custos e aumentar proteção
`

export const SERVICES = parseServices(RAW_SERVICES)
