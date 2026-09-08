import DestinosClient from "@/components/DestinosClient";
import { getAllDestinos } from "@/lib/destinos";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default function DestinosPage() {
  const destinos = getAllDestinos();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          🌍 Explore o mundo
        </span>

        <h1 className={styles.title}>
          Encontre seu próximo destino
        </h1>

        <p className={styles.subtitle}>
          Pesquise por cidade ou país e utilize as categorias
          para encontrar o destino ideal para sua próxima viagem.
        </p>
      </header>

      <DestinosClient destinos={destinos} />
    </main>
  );
}