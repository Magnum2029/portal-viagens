import CardDestino from '@/components/CardDestino';
import { getAllDestinos } from '@/lib/destinos';
import styles from './page.module.css';


export const dynamic = 'force-static';


export default function DestinosPage() {
const destinos = getAllDestinos();


return (
<section>
<div className={styles.header}>
<h1 className={styles.title}>Destinos</h1>
</div>
<p className={styles.subtitle}>Escolha um destino para ver mais detalhes:</p>
<div className="grid">
{destinos.map((d) => (
<CardDestino key={d.id} destino={d} />
))}
</div>
</section>
);
}