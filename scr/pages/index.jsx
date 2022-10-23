import styles from "./IndexPage.module.css";
import { Link } from "react-router-dom";

export function IndexPage() {
  return (
    <div>
      <br />
      <h1>Генератор рандома</h1>
      <div className={styles.parent}>
        <Link to={"/password"} className={styles.linka}>
          Пароль
        </Link>
        <br />
        <br />
        <Link to={"/number"} className={styles.linka}>
          Числа
        </Link>
      </div>
    </div>
  );
}
