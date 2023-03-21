import styles from "./ProductLine.module.css";

export default function ProductLine({
  id,
  name,
  checked,
  price,
  remove,
  update,
}) {
  return (
    <>
      <div className={styles.productLine}>
        <div className={styles.part}>
          <input
            type="checkbox"
            id="prod"
            checked={checked}
            onChange={() => update(id)}
          />
          <label htmlFor="prod">{name}</label>
        </div>

        <div className={styles.part}>
          <p style={{ color: "green" }}>${price}</p>
          <img
            onClick={() => remove(id)}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/768px-Flat_cross_icon.svg.png"
            alt="Xicon"
          />
        </div>
      </div>
      <hr />
    </>
  );
}
