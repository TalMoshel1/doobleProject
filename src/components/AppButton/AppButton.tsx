import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./AppButton.module.scss";

interface AppButtonProps {
  label: string;
  to: string;
  ariaLabel?: string;
}

export default function AppButton({ label, to, ariaLabel }: AppButtonProps) {
  return (
    // <Link to={to} className={styles.button} aria-label={ariaLabel ?? label}>
    //   <IoIosArrowBack aria-hidden="true" focusable="false" className={styles.icon} />
    //   <span>{label}</span>
    // </Link>
    <>
    </>
  );
}
