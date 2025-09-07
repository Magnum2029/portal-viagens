// src/components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <span className={styles.small}>
          © {new Date().getFullYear()} Portal de Viagens. Todos os direitos reservados.
        </span>
        <span className={styles.small}>
          Feito com <Link href="https://nextjs.org" target="_blank">Next.js</Link>
        </span>
      </div>
    </footer>
  );
}
