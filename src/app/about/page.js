import Link from "next/link";
import styles from "./page.module.css";

export default function AboutPage() {
    return (
        <>
            <h1 className={styles.header}>
                <b>Public Agencies</b>
            </h1>
            <p className={styles.paragraph}>
                The TolkDirekt platform designed for public agencies is a strategic solution aimed at improving the efficiency and accessibility of interpreter services within the public sector. 
                By addressing the critical communication barriers that non-Swedish speakers face, the platform ensures that these individuals can access public services more effectively. 
                For more info, <Link href="/about/public-agencies" className={styles.linkButton}>click here</Link>.
            </p>

            <h1 className={styles.header}>
                <b>Interpreter Features</b>
            </h1>
            <p className={styles.paragraph}>
                The interpreter-focused segment of TolkDirekt provides a robust platform that caters specifically to the needs of professional interpreters. This site empowers interpreters by offering them the tools to manage their professional lives effectively.
                Interpreters can create comprehensive profiles, manage schedules, and communicate directly with clients, enhancing their professional opportunities and job satisfaction.
                For more info,<Link href="/about/interpreter" className={styles.linkButton}>click here</Link>.
            </p>

            <h1 className={styles.header}>
                <b>Non-Swedish Natives</b>
            </h1>
            <p className={styles.paragraph}>
                Tolk Directs section for non-Swedish natives is critically designed to cater to individuals who face language barriers, ensuring they can seamlessly access necessary public services. This part of the platform prioritizes user accessibility, offering an intuitive interface that simplifies the process of finding and booking interpreters.
                The platform features a rapid booking system where users can specify their language needs and immediately find available interpreters who match their criteria. This efficiency is crucial for non-Swedish speakers who require prompt services in potentially urgent scenarios.
                For more info,<Link href="/about/non-swedish-natives" className={styles.linkButton}>click here</Link>.
            </p>
        </>
    );
}
