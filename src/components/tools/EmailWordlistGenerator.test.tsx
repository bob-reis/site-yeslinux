import { describe, it, expect } from 'vitest'
import render from '@/test-utils/render'
import EmailWordlistGenerator from './EmailWordlistGenerator'

describe('EmailWordlistGenerator component', () => {
  it('renders form fields, actions and ethics notice', () => {
    const html = render(<EmailWordlistGenerator />)
    expect(html).toContain('Gerador de E-mails e Wordlists')
    // Form labels
    ;[
      'Primeiro nome',
      'Apelido',
      'Inicial do meio',
      'Sobrenome',
      'Nome do meio (completo)',
      'Nome de solteira da mãe',
      'Nome da esposa/namorada',
      'Nome do pai',
      'Usernames conhecidos',
      'Data de nascimento (dd/mm/aaaa)',
      'Ano/Número extra',
      'Nomes dos pets',
      'Nomes dos filhos',
      'Time do coração',
      'Provedores',
      'Domínios personalizados'
    ]
      .forEach(label => expect(html).toContain(label))
    // Buttons
    expect(html).toContain('Gerar')
    expect(html).toContain('Baixar emails.txt')
    expect(html).toContain('Baixar wordlist.txt')
    expect(html).toContain('Baixar usernames.txt')
    // Ethics notice
    expect(html).toContain('Uso Ético e Responsabilidade')
  })
})
