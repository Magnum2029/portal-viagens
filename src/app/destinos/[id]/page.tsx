import Image from "next/image";
import { destinos } from "@data/destinos";

type Params = { params: { id: string } };

export default function DestinoPage({ params }: Params) {
  const destino = destinos.find((d) => d.id === params.id);

  if (!destino) {
    return <p>Destino não encontrado.</p>;
  }

  return (
    <article className="space-y-4">
      <h2 className="text-2xl font-semibold">{destino.nome}</h2>
      <div className="relative w-full h-72 rounded-2xl overflow-hidden">
        <Image src={destino.imagem} alt={destino.nome} fill sizes="100vw" />
      </div>
      <p className="opacity-90">{destino.descricao}</p>
    </article>
  );
}
