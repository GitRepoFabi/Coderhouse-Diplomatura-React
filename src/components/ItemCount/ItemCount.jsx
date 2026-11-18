import { useState } from "react";
import styles from "./ItemCount.module.css";

function ItemCount({ item }) {
  const [count, setCount] = useState(1);

  const stock = Number(item) || 0;

  const handleIncrease = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.decrease}`}
        onClick={handleDecrease}
        disabled={count <= 0}
      >
        -
      </button>
      <p className={styles.number}>{count}</p>
      <button
        className={`${styles.button} ${styles.increase}`}
        onClick={handleIncrease}
        disabled={count >= stock}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
