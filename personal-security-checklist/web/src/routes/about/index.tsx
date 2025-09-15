import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Icon from "~/components/core/icon";
import { projects, socials, intro, contributing, license } from './about-content';
import { marked } from "marked";

export default component$(() => {

  interface Contributor {
    login: string;
    avatar_url: string;
    avatarUrl: string;
    html_url: string;
    contributions: number;
    name: string;
  }

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };

  const contributorsResource = useResource$<Contributor[]>(async () => {
    // Skip network fetch during SSR/SSG; run on client only
    if (typeof document === 'undefined') return [];
    const url = 'https://api.github.com/repos/lissy93/personal-security-checklist/contributors?per_page=100';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch contributors');
    }
    return await response.json();
  });

  const sponsorsResource = useResource$<Contributor[]>(async () => {
    if (typeof document === 'undefined') return [];
    const url = 'https://github-sponsors.as93.workers.dev/lissy93';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch sponsors');
    }
    return await response.json();
  });


  return (
    <div class="m-4 md:mx-16">
      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Sobre a Lista de Segurança</h2>
        {intro.map((paragraph, index) => (
          <p class="mb-2" key={index}>{paragraph}</p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Contribuindo</h2>
        {contributing.map((paragraph, index) => (
          <p class="mb-2" key={index} dangerouslySetInnerHTML={parseMarkdown(paragraph)}></p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Agradecimentos</h2>


        <h3 class="text-2xl mb-2">Patrocinadores</h3>

        <p>
          Um enorme obrigado aos seguintes patrocinadores, pelo apoio contínuo 💖
        </p>

        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
              value={sponsorsResource}
              onPending={() => <p>Carregando...</p>}
              onResolved={(contributors: Contributor[]) => (
                contributors.map((contributor: Contributor) => (
                  <a
                    class="w-16 tooltip tooltip-bottom"
                    href={contributor.html_url || `https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={contributor.login}
                    data-tip={`Obrigado @${contributor.login}`}
                  >
                    <img
                      class="avatar rounded"
                      width="64" height="64"
                      src={contributor.avatar_url || contributor.avatarUrl}
                      alt={contributor.login}
                    />
                    <p
                      class="text-ellipsis overflow-hidden w-max-16 mx-auto line-clamp-2"
                    >{contributor.name || contributor.login}</p>
                  </a>
                ))
              )}
            />
          </div>

        <div class="divider"></div>

        <h3 class="text-2xl mb-2">Contributors</h3>
        <p>
          This project exists thanks to all the people who've helped build and maintain it.<br />
          Special thanks to the below, top-100 contributors 🌟
        </p>
        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
            value={contributorsResource}
            onPending={() => <p>Loading...</p>}
            onResolved={(contributors: Contributor[]) => (
              contributors.map((contributor: Contributor) => (
                <a
                  class="w-16 tooltip tooltip-bottom"
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={contributor.login}
                  data-tip={`@${contributor.login} has contributed ${contributor.contributions} times\n\nClick to view their profile`}
                >
                  <img
                    class="avatar rounded"
                    width="64" height="64"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <p
                    class="text-ellipsis overflow-hidden w-max-16 mx-auto"
                  >{contributor.login}</p>
                </a>
              ))
            )}
          />
        </div>

      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] my-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2" id="author">About the Author</h2>
          <p>
            This project was originally started by
            me, <a href="https://aliciasykes.com" class="link link-primary">Alicia Sykes</a>
            - with a lot of help from the community.
          </p>
          <br />
          <div class="ml-4 float-right">
            <img class="rounded-lg" width="180" height="240" alt="Alicia Sykes" src="https://i.ibb.co/fq10qhL/DSC-0597.jpg" />
            <div class="flex gap-2 my-2 justify-between">
              {
                socials.map((social, index) => (
                  <a key={index} href={social.link}>
                    <Icon icon={social.icon} width={24} height={24} />
                  </a>
                ))
              }
            </div>
          </div>
          <p class="text-lg italic font-thin">
            I write apps which aim to help people <b>escape big tech, secure their data, and protect their privacy</b>.
          </p>
          <br />
          <p>
            I have a particular interest in self-hosting, Linux, security and OSINT.<br />
            So if this type of stuff interests you, check out these other projects:
          </p>
          <ul class="list-disc pl-8">
            {
              projects.map((project, index) => (
                <li key={index}>
                  <img class="rounded inline mr-1" width="20" height="20" alt={project.title} src={project.icon} />
                  <a href={project.link} class="link link-secondary" target="_blank" rel="noreferrer">
                    {project.title}
                  </a> - {project.description}
                </li>
              ))
            }
          </ul>
          <br />
          <p>
            For a more open source apps I've published,
            see <a href="https://apps.aliciasykes.com/" class="link link-primary">apps.aliciasykes.com</a>,
            or <a href="https://github.com/lissy93" class="link link-primary">follow me on GitHub</a>
          </p>

      </article>

      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Licença</h2>
        <p>
          Este projeto possui licenças distintas: o conteúdo da checklist (em
          in <a class="link" href="https://github.com/Lissy93/personal-security-checklist/blob/HEAD/personal-security-checklist.yml">
            <code>personal-security-checklist.yml</code>
          </a>) está licenciado sob <b><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></b>.
          Todo o restante (incluindo o código) está licenciado sob <b><a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></b>.
        </p>
        <pre class="bg-front whitespace-break-spaces rounded text-xs my-2 mx-auto p-2">
          {license}
        </pre>
        <details class="collapse">
          <summary class="collapse-title">
            <h3 class="mt-2">O que isso significa para você?</h3>
          </summary>
          <div class="collapse-content">
            <p class="mb-2">
              Isso significa que para tudo (exceto o arquivo YAML da checklist), você tem liberdade quase ilimitada para
              usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias deste software.
              Tudo que pedimos é que você inclua o aviso de direitos autorais original e o aviso de permissão em qualquer cópia do software
            </p>
            <p class="mb-2">
              E para o conteúdo da lista de segurança, você pode compartilhar e adaptar este conteúdo contanto que dê o crédito apropriado,
              não o use para fins comerciais, e distribua suas contribuições sob a mesma licença.
            </p>
          </div>
        </details>

      </article>

    </div>
  );
});

export const head: DocumentHead = {
  title: "About | Digital Defense",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
    },
  ],
};
