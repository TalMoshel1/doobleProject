import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./AppButton.module.scss";

interface AppButtonProps {
  label: string;
  to: string;
  ariaLabel?: string;
  color?: "primary" | "secondary"; 
}

export default function AppButton({
  label,
  to,
  ariaLabel,
  color = "secondary",
}: AppButtonProps) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel ?? label}
      className={`${styles.button} ${styles[color]}`}
    >
      <span>{label}</span>
      <IoIosArrowBack
        aria-hidden="true"
        focusable="false"
        className={styles.icon}
      />
    </Link>
  );
}
