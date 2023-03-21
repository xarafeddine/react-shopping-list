import styles from "./CreateProduct.module.css";

export default function CreateProduct({ onAdd }) {
  return (
    <form className={styles.form} onSubmit={onAdd}>
      <input type="text" placeholder="product" name="product" />
      <input type="text" placeholder="price" name="price" />
      <button>ADD</button>
    </form>
  );
}
