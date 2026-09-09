import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>
            ✈️ Explore o mundo
          </span>

          <h1 className={styles.title}>
            Descubra lugares que merecem fazer parte da sua
            próxima viagem.
          </h1>

          <p className={styles.subtitle}>
            Explore destinos incríveis, conheça os principais
            destaques de cada lugar e encontre inspiração para
            planejar sua próxima aventura.
          </p>

          <div className={styles.actions}>
            <Link
              href="/destinos"
              className={styles.primaryButton}
            >
              Explorar destinos →
            </Link>

            <a
              href="https://github.com/Magnum2029/portal-viagens"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Ver código no GitHub ↗
            </a>
          </div>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>
            🌍
          </span>

          <h2>Sua próxima aventura começa aqui</h2>

          <p>
            Encontre informações essenciais para escolher seu
            próximo destino.
          </p>

          <ul>
            <li>Destinos selecionados</li>
            <li>Principais pontos turísticos</li>
            <li>Melhor época para viajar</li>
            <li>Inspiração para sua próxima viagem</li>
          </ul>
        </div>
      </section>
    </main>
  );
}