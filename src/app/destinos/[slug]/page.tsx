import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import {
  getAllDestinos,
  getDestinoBySlug,
} from "@/lib/destinos";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllDestinos().map((destino) => ({
    slug: destino.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destino = getDestinoBySlug(slug);

  if (!destino) {
    return {
      title: "Destino não encontrado — Portal de Viagens",
      description: "O destino informado não existe.",
    };
  }

  const title = `${destino.nome} — Portal de Viagens`;

  return {
    title,
    description: destino.descricao,
    openGraph: {
      title,
      description: destino.descricao,
      images: destino.imagem
        ? [{ url: destino.imagem }]
        : undefined,
    },
  };
}

export default async function DestinoDetalhe({
  params,
}: PageProps) {
  const { slug } = await params;
  const destino = getDestinoBySlug(slug);

  if (!destino) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <Link
        href="/destinos"
        className={styles.backLink}
      >
        ← Voltar para destinos
      </Link>

      <article>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              🌍 Destino selecionado
            </span>

            <h1 className={styles.title}>
              {destino.nome}
            </h1>

            <p className={styles.location}>
              {destino.pais}
              <span aria-hidden="true"> • </span>
              Fuso horário: {destino.fuso}
            </p>
          </div>

          <div className={styles.tags}>
            {destino.tags.map((tag) => (
              <span
                key={tag}
                className={styles.tag}
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.heroImage}>
          <Image
            src={destino.imagem}
            alt={`${destino.nome}, ${destino.pais}`}
            fill
            sizes="(max-width: 900px) 100vw, 1100px"
            className={styles.image}
            priority
          />

          <div className={styles.imageOverlay} />

          <div className={styles.imageCaption}>
            <span>{destino.nome}</span>
            <small>{destino.pais}</small>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <section className={styles.mainContent}>
            <div className={styles.section}>
              <span className={styles.sectionLabel}>
                Sobre o destino
              </span>

              <h2>Conheça {destino.nome}</h2>

              <p className={styles.description}>
                {destino.descricao}
              </p>
            </div>

            <div className={styles.section}>
              <span className={styles.sectionLabel}>
                O que conhecer
              </span>

              <h2>Principais destaques</h2>

              <div className={styles.highlights}>
                {destino.destaques.map(
                  (destaque, index) => (
                    <div
                      key={destaque}
                      className={styles.highlight}
                    >
                      <span
                        className={styles.highlightNumber}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{destaque}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>
                📅
              </span>

              <div>
                <span className={styles.infoLabel}>
                  Melhor época
                </span>

                <p>{destino.melhorEpoca}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>
                🕒
              </span>

              <div>
                <span className={styles.infoLabel}>
                  Fuso horário
                </span>

                <p>{destino.fuso}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>
                📍
              </span>

              <div>
                <span className={styles.infoLabel}>
                  País
                </span>

                <p>{destino.pais}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.bottomAction}>
          <div>
            <h2>Continue explorando</h2>

            <p>
              Conheça outros destinos disponíveis no
              Portal de Viagens.
            </p>
          </div>

          <Link
            href="/destinos"
            className={styles.button}
          >
            Ver outros destinos →
          </Link>
        </div>
      </article>
    </main>
  );
}