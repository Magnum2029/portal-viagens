import { destinos } from "@data/destinos";
import CardDestino from "@components/CardDestino";
import styles from "@styles/Destinos.module.css";

export default function DestinosPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Destinos Turísticos</h2>

      {/* Se preferir Tailwind puro, troque por: grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 */}
      <div className={styles.grid}>
        {destinos.map((d) => (
          <CardDestino key={d.id} id={d.id} nome={d.nome} imagem={d.imagem} />
        ))}
      </div>
    </section>
  );
}
