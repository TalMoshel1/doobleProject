import React from "react";
import styles from "./ImageSvg.module.scss";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;     
  width?: string;
  height?: string;    
  isTabIndex?: boolean;     
  alt?: string;
  color?: keyof typeof styles;

};

const ImageSvg: React.FC<ImageProps> = ({
  src,
  width = "auto",
  height = "auto",
  isTabIndex = true,
  alt,
  color = "primary",
}) => {
  const colorClass = styles[color] || "";

  return (
    <img
      src={src}
      tabIndex={isTabIndex ? 0 : -1}
      alt={alt ?? ""}
      loading="lazy"    
      className={`${styles.img} ${colorClass}`}
      style={{
        width,
        height,
      }}
    />
  );
};

export default ImageSvg;
