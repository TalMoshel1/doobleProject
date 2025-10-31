import styles from "./Insurances.module.scss";
import { IoIosArrowBack } from "react-icons/io";

type Branch = {
  id: number;
  title: string;
  image: string;
};

const branches: Branch[] = [
  { id: 1, title: "ענפי הצומח", image: "/images/orange.jpg" },
  { id: 2, title: "ענפי החי", image: "/images/cow.jpg" },
  { id: 3, title: "ענפים כלליים", image: "/images/greenhouse.jpg" },
];

/* need to make the language rtl / ltr here below  and

also about the presentational !!!!


*/
export default function Insurances() {
  return (
    <section
      className={styles.container}
      aria-labelledby="insured-branches-heading"
    >
      <h2 id="insured-branches-heading" className={styles.mainHeading}>
        ענפים מבוטחים
      </h2>

      <ul className={styles.branchesList}>
        {branches.map((branch) => (
          <li key={branch.id} className={styles.branchItem} tabIndex={0}>
            <div className={styles.branchHeaderContainer}>
              <div className={styles.branchHeader}>
                <div className={styles.branchNumber} aria-hidden="true">
                  {String(branch.id).padStart(2, "0")}
                </div>
                <div className={styles.branchAndTitleRow}>
                  <h3 className={styles.branchTitle}>{branch.title}</h3>
                  <IoIosArrowBack
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className={styles.forwardIcon}
                  />
                </div>
              </div>
            </div>

            <img
              // src={branch.image}
              src={"/GreenField.jpg"}
              alt={`תמונה מייצגת עבור ${branch.title}`}
              className={styles.branchImage}
              width="100%"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
