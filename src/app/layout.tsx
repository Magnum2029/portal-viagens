import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Portal de Viagens",
  description: "Destinos turísticos e dicas"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen">
        <header className="sticky top-0 z-10 backdrop-blur border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-bold">Portal de Viagens</h1>
            <nav className="text-sm opacity-90">
              <a href="/" className="hover:underline mr-4">Home</a>
              <a href="/destinos" className="hover:underline">Destinos</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 opacity-70 text-sm">
          © {new Date().getFullYear()} Portal de Viagens.
        </footer>
      </body>
    </html>
  );
}
