import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { format } from "date-fns";

const ResumeQuery = gql`
  # Write your query or mutation here
  query ResumeQuery {
    bio {
      name
      github
      linkedin
      name
      tagline
      website
      email
      objective
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
        <div className={styles.left}>
          <h2>Contact</h2>
          <p>
            <strong>Email</strong>{" "}
            <a href={`mailto:${bio.email}`}>{bio.email}</a>
          </p>
          <p>
            <strong>Web</strong>{" "}
            <a href={bio.website}>{new URL(bio.website).host}</a>
          </p>
          <p>
            <strong>Github</strong>{" "}
            <a href={bio.github}>{bio.github.replace("https://", "")}</a>
          </p>
          <p>
            <strong>Linkedin</strong>{" "}
            <a href={bio.linkedin}>{bio.linkedin.replace("https://", "")}</a>
          </p>
        </div>
        <div className={styles.right}>
          <h2>Objective</h2>
          <p>{bio.objective}</p>
          <h2>Experience</h2>
          {positions.map((position) => {
            const leghth = [
              position.years > 0 ? `${position.years} years ` : null,
              position.months > 0 ? `${position.months} months` : null,
            ];
            return (
              <div key={position.id}>
                <h3>{position.title}</h3>
                <p className={styles.light}>
                  {position.company} | {position.location}
                </p>
                <p>
                  {format(new Date(position.startDate), "MMM yyyy")} -
                  {position.endDate
                    ? format(new Date(position.endDate), " MMM yyyy")
                    : " Present"}{" "}
                  {leghth}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
