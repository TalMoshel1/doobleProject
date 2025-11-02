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

  // 🧩 הגדרת רוחב/גובה inline (CSS custom properties)
  // use `any` for CSS custom properties to avoid TS errors on indexing
  const wrapperStyle: any = {};
  if (width) wrapperStyle["--img-width"] = width;
  if (height) wrapperStyle["--img-height"] = height;

  // 🧩 שכפול SVG כדי לוודא שהמחלקות שלנו בפנים
  // clone with relaxed typing to attach aria and event handlers
  const extraProps: any = {
    className: `${children.props.className ?? ""}`.trim(),
    role: ariaLabel ? "img" : "presentation",
    'aria-label': ariaLabel,
    onClick,
  };

  const clonedSvg = cloneElement(children as any, extraProps);

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
