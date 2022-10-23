import { useState, useCallback } from "react";
import { useNumber } from "../services/useNumber";
import styles from "./IndexPage.module.css";

export function NumberPage() {
  const [fisrt, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [button1, setButton] = useState(0);

  const decrement = useCallback(() => {
    setButton(() => button1 + 1);
  }, [button1]);

  const data = useNumber(fisrt, second, button1);

  return (
    <div>
      <div className={styles.customInput}>{data}</div>

      <div className={styles.parent}>
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
      </div>

      <button className={styles.customButton1} onClick={decrement}>
        Сгенерировать
      </button>
    </div>
  );
}
