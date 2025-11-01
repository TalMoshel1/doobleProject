import React, { isValidElement, cloneElement } from "react";
import styles from "./SvgIcon.module.scss";

type ColorVariant =
  | "theme"
  | "primary"
  | "primary-darker"
  | "primary-lighter"
  | "primary-more-lighter"
  | "secondary"
  | "secondary-darker";

type SvgIconProps = {
  /** קובץ SVG או אלמנט SVG */
  children: React.ReactElement<SVGSVGElement>;
  /** תיאור נגיש */
  ariaLabel?: string;
  /** צבע נבחר */
  color?: ColorVariant;
  /** גודל — חובה עם יחידות (rem/vw/svh וכו') */
  width?: string;
  height?: string;
  /** מחלקות נוספות */
  className?: string;
  /** outline debug */
  debug?: boolean;
  /** לחיצה */
  onClick?: (e: React.SyntheticEvent) => void;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  children,
  ariaLabel,
  color = "primary",
  width,
  height,
  className,
  debug = false,
  onClick,
}) => {
  if (!isValidElement(children) || children.type !== "svg") {
    console.warn(
      "SvgIcon expects a single <svg> element as its child (not an <img> or component)."
    );
    return null;
  }

  const colorClass = (styles as any)[color] || "";
  const mergedClass = `${styles.img} ${colorClass} ${
    debug ? styles.debug : ""
  } ${className ?? ""}`.trim();

  // 🧩 הגדרת רוחב/גובה inline
  const wrapperStyle: React.CSSProperties = {};
  if (width) wrapperStyle.setProperty("--img-width", width);
  if (height) wrapperStyle.setProperty("--img-height", height);

  // 🧩 שכפול SVG כדי לוודא שהמחלקות שלנו בפנים
  const clonedSvg = cloneElement(children, {
    className: `${children.props.className ?? ""}`.trim(),
    role: ariaLabel ? "img" : "presentation",
    "aria-label": ariaLabel,
    onClick,
  });

  return (
    <span
      className={mergedClass}
      style={wrapperStyle}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {clonedSvg}
    </span>
  );
};

export default SvgIcon;
