import styles from "./NewsSection.module.scss";
import AppButton from "../AppButton/AppButton";
import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    image: "/Whats-New-First-Desktop.png",
    title: "דולור סיט אמט קונסקקטור לורם איפסום",
    description:
      "יצאלק םיצוחימ תילא גניסיפידא ררוטקסנוק טמא טיס רולוד םוספיא םרול",
    date: "22.08.20",
    link: "#",
    isMain: true,
  },
  {
    id: 2,
    image: "/Whats-New-Second-Desktop.png",
    title: "נוסטי קלובר בריקנה סטום לפריק",
    description:
      "יצאלק םיצוחימ תילא גניסיפידא ררוטקסנוק טמא טיס רולוד םוספיא םרול",
    date: "22.08.20",
    link: "#",
  },
  {
    id: 3,
    image: "/Whats-New-Third-Desktop.png",
    title: "נוסטי קלובר בריקנה סטום לפריק",
    description:
      "יצאלק םיצוחימ תילא גניסיפידא ררוטקסנוק טמא טיס רולוד םוספיא םרול",
    date: "22.08.20",
    link: "#",
  },
  {
    id: 4,
    image: "/Whats-New-Fourth-Desktop.png",
    title: "נוסטי קלובר בריקנה סטום לפריק",
    description:
      "יצאלק םיצוחימ תילא גניסיפידא ררוטקסנוק טמא טיס רולוד םוספיא םרול",
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
        <p className={styles.description}>
          קונסקקטור אדיפיסינג אלית מייחוצ׳ים קלאצ׳י לורם איפסום דולור סיט אמט
        </p>
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
              <p className={styles.mainDescription}>{mainNews.description}</p>
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
