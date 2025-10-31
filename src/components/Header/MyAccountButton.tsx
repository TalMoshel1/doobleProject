import styles from "./MyAccountButton.module.scss";
import { useI18n } from "../../context/I18nContext";

type MyAccountButtonProps = {
  onClick?: () => void;
  label?: string;
};

export default function MyAccountButton({
  onClick,
  label,
}: MyAccountButtonProps) {
  const { t } = useI18n();

  const resolvedLabel = label ?? t("nav.myAccount", "My Account");

  return (
    <button
      className={styles.myAccountButton}
      onClick={onClick}
       role="button"
      aria-label="my account"
    >
      {resolvedLabel}
    </button>
  );
}
