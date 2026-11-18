import { useEffect, useState } from "react";
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((p) => setProducto(p))
      .catch((e) => console.error(e));
  }, []);

  if (!producto)
    return (
      <div>
        <h2>Cargando...</h2>
        <Spinner />
      </div>
    );
  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
