import ProductCard from "../ProductCard/ProductCard";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.gridProduct}>
      {items.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
