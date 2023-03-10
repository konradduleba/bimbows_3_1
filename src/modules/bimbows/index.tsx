import { bimbowsLogo } from "../../assets";

import styles from "./bimbows.module.scss";

const Bimbows = () => {
  return <img src={bimbowsLogo} alt="Bimbows 3.1" className={styles.logo} />;
};

export default Bimbows;
