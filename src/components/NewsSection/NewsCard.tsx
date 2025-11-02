import styles from "./NewsSection.module.scss";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

export default function NewsCard({ image, title, date, link }: NewsCardProps) {
  return (
    <article className={styles.newsCard}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <p className={styles.date}>{date}</p>
        <h4 className={styles.cardTitle}>{title}</h4>
        <a href={link} className={styles.readMore}>
          קרא עוד
        </a>
      </div>
    </article>
  );
}
