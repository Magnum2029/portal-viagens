import Link from 'next/link';
import styles from './Header.module.css';


export default function Header() {
return (
<header className={styles.header}>
<div className={`container ${styles.inner}`}>
<Link href="/" className={styles.logo}>🌍 Portal de Viagens</Link>
<nav className={styles.nav} aria-label="menu principal">
<Link href="/" className={styles.link}>Início</Link>
<Link href="/destinos" className={styles.link}>Destinos</Link>
<a href="https://github.com/Magnum2029" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
</nav>
</div>
</header>
);
}