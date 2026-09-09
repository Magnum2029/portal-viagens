import Image from "next/image";
import Link from "next/link";
import type { Destino } from "@/lib/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export default function CardDestino({
  destino,
}: CardDestinoProps) {
  return (
    <Link
      href={`/destinos/${destino.slug}`}
      className={styles.card}
      aria-label={`Ver detalhes de ${destino.nome}`}
    >
      <div className={styles.media}>
        <Image
          src={destino.imagem}
          alt={`${destino.nome}, ${destino.pais}`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 50vw"
          className={styles.image}
        />

        <div className={styles.imageOverlay} />

        <span className={styles.countryBadge}>
          {destino.pais}
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.name}>
            {destino.nome}
          </h2>

          <span className={styles.timezone}>
            {destino.fuso}
          </span>
        </div>

        <p className={styles.description}>
          {destino.descricao}
        </p>

        <div className={styles.tags}>
          {destino.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={styles.tag}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.details}>
            Ver detalhes
          </span>

          <span
            className={styles.arrow}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}