import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../mock/asyncMock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.ItemList}>
        <h2>Cargando productos...</h2>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.ItemList}>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
