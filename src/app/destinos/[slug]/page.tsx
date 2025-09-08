// src/app/destinos/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import styles from './page.module.css';
import { getDestinoBySlug } from '@/lib/destinos';

type PageProps = { params: { slug: string } };

// Metadata dinâmico (App Router)
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const destino = getDestinoBySlug(params.slug);

  if (!destino) {
    return {
      title: 'Destino não encontrado — Portal de Viagens',
      description: 'O destino informado não existe.',
    };
  }

  const title = `${destino.nome} — Portal de Viagens`;

  return {
    title,
    description: destino.descricao,
    openGraph: {
      title,
      description: destino.descricao,
      images: destino.imagem ? [{ url: destino.imagem }] : undefined,
    },
  };
}

export default function DestinoDetalhe({ params }: PageProps) {
  const destino = getDestinoBySlug(params.slug);
  if (!destino) return notFound();

  return (
    <article className={styles.wrap}>
      <h1 className={styles.title}>{destino.nome}</h1>
      <p className={styles.location}>
        {destino.pais} • Fuso: {destino.fuso}
      </p>

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

      <div className={styles.block}>
        <h2 style={{ marginTop: 0 }}>Sobre</h2>
        <p style={{ color: 'var(--muted)' }}>{destino.descricao}</p>

        <hr className="hr" />

        <h3>Melhor época</h3>
        <p>{destino.melhorEpoca}</p>

        <h3>Destaques</h3>
        <ul>
          {destino.destaques.map((d, i) => (
            <li key={`${d}-${i}`}>{d}</li>
          ))}
        </ul>
      </div>

      <Link className="button" href="/destinos">
        ← Voltar aos destinos
      </Link>
    </article>
  );
}
