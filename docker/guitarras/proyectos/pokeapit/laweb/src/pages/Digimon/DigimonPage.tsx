import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import notFound from "../../assets/404.png";
import "./Digimon.css";

type DigiImage = { href: string };
type DigimonLite = { id: number; name: string };
type DigimonFull = { id: number; name: string; level?: string; images?: DigiImage[] };

const PAGE_SIZE = 50;

export default function DigimonPage() {
  const [items, setItems] = useState<DigimonFull[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const first = await fetch(`https://digi-api.com/api/v1/digimon?page=1&pageSize=${PAGE_SIZE}`);
        if (!first.ok) throw new Error("HTTP " + first.status);
        const fj = await first.json();
        const totalPages: number = fj.pageable?.totalPages ?? 1;

        const randomPage = Math.max(1, Math.floor(Math.random() * totalPages));
        const pageRes = await fetch(`https://digi-api.com/api/v1/digimon?page=${randomPage}&pageSize=${PAGE_SIZE}`);
        if (!pageRes.ok) throw new Error("HTTP " + pageRes.status);
        const pj = await pageRes.json();

        const pool: DigimonLite[] = pj.content ?? [];
        const picks = new Set<number>();
        while (picks.size < Math.min(10, pool.length)) {
          picks.add(Math.floor(Math.random() * pool.length));
        }
        const ten = [...picks].map(i => pool[i]);

        // Traer detalle para obtener la imagen
        const withImages = await Promise.all(
          ten.map(async (d) => {
            const r = await fetch(`https://digi-api.com/api/v1/digimon/${d.id}`);
            if (!r.ok) return { ...d } as DigimonFull;
            const full = (await r.json()) as DigimonFull;
            return full;
          })
        );

        // Si falla el fetch deberia mostrarse sin imagen con el mensaje este de error de abajo

        setItems(withImages);
      } catch (e: any) {
        setError(e?.message || "Error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <main className="page"><p>Cargando…</p></main>;
  if (error) return (
    <main className="page">
      <img src={notFound} alt="404" className="page__error" />
      <p>Ha ocurrido un error: {error}</p>
    </main>
  );

  return (
    <main className="page">
      <h2>10 Digimon aleatorios</h2>
      <section className="grid">
        {items.map(d => (
          <Card
            key={d.id}
            title={d.name}
            subtitle={d.level}
            img={d.images?.[0]?.href || ""}
          />
        ))}
      </section>
    </main>
  );
}
