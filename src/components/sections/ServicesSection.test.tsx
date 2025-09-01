import render from '@/test-utils/render'
import ServicesSection from './ServicesSection'

// Mock the Section component
vi.mock('../ui/Section', () => ({
  default: ({ highlight, title, description, children }: any) => (
    <div>
      <span>{highlight}</span>
      <span>{title}</span>
      <p>{description}</p>
      {children}
    </div>
  ),
}))

describe('ServicesSection', () => {
  let html: string

  beforeAll(() => {
    html = render(<ServicesSection />)
  })

  it('renders with correct props passed to Section component', () => {
    expect(html).toContain('Nossos')
    expect(html).toContain('Serviços')
    expect(html).toContain('Soluções completas em segurança digital e software livre')
  })

  it('renders hacker cards with services', () => {
    ;[
      'Desenvolvimento Seguro e DevSecOps',
      'Investigação Cibernética',
      'Defesa Cibernética e Infraestruturas',
      'Testes de Segurança',
      'Treinamentos e Capacitação',
      'Desenvolvimento de Soluções',
    ].forEach(service => expect(html).toContain(service))

    ;[
      'Integração de segurança em pipelines CI/CD',
      'Análise forense digital em dispositivos e sistemas',
      'Hardening de servidores, redes e aplicações',
      'Pentest digital (aplicações web, APIs, redes)',
      'Formação em DevSecOps e desenvolvimento seguro',
      'Integração de dashboards de monitoramento (ELK, Grafana, Kibana)',
    ].forEach(item => expect(html).toContain(item))
  })

  it('uses a responsive grid layout', () => {
    ;['grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3'].forEach(className =>
      expect(html).toContain(className)
    )
  })
})
