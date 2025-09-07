import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
title: 'Portal de Viagens',
description: 'Explore destinos incríveis com páginas detalhadas – Next.js App Router',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR">
<body>
<Header />
<main className="container">{children}</main>
<Footer />
</body>
</html>
);
}