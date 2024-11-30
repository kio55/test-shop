import styles from "@/components/card/card.module.css";
import Link from "next/link";

export const Card = ({name, description, price, id}) => {
  return (
    <div className={styles.card}>
      <h2>{name ?? "Товар"}</h2>
      <p>{description ?? "Описание товара"}</p>

      <div>
        <span>{price ?? "-1"}</span> $
      </div>

      {
        id != null ? <Link href={`/cards/${id}`}>Подробнее</Link> : <Link href={`/404`}>Подробнее</Link>
      }
    </div>
  );
};
