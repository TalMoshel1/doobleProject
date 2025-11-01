import { useState, useEffect, useRef } from "react";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import HeroSlide from "./HeroSlide";
import styles from "./HeroSlider.module.scss";

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description?:string;
  buttonText: string;
  link: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/src/assets/GreenField.jpg",
    title: 'קנט - קרן לביטוח נזקי טבע בחקלאות בע"מ',
    subtitle: "כי לטבע חוקים משלו",
    description: "הגן על העסק שלך עם ביטוח של קנט",
    buttonText: "הגן על העסק שלך עם ביטוח של קנט",
    link: "#",
  },
  {
    id: 2,
    image: "/src/assets/GreenField.jpg",
    title:
      "קנט גאה לקחת חלק בעידוד דור העתיד של המחקר החקלאי בישראל",
    buttonText: "לצפייה בכתבה",
    link: "#",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <section
      className={styles.heroSlider}
      aria-label="סליידר חדשות ועדכונים"
      role="region"
    >
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === current}
          ariaHidden={index !== current}
        />
      ))}

      <div className={styles.controlsContainer}>
        
              <button
          type="button"
          className={styles.pauseButton}
          aria-label={isPlaying ? "עצור מעבר אוטומטי" : "הפעל מעבר אוטומטי"}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FiPauseCircle className={styles.pauseIcon}  />
          ) : (
            <FiPlayCircle className={styles.pauseIcon} />
          )}
        </button>
        <div
          className={styles.dots}
          role="tablist"
          aria-label="ניווט בין שקופיות"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === current ? styles.active : ""
              }`}
              aria-label={`מעבר לשקופית ${index + 1}`}
              aria-pressed={index === current}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

  
      </div>
    </section>
  );
}
