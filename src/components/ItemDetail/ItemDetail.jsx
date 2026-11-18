import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className={styles.itemDetailContainer}>
      <div className={styles.itemDetailGrid}>
        <div className={styles.itemDetailImgBox}>
          <img
            src={producto.img}
            alt={producto.description}
            className={styles.itemDetailImg}
          />
        </div>

        <div className={styles.itemDetailInfo}>
          <h2>{producto.name}</h2>
          <p>
            <strong>Precio:</strong> {producto.price}
          </p>
          <p>
            <strong>Categoría:</strong> {producto.category}
          </p>
          <p>
            <strong>Descripción: </strong> {producto.description}
          </p>
          <p>
            <strong> Stock disponible: </strong> {producto.stock}
          </p>

          <div className={styles.itemDetailCount}>
            <ItemCount item={producto.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
