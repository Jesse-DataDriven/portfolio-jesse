export default function CasePage({ params }) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Case: {params.slug}</h1>
    </main>
  );
}
