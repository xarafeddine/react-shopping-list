import { useState } from "react";
import styles from "./Slides.module.css";
export function Slides({ list }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    if (currentIndex < list.length - 1) {
      console.log("next");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const onPrev = () => {
    if (currentIndex > 0) {
      console.log("perv");

      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>{list[currentIndex]}</div>
      <button onClick={onPrev}>prev</button>
      <button onClick={onNext}>next</button>
    </div>
  );
}
