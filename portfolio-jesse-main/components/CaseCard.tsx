// components/CaseCard.tsx
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
};

export default function CaseCard({ slug, title, subtitle, thumbnail }: Props) {
  return (
    <Link href={`/cases/${slug}`} className="block rounded-xl overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] hover:scale-[1.01] transition-transform">
      <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${thumbnail})` }} />
      <div className="p-4">
        <div className="text-[rgba(230,238,247,0.9)] font-semibold">{title}</div>
        <div className="mt-1 text-sm text-[rgba(230,238,247,0.7)]">{subtitle}</div>
      </div>
    </Link>
  );
}
