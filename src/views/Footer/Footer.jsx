import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer({ t, scrollToSection }) {
  return (
    <footer className="bg-surface-container-lowest py-xl border-t border-outline-variant/10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-md">
        <div className="flex flex-col gap-xs items-center md:items-start">
          <span className="font-headline-md text-headline-md text-primary font-bold">{t.nav.name}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {t.footer.role}
          </span>
        </div>
        <div className="flex gap-xl">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="https://github.com/AndresBreceda" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="https://www.linkedin.com/in/andres-esquivel-breceda/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:a.e.breceda@gmail.com" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <EmailIcon />
          </a>
        </div>
        <div className="font-label-sm text-label-sm text-on-surface-variant">
          © 2026 Andrés Esquivel Breceda
        </div>
      </div>
    </footer>
  );
}

export default Footer;
