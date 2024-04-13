import Link from 'next/link';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Me</h1>
      <div className={styles.section}>
        <h2 className={styles.subHeader}>Platforms</h2>
        <div className={styles.infoBox}>
          <p><strong>Email:</strong> <a href="mailto:yonis_04@hotmail.com">yonis_04@hotmail.com</a></p>
          <p><strong>Phone:</strong> 0739352678</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yonis-abdi-645baa119/" target="_blank" rel="noopener noreferrer">View LinkedIn Profile</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/YonisAbdi" target="_blank" rel="noopener noreferrer">View GitHub Portfolio</a></p>
        </div>
        <p className={styles.descriptionText}>
          Whether you are seeking collaboration, have a query, or need my services, the above platforms are the best ways to reach out to me. Each platform is regularly monitored, ensuring that your messages receive prompt attention. For direct inquiries, emailing or calling me is highly recommended. Connect with me on LinkedIn and GitHub to see more of my professional activities and contributions.
        </p>
      </div>
    </div>
  );
}
