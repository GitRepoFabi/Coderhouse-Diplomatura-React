import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card className={styles.cardContainer}>
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <div className={styles.imageWrapper}>
          <CardMedia
            component="img"
            image={item.img}
            alt={item.name}
            className={styles.productImage}
          />
        </div>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.description}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.priceText}
          >
            Price: ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
