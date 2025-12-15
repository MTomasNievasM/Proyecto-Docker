import "./Card.css";

type Props = {
  title: string;
  img?: string;
  subtitle?: string;
};

export default function Card({ title, img, subtitle }: Props) {
  return (
    <article className="card">
      {img ? <img src={img} alt={title} /> : <div className="card__ph" />}
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </article>
  );
}
