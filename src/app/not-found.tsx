import Link from 'next/link';


export default function NotFound() {
return (
<section style={{ textAlign: 'center', padding: '60px 0' }}>
<h1 style={{ fontSize: 44, marginBottom: 8 }}>Página não encontrada</h1>
<p style={{ color: 'var(--muted)', marginBottom: 24 }}>O conteúdo que você procura não existe ou foi removido.</p>
<Link className="button" href="/">Voltar para a Home</Link>
</section>
);
}