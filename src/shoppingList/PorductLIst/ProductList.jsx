import { useState } from "react";
import CreateProduct from "../CreateProduct/CreateProduct";
import ProductLine from "../ProductLine/ProductLine";
import styles from "./ProductList.module.css";
export default function ProductList() {
  const [Products, setProducts] = useState([]);

  const [queryUnpackedProducts, setQueryUnpackedProducts] = useState("");
  const [queryPackedProducts, setQueryPackedProducts] = useState("");

  const onAdd = (e) => {
    e.preventDefault();
    setProducts((products) => [
      ...products,
      {
        id: Math.random() * 1000,
        product: e.target.product.value,
        price: e.target.price.value,
        checked: false,
      },
    ]);
  };
  const unpack = () => {
    setProducts((products) =>
      products.map((item) => ({ ...item, checked: false }))
    );
  };

  const removeProduct = (id) => {
    setProducts((products) => products.filter((product) => product.id !== id));
  };

  const updateProduct = (id) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return { ...product, checked: !product.checked };
        }
        return product;
      })
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <CreateProduct onAdd={onAdd} />
      </div>

      <div className={styles.filter}>
        <p>
          Untracked Items:
          {Products.filter((item) => !item.checked).length}
        </p>
        <input
          type="text"
          placeholder="Filter unpacked items"
          value={queryUnpackedProducts}
          onChange={(e) => setQueryUnpackedProducts(e.target.value)}
        />
      </div>

      <div>
        {Products.filter((item) => !item.checked).length === 0
          ? "empty for now :("
          : Products.filter(
              (item) =>
                !item.checked && item.product.includes(queryUnpackedProducts)
            ).map((item) => (
              <ProductLine
                remove={removeProduct}
                key={item.id}
                id={item.id}
                name={item.product}
                price={item.price}
                checked={item.checked}
                update={updateProduct}
              />
            ))}
      </div>

      <div className={styles.filter}>
        <p>
          Tracked Items:
          {Products.filter((item) => item.checked).length}
        </p>
        <input
          type="text"
          placeholder="Filter unpakedpacked items"
          value={queryPackedProducts}
          onChange={(e) => setQueryPackedProducts(e.target.value)}
        />
      </div>

      <div>
        {Products.filter((item) => item.checked).length === 0
          ? "empty for now :("
          : Products.filter(
              (item) =>
                item.checked && item.product.includes(queryPackedProducts)
            ).map((item) => (
              <ProductLine
                remove={removeProduct}
                key={item.id}
                id={item.id}
                name={item.product}
                price={item.price}
                checked={item.checked}
                update={updateProduct}
              />
            ))}
      </div>

      <button className={styles.button} onClick={unpack}>
        Unpack all products
      </button>
      <p style={{ color: "green" }}>
        Total:{" "}
        {Products.reduce((prev, curr) => {
          return prev + +curr.price;
        }, 0)}
      </p>
    </div>
  );
}
