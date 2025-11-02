import styles from "./NewsSection.module.scss";
import AppButton from "../AppButton/AppButton";
import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    image: "/src/assets/Whats-New-First-Desktop.png",
    title: "לוחם איספוס דולור סיט אמט קונסקקטור",
    date: "22.08.20",
    link: "#",
    isMain: true,
  },
  {
    id: 2,
    image: "/src/assets/Whats-New-Second-Desktop.png",
    title: "נטעי קלובר בירקנה סיטוס לפריק",
    date: "22.08.20",
    link: "#",
  },
  {
    id: 3,
    image: "/src/assets/Whats-New-Third-Desktop.png",
    title: "גול מופער סובול לוחם עביק יהל",
    date: "22.08.20",
    link: "#",
  },
  {
    id: 4,
    image: "/src/assets/Whats-New-Fourth-Desktop.png",
    title: "קודינימוס קורום בליקרה גונסיטי",
    date: "22.08.20",
    link: "#",
  },
];

export default function NewsSection() {
  const mainNews = newsData.find((n) => n.isMain);
  const sideNews = newsData.filter((n) => !n.isMain);

  return (
    <section className={styles.newsSection} aria-label="מה חדש בקנט?">
      <div className={styles.header}>
        <h2 className={styles.title}>מה חדש בקנט?</h2>
        <AppButton label="לכל החדשות" to="/" color="secondary" />
      </div>

      <div className={styles.content}>
        <div className={styles.sideNews}>
          {sideNews.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        {mainNews && (
          <div className={styles.mainNews}>
            <img
              src={mainNews.image}
              alt={mainNews.title}
              className={styles.mainImage}
            />
            <div className={styles.overlay}>
              <p className={styles.date}>{mainNews.date}</p>
              <h3 className={styles.mainTitle}>{mainNews.title}</h3>
              <a href={mainNews.link} className={styles.readMore}>
                קרא עוד
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
