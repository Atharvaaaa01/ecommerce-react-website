import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import Details from "../components/details";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover Amazing products at Amazing Prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title" style={{ textAlign: "center" }}>
          Our Products
        </h2>
        <div className="product-grid">
          {products.map((product) => (
            <Details product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
