import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import notFound from "../../assets/404.png";
import "./Pokemon.css";

type ListItem = { name: string; url: string };
type ListResponse = { results: ListItem[] };

const GEN_RANGES: Record<number, [number, number]> = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
};

export default function PokemonGenPage() {
  const { num } = useParams();
  const gen = Number(num);

  if (![1, 2, 3].includes(gen)) return <Navigate to="/" replace />;

  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const [min, max] = GEN_RANGES[gen];
        const limit = max - min + 1;
        const offset = min - 1;

        const r = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        if (!r.ok) throw new Error("PokeAPI " + r.status);
        const data = (await r.json()) as ListResponse;

        const all = data.results.map((it) => {
          const parts = it.url.split("/").filter(Boolean);
          const id = Number(parts[parts.length - 1]);
          return { id, name: it.name };
        });

        const picks = new Set<number>();
        while (picks.size < Math.min(10, all.length)) picks.add(Math.floor(Math.random() * all.length));
        setItems([...picks].map((i) => all[i]));
      } catch (e: any) {
        setError(e.message || "Error");
      } finally {
        setLoading(false);
      }
    })();
  }, [gen]);

  if (loading) return <main className="page"><p>Cargando…</p></main>;
  if (error) return (
    <main className="page">
      <img className="page__error" src={notFound} alt="404" />
      <p>Ha ocurrido un error: {error}</p>
    </main>
  );

  return (
    <main className="page">
      <h2>10 Pokémon aleatorios — Gen{gen}</h2>
      <section className="grid">
        {items.map((p) => (
          <Card
            key={p.id}
            title={p.name[0].toUpperCase() + p.name.slice(1)}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
          />
        ))}
      </section>
    </main>
  );
}
