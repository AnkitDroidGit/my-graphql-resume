import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const ResumeQuery = gql`
  # Write your query or mutation here
  query ResumeQuery {
    bio {
      name
      github
      linkedin
      name
      tagline
    }
    positions {
      id
      location
      title
      startDate
      endDate
      company
      years
      months
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);
  if (error) {
    return <span>Error... oops!</span>;
  }
  if (loading) {
    return (
      <header className={styles.header}>
        <h1>Ankit Kumar</h1>
        <h2>Fullsatck Mobile Developer</h2>
        <h2>loading...</h2>
      </header>
    );
  }
  const { bio, positions } = data;
  return (
    <>
      <Head>
        <title>Ankit Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>{bio.name}</h1>
        <h2>{bio.tagline}</h2>
      </header>
      <div className={styles.split}>
        <div className={styles.left}>Left</div>
        <div className={styles.right}>Right</div>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
