import { notFound } from 'next/navigation';
title: `${destino.nome} – Portal de Viagens`,
description: destino.descricao,
openGraph: {
title: `${destino.nome} – Portal de Viagens`,
description: destino.descricao,
images: destino.imagem,
},
};
}


export default function DestinoDetalhe({ params }: { params: { slug: string } }) {
const destino = getDestinoBySlug(params.slug);
if (!destino) {
// Aciona a página 404 nativa
notFound();
}


return (
<article className={styles.wrap}>
<div>
<h1 className={styles.title}>{destino.nome}</h1>
<p className={styles.location}>{destino.pais} • Fuso: {destino.fuso}</p>
<div className={styles.image}>
<Image
src={destino.imagem}
alt={`Foto de ${destino.nome}`}
fill
sizes="(max-width: 980px) 100vw, 60vw"
priority
/>
</div>
<div className={styles.badges}>
{destino.tags.map((t) => (
<span key={t} className={styles.badge}>#{t}</span>
))}
</div>
</div>


<div className={styles.block}>
<h2 style={{ marginTop: 0 }}>Sobre</h2>
<p style={{ color: 'var(--muted)' }}>{destino.descricao}</p>
<hr className="hr" />
<h3>Melhor época</h3>
<p>{destino.melhorEpoca}</p>
<h3>Destaques</h3>
<ul>
{destino.destaques.map((d) => (
<li key={d}>{d}</li>
))}
</ul>
<Link className="button" href="/destinos">← Voltar aos destinos</Link>
</div>
</article>
);
}