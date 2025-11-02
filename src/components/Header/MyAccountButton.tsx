import styles from "./MyAccountButton.module.scss";
import { useI18n } from "../../context/I18nContext";
import MyAccount from "/My-Account.svg";
import ImageSvg from "../ui/ImageSvg/ImageSvg";

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
    <button className={styles.myAccountButton} onClick={onClick} type="button">
      <span>{resolvedLabel}</span>
      <ImageSvg src={MyAccount} alt="" aria-hidden="true" isTabIndex={false} />
    </button>
  );
}
