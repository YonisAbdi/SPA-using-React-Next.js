import styles from './Navigation.module.css';
import Link from 'next/link';

const LINKS = [
  { href: '/', text: 'Home', description: 'We Home' },
  { href: '/about', text: 'About', description: 'About My Project' },
  { href: '/contactinfo', text: 'Contact', description: 'Contact Details' },
  { href: '/booking', text: 'Booking', description: 'Book a Service' },
  { href: '/login', text: 'Login', description: 'Login to Your Account' },
  { href: '/reviews', text: 'Reviews', description: 'Read Reviews' },
];

export default function Navigation() {
  return (
    <div className={styles.grid}>
      {LINKS.map((x) => (
        <NavigationLink key={x.href} {...x} />
      ))}
    </div>
  );
}

function NavigationLink({ text, href, description }) {
  return (
    <Link href={href} className={styles.card}>
      <h2>
        {text} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </Link>
  );
}
