"use client";

import { useMemo, useState } from "react";
import CardDestino from "@/components/CardDestino";
import type { Destino } from "@/lib/destinos";
import styles from "@/app/destinos/page.module.css";

type Props = {
  destinos: Destino[];
};

export default function DestinosClient({ destinos }: Props) {
  const [busca, setBusca] = useState("");
  const [tagAtiva, setTagAtiva] = useState("todos");

  const tags = useMemo(() => {
    const todasAsTags = destinos.flatMap((destino) => destino.tags);

    return [
      "todos",
      ...Array.from(new Set(todasAsTags)).sort(),
    ];
  }, [destinos]);

  const destinosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return destinos.filter((destino) => {
      const correspondeBusca =
        destino.nome.toLowerCase().includes(termo) ||
        destino.pais.toLowerCase().includes(termo);

      const correspondeTag =
        tagAtiva === "todos" ||
        destino.tags.includes(tagAtiva);

      return correspondeBusca && correspondeTag;
    });
  }, [busca, tagAtiva, destinos]);

  return (
    <>
      <div className={styles.controls}>
        <label className={styles.searchLabel}>
          <span className={styles.visuallyHidden}>
            Pesquisar destino
          </span>

          <input
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Pesquisar por destino ou país..."
            className={styles.searchInput}
          />
        </label>

        <div className={styles.filters}>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setTagAtiva(tag)}
              className={`${styles.filterButton} ${
                tagAtiva === tag ? styles.activeFilter : ""
              }`}
            >
              {tag === "todos" ? "Todos" : tag}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultsHeader}>
        <p>
          {destinosFiltrados.length}{" "}
          {destinosFiltrados.length === 1
            ? "destino encontrado"
            : "destinos encontrados"}
        </p>
      </div>

      {destinosFiltrados.length > 0 ? (
        <div className={styles.grid}>
          {destinosFiltrados.map((destino) => (
            <CardDestino
              key={destino.id}
              destino={destino}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <span>🔎</span>

          <h2>Nenhum destino encontrado</h2>

          <p>
            Tente pesquisar outro nome, país ou categoria.
          </p>

          <button
            type="button"
            onClick={() => {
              setBusca("");
              setTagAtiva("todos");
            }}
            className={styles.clearButton}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}