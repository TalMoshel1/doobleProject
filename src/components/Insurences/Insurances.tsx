import H2Heading from "../MainHeading.tsx/h2Heading";
import styles from "./Insurances.module.scss";
import { IoIosArrowBack } from "react-icons/io";

type Branch = {
  id: number;
  title: string;
  image: string;
};

const branches: Branch[] = [
  { id: 1, title: "ענפי הצומח", image: "/src/assets/Plant-industries.png" },
  { id: 2, title: "ענפי החי", image: "/src/assets/Plant-industries.png" },
  { id: 3, title: "ענפים כלליים", image: "/src/assets/Plant-industries.png" },
];

export default function Insurances() {
  return (
    <section
      className={styles.insurancesContainer}
      aria-labelledby="insured-branches-heading"
    >
      <H2Heading text='ענפים מבוטחים' id='Insured industries'/>

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
              src={branch.image}
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
