// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgba(255,255,255,0.03)] bg-[rgba(2,6,12,0.6)]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h4 className="text-white font-semibold">Jessé Oliveira</h4>
          <p className="text-[rgba(230,238,247,0.8)] mt-2">Especialista em CX, Produto e Dados</p>
        </div>

        <div>
          <h5 className="text-[rgba(230,238,247,0.9)] font-medium">Contato</h5>
          <p className="mt-2 text-sm text-[rgba(230,238,247,0.8)]">Email: <a href="mailto:Jesse_ombd@hotmail.com" className="text-[#00B2FF]">Jesse_ombd@hotmail.com</a></p>
          <p className="mt-1 text-sm text-[rgba(230,238,247,0.8)]">Telefone: <a href="tel:+5511969982743" className="text-[#00B2FF]">+55 11 96998-2743</a></p>
        </div>

        <div>
          <h5 className="text-[rgba(230,238,247,0.9)] font-medium">LinkedIn</h5>
          <a href="https://www.linkedin.com/in/jesse-oliveira-de-castro-88421536/" target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#00B2FF]">/jesse-oliveira-de-castro</a>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-[rgba(230,238,247,0.6)]">© {new Date().getFullYear()} Jessé Oliveira — Todos os direitos reservados</div>
    </footer>
  );
}
