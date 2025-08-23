"use client";

import Link from "next/link";
import Image from "next/image";
import { Destino } from "@types/destino";

type Props = {
  id: Destino["id"];
  nome: Destino["nome"];
  imagem: Destino["imagem"];
};

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <Link
      href={`/destinos/${id}`}
      className="block rounded-2xl p-4 shadow hover:shadow-lg transition"
    >
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3">
        <Image src={imagem} alt={nome} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <h3 className="text-lg font-semibold">{nome}</h3>
      <p className="text-sm opacity-70">Clique para ver detalhes</p>
    </Link>
  );
}
