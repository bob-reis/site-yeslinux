'use client'

import HackerCard from '../ui/HackerCard'
import Section from '../ui/Section'

const services = [
  {
    title: 'Desenvolvimento Seguro e DevSecOps',
    items: [
      'Consultoria em código seguro',
      'Integração de segurança em pipelines CI/CD',
      'Revisão e auditoria de código-fonte',
      'Modelagem de ameaças e análise de riscos em sistemas',
      'Implementação de SAST, DAST e SCA com software livre',
    ],
  },
  {
    title: 'Investigação Cibernética',
    items: [
      'Rastreamento de perfis falsos em redes sociais',
      'Identificação de golpistas e fraudadores online',
      'Localização e análise de pessoas desaparecidas',
      'Análise forense digital em dispositivos e sistemas',
      'Apoio jurídico com relatórios técnicos investigativos',
    ],
  },
  {
    title: 'Defesa Cibernética e Infraestruturas',
    items: [
      'Implementação e gestão de firewalls (pfSense/OPNsense)',
      'XDR e EDR com software livre (Wazuh e afins)',
      'Monitoramento de incidentes e resposta a ataques',
      'Hardening de servidores, redes e aplicações',
      'Segurança em nuvem (Azure, AWS, OCI, GCP)',
    ],
  },
  {
    title: 'Testes de Segurança',
    items: [
      'Pentest digital (aplicações web, APIs, redes)',
      'Pentest físico (simulação de invasão em empresas)',
      'Análise de vulnerabilidades contínua',
      'Relatórios técnicos + executivos para tomada de decisão',
    ],
  },
  {
    title: 'Treinamentos e Capacitação',
    items: [
      'Conscientização em segurança digital para colaboradores',
      'Formação em DevSecOps e desenvolvimento seguro',
      'Treinamento em resposta a incidentes',
      'Capacitação em ferramentas open source (Wazuh, pfSense, OpenCTI, etc.)',
      'Workshops personalizados para empresas e equipes técnicas',
    ],
  },
  {
    title: 'Desenvolvimento de Soluções',
    items: [
      'APIs e ferramentas sob medida para segurança',
      'Automação de processos de defesa',
      'Integração de dashboards de monitoramento (ELK, Grafana, Kibana)',
      'Consultoria em open source para reduzir custos e aumentar proteção',
    ],
  },
]

const ServicesSection = () => (
  <Section
    id="servicos"
    highlight="Nossos"
    title="Serviços"
    description="Soluções completas em segurança digital e software livre"
  >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(({ title, items }) => (
          <HackerCard key={title} title={title} items={items} />
        ))}
      </div>
    </Section>
)

export default ServicesSection
