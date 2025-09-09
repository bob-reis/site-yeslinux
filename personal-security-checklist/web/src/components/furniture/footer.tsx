import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/Lissy93/personal-security-checklist/';
  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>
        Licenciado sob <a href={licenseLink} class="link link-primary">MIT</a> — Fork do projeto original de
        {' '}<a href={authorLink} class="link link-primary">Alicia Sykes</a>. Código-fonte:
        {' '}<a href={ghLink} class="link link-primary">GitHub</a>
      </p>
    </aside>
  </footer>
  );
});
