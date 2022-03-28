import Link from "next/link";
import styles from "../styles/Home.module.css";

// Footer component for the Home page
export default function Footer() {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <Link
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link
        href="https://www.frontendmentor.io/profile/marckesin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ronaldo
      </Link>
      .
    </footer>
  );
}
