// src/lib/destinos.ts
export type Destino = {
  id: number;
  slug: string;
  nome: string;
  pais: string;
  fuso: string;
  imagem: string; // caminho local em /public/images
  descricao: string;
  melhorEpoca: string;
  destaques: string[];
  tags: string[];
};

// Dados locais (simulando uma API)
const destinos: Destino[] = [
  {
    id: 1,
    slug: 'paris',
    nome: 'Paris',
    pais: 'França',
    fuso: 'UTC+1',
    imagem: '/images/paris.jpg',
    descricao:
      'Paris é conhecida como a Cidade Luz, famosa por sua arte, gastronomia e arquitetura icônica como a Torre Eiffel e o Museu do Louvre.',
    melhorEpoca: 'Abril a junho e setembro a novembro (clima ameno e menos filas).',
    destaques: ['Torre Eiffel', 'Museu do Louvre', 'Catedral de Notre-Dame', 'Rio Sena'],
    tags: ['romântico', 'arte', 'gastronomia'],
  },
  {
    id: 2,
    slug: 'toquio',
    nome: 'Tóquio',
    pais: 'Japão',
    fuso: 'UTC+9',
    imagem: '/images/toquio.jpg',
    descricao:
      'Tóquio mistura tradição e tecnologia: templos milenares, bairros futuristas e uma das melhores cenas gastronômicas do mundo.',
    melhorEpoca: 'Março a maio (sakura) e setembro a novembro (folhas vermelhas).',
    destaques: ['Shibuya Crossing', 'Templo Senso-ji', 'Akihabara', 'Mercado de Toyosu'],
    tags: ['tecnologia', 'cultura', 'culinária'],
  },
  {
    id: 3,
    slug: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    pais: 'Brasil',
    fuso: 'UTC-3',
    imagem: '/images/rio.jpg',
    descricao:
      'Cartão-postal do Brasil, com praias mundialmente famosas, o Cristo Redentor e o Pão de Açúcar, além de uma vida cultural vibrante.',
    melhorEpoca: 'Setembro a novembro e março a maio (clima agradável e menos lotação).',
    destaques: ['Cristo Redentor', 'Pão de Açúcar', 'Praia de Ipanema', 'Lapa'],
    tags: ['praia', 'paisagem', 'cultura'],
  },
  {
    id: 4,
    slug: 'lisboa',
    nome: 'Lisboa',
    pais: 'Portugal',
    fuso: 'UTC+0',
    imagem: '/images/lisboa.jpg',
    descricao:
      'Capital portuguesa com bairros históricos, pastel de nata e miradouros incríveis sobre o Tejo. Moderna e tradicional ao mesmo tempo.',
    melhorEpoca: 'Março a junho e setembro a outubro (temperaturas amenas).',
    destaques: ['Belém', 'Alfama', 'Castelo de São Jorge', 'Oceanário'],
    tags: ['história', 'gastronomia', 'miradouros'],
  },
];

export function getAllDestinos() {
  return destinos;
}

export function getDestinoBySlug(slug: string) {
  return destinos.find((d) => d.slug === slug);
}
