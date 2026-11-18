import auricularImg from "../assets/images/auriculares.jpeg";
import relojImg from "../assets/images/reloj.jpg";
import mochilaImg from "../assets/images/mochila.webp";
import tecladoImg from "../assets/images/teclado.jpg";
import termoImg from "../assets/images/termo.jpg";

const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos Pro",
    price: 89.99,
    category: "auriculares inalámbricos",
    img: auricularImg,
    stock: 10,
    description:
      "Auriculares con cancelación de ruido activa, bluetooth 5.2 y hasta 30 horas de autonomía con el estuche de carga.",
  },
  {
    id: 2,
    name: "Reloj Inteligente Sport",
    price: 129.5,
    category: "Relojes",
    img: relojImg,
    stock: 20,
    description:
      "Smartwatch resistente al agua con monitor de ritmo cardíaco, GPS integrado y seguimiento de múltiples modos deportivos.",
  },
  {
    id: 3,
    name: "Mochila Ergonómica para Laptop",
    price: 45.0,
    category: "mochilas",
    img: mochilaImg,
    stock: 5,
    description:
      "Mochila con compartimento acolchado para portátiles de hasta 15.6 pulgadas, puerto de carga USB exterior y material impermeable.",
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    price: 65.99,
    category: "tecnología",
    img: tecladoImg,
    stock: 18,
    description:
      "Teclado gamer con switches azules, retroiluminación RGB customizable y distribución en español.",
  },
  {
    id: 5,
    name: "Termo de Acero Inoxidable",
    price: 24.95,
    category: "Termos",
    img: termoImg,
    stock: 5,
    description:
      "Termo de doble capa con capacidad de 1 litro, mantiene las bebidas frías por 24 horas o calientes por 12 horas.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export function getProductById(productId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const producto = products.find((p) => p.id === productId);
      producto ? res(producto) : rej(new Error("Producto no encontrado"));
    }, 5000);
  });
}
