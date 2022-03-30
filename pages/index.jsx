import Head from "next/head";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Interactive pricing component</title>
        <meta
          name="description"
          content="This is a solution to the: Interactive pricing component challenge on Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.pricing}>
          <h1 className={styles.heading}>Simple, traffic-based pricing</h1>
          <p className={styles.description}>
            Sign-up for our 30-day trial. No credit card required.
          </p>
          <Pricing />
        </div>
      </main>

      <Footer />
    </div>
  );
}
