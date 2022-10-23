import { useState, useCallback } from "react";
import { usePassword } from "../services/usePassword";
import styles from "./IndexPage.module.css";

export function PasswordPage() {
  const [letters, setLetters] = useState(0);
  const [button1, setButton] = useState(0);

  const decrement = useCallback(() => {
    setButton(() => button1 + 1);
  }, [button1]);

  const date = usePassword(letters, button1);

  return (
    <div>
      <div className={styles.customInput}>{date}</div>
      <div className={styles.parent}>
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setLetters(e.target.value);
          }}
        />
      </div>
      <br />
      <button className={styles.customButton1} onClick={decrement}>
        {" "}
        Сгенерировать{" "}
      </button>
    </div>
  );
}
