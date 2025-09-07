import Link from 'next/link';
import styles from './page.module.css';


export default function HomePage() {
return (
<section className={styles.hero}>
<div>
<span className={styles.badge}>✈️ Portal de Viagens</span>
<h1 className={styles.title}>Descubra destinos incríveis pelo mundo</h1>
<p className={styles.subtitle}>
Explore nossa seleção de destinos, veja detalhes, imagens e prepare sua próxima aventura.
</p>
<Link className="button" href="/destinos">Ver lista de destinos</Link>
<hr className="hr" />
<p style={{ color: 'var(--muted)' }}>
Feito com Next.js (App Router), rotas dinâmicas, next/link, next/image e Módulos CSS.
</p>
</div>
<div className={styles.card}>
<ul style={{ margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.8 }}>
<li>• Rotas baseadas em arquivos</li>
<li>• Rotas dinâmicas com SSG</li>
<li>• Layout compartilhado (Header/Footer)</li>
<li>• Módulos CSS por componente</li>
<li>• Imagens otimizadas</li>
<li>• 404 com <code>notFound()</code></li>
</ul>
</div>
</section>
);
}