import styles from './h2Heading.module.scss';

interface H2HeadingProps {
    text: string;
    id?: string;
}

const H2Heading: React.FC<H2HeadingProps> = ({ text, id }) => {
    return (
        <h2 id={id} className={styles.mainHeading}>
            {text}
        </h2>
    );
};

export default H2Heading;