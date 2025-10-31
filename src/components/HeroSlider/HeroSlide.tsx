import styles from "./HeroSlider.module.scss";

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  link: string;
};

type HeroSlideProps = {
  slide: Slide;
  isActive: boolean;
  ariaHidden: boolean;
};

export default function HeroSlide({
  slide,
  isActive,
  ariaHidden,
}: HeroSlideProps) {
  console.log("slide: ", slide);
  return (
    <article
      className={`${styles.slide} ${isActive ? styles.active : ""}`}
      aria-hidden={ariaHidden}
    >
      <img src={slide.image} alt={slide.title} className={styles.image} />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{slide.title}</h1>
          {slide.subtitle && (
            <p className={styles.subtitle}>{slide.subtitle}</p>
          )}
          {slide.description && (
            <p className={styles.description}>{slide.description}</p>
          )}
          <a href={slide.link} className={styles.button}>
            {slide.buttonText}
          </a>
        </div>
      </div>
    </article>
  );
}
