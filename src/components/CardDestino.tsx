import Link from 'next/link';
import Image from 'next/image';
import styles from './CardDestino.module.css';


export type DestinoCard = {
id: number;
slug: string;
nome: string;
pais: string;
imagem: string; // URL remota (Unsplash/Pexels)
};


export default function CardDestino({ destino }: { destino: DestinoCard }) {
return (
<Link href={`/destinos/${destino.slug}`} className={styles.card}>
<div className={styles.media}>
<Image
src={destino.imagem}
alt={`Foto de ${destino.nome}`}
fill
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
priority={false}
/>
</div>
<div className={styles.content}>
<h3 className={styles.name}>{destino.nome}</h3>
<p className={styles.country}>{destino.pais}</p>
</div>
</Link>
);
}