import styles from './LanguageButton.module.scss';

export default function LanguageButton() {
return (
    <button className={styles.languageButton} aria-label='switch language'>
        English
    </button>
)

}