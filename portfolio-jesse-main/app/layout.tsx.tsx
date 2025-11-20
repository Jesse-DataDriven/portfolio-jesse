import "./globals.css";

export const metadata = {
  title: "Portfolio - Jesse Oliveira",
  description: "Portfolio profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <h1 style={{ padding: "2rem" }}>LAYOUT OK</h1>
        {children}
      </body>
    </html>
  );
}