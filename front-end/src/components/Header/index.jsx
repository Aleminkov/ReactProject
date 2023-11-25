import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Chat</Link>
        <Link to="/">Review</Link>
        <Link to="/">Registration</Link>
      </nav>
    </div>
  );
};

export default Header;
