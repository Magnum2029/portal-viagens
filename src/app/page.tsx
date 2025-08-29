import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-900 font-sans px-6 py-10">
      
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/next.svg"
          alt="Logo do Next.js"
          width={180}
          height={40}
          priority
        />
      </div>

      {/* Nova imagem colorida */}
      <div className="mb-6">
        <Image
          src="/images/travel-colorida.jpg" // <- Coloque essa imagem em /public/images
          alt="Viagem colorida"
          width={400}
          height={250}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Título e descrição */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Bem-vindo ao <span className="text-blue-700">Portal Viagens</span> 🌍
      </h1>
      <p className="text-center text-gray-700 max-w-xl mb-8">
        Descubra os melhores destinos, explore novas culturas e planeje sua próxima viagem com facilidade!
      </p>

      {/* Botões principais */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link
          href="/destinos"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md text-lg transition"
        >
          Ver Destinos
        </Link>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg shadow-md text-lg transition"
        >
          Documentação
        </a>
      </div>

      {/* Links adicionais */}
      <footer className="flex flex-wrap gap-6 justify-center mt-10 text-sm">
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image src="/file.svg" alt="Arquivo" width={18} height={18} />
          Aprenda Next.js
        </a>
        <a
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image src="/window.svg" alt="Templates" width={18} height={18} />
          Ver Templates
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image src="/globe.svg" alt="Next.js" width={18} height={18} />
          Ir para nextjs.org →
        </a>
      </footer>
    </main>
  );
}
