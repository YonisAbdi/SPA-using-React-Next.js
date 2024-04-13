import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img
          className={styles.logo}
          src="/tolk-direct-high-resolution-logo-transparent.png"
          alt="TolkDirekt Logo"
        />
      </div>
      <div className={styles.description}>
        <p>
          Welcome to Tolk Direct, your trusted gateway to overcoming language barriers! Our dynamic platform seamlessly connects non-Swedish speakers with professional interpreters and public agencies, ensuring easy access to vital services. Designed with simplicity and efficiency in mind, TolkDirekt enhances community inclusivity by empowering users to communicate effectively, regardless of linguistic background. Join us in fostering a connected, supportive environment where everyone has the opportunity to thrive.
        </p>
      </div>
    </div>
  );
}
