import React from "react";
import styles from "./Image.module.scss";

type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";

type ImageSize = "news-main" | "news-secondary" | "gallery" | "branches" | "hero";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: ImageSize;
  objectFit?: ObjectFit;
  alt: string;
  /** האם להשתמש ברדיוס ברירת מחדל (true) או לא (false) */
  rounded?: boolean;
};

const Image: React.FC<ImageProps> = ({
  size,
  objectFit,
  alt,
  rounded = true,
  className,
  style,
  ...rest
}) => {
  const classes = [styles.image];
  if (size) classes.push(`size-${size}`);

  // allow setting CSS custom properties via style object
  const cssVars: any = {};

  if (objectFit) cssVars["--object-fit"] = objectFit;
  cssVars["--radius"] = rounded ? "var(--radius-whats-new)" : "var(--radius-none)";

  return (
    <img
      {...rest}
      alt={alt}
      className={classes.join(" ")}
      style={{ ...cssVars, ...style }}
    />
  );
};

export default Image;
