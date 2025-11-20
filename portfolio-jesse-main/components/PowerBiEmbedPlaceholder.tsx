// components/PowerBiEmbedPlaceholder.tsx
export default function PowerBiEmbedPlaceholder({ caseTitle }: { caseTitle: string }) {
  return (
    <div className="w-full rounded-lg bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)] p-6 border border-[rgba(255,255,255,0.04)] shadow-md">
      <h3 className="text-lg font-semibold">Power BI — Embed Placeholder</h3>
      <p className="mt-2 text-sm text-[#98A0AA]">
        Local reservado para o dashboard: <strong>{caseTitle}</strong>.
      </p>
      <ol className="mt-3 ml-4 list-decimal text-sm text-[#98A0AA]">
        <li>Abra o relatório no Power BI Service.</li>
        <li>Clique em <strong>Share → Embed report → Website or portal</strong>.</li>
        <li>Copie o &lt;iframe&gt; e cole no campo apropriado desta página.</li>
      </ol>
    </div>
  );
}
