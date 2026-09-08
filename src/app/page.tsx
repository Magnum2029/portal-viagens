import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>
            ✈️ Explore o mundo
          </span>

          <h1 className={styles.title}>
            Descubra lugares que merecem fazer parte da sua próxima viagem.
          </h1>

          <p className={styles.subtitle}>
            Explore destinos incríveis, conheça os principais pontos turísticos
            e encontre inspiração para planejar sua próxima aventura.
          </p>

          <div className={styles.actions}>
            <Link
              href="/destinos"
              className={styles.primaryButton}
            >
              Explorar destinos →
            </Link>

            <a
              href="#destaques"
              className={styles.secondaryButton}
            >
              Conheça o projeto
            </a>
          </div>
        </div>

        <div className={styles.card} id="destaques">
          <h2 className={styles.cardTitle}>
            Sua próxima aventura começa aqui
          </h2>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <span className={styles.icon}>🌍</span>
              <span>
                Descubra destinos selecionados ao redor do mundo.
              </span>
            </li>

            <li className={styles.feature}>
              <span className={styles.icon}>📍</span>
              <span>
                Conheça os principais destaques de cada destino.
              </span>
            </li>

            <li className={styles.feature}>
              <span className={styles.icon}>📅</span>
              <span>
                Veja qual é a melhor época para realizar sua viagem.
              </span>
            </li>

            <li className={styles.feature}>
              <span className={styles.icon}>✈️</span>
              <span>
                Encontre inspiração para planejar sua próxima aventura.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}