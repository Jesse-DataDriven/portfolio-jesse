// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[rgba(6,10,15,0.6)] backdrop-blur-md border-b border-[rgba(255,255,255,0.03)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-xl">Jessé Oliveira</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/entregas" className="text-[rgba(230,238,247,0.85)]">Entregas</Link>
          <Link href="/storytelling" className="text-[rgba(230,238,247,0.85)]">Storytelling</Link>
          <Link href="/artefatos" className="text-[rgba(230,238,247,0.85)]">Artefatos</Link>
          <Link href="/contato" className="bg-[#00B2FF] text-black px-3 py-2 rounded-md font-medium">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
