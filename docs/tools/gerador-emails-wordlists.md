# Manual — Gerador de E-mails e Wordlists

Rota: `/tools/gerador-emails-wordlists`

## Uso
1. Preencha os campos: First/Nickname/Middle Initial/Middle Name/Last/Maiden/Usernames.
2. Informe data de nascimento (dd/mm/aaaa) com máscara e um ano/número extra (opcional).
3. Selecione provedores (Gmail/Hotmail/Yahoo) e/ou adicione domínios personalizados.
4. Clique em “Gerar” para produzir as listas; a tela mostra os primeiros 50 itens.
5. Baixe `emails.txt`, `wordlist.txt` e `usernames.txt` quando habilitado.

## Como funciona
- Normaliza acentos e usa padrões comuns (`{first}.{last}`, `f{last}`, `first_{last}` etc.).
- Wordlist aplica variações de case, leet simples, sufixos (`123`, `@123`, `!`) e concatena anos.
- Regras de segurança: limites de sessão (5k e-mails, 10k senhas), deduplicação e políticas mínimas (6–20 chars; letras + números).

## Ética
- Objetivo: educação, conscientização e testes autorizados de segurança.
- Autorização: utilize somente com permissão formal do responsável pelo ambiente.
- Privacidade: execução 100% local no navegador; nenhum dado é enviado/armazenado.
- Isenção: a YesLinux e colaboradores não se responsabilizam por uso indevido.
