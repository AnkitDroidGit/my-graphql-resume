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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hi
    </>
  );
}
