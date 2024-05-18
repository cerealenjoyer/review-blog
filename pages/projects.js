import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";

function Projects({ allProjectsData }) {
  console.log(allProjectsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {" "}
        <p>Here are the things I've been working on recently.</p>
        <p>
          {" "}
          All projects were made in collaboration with other students at
          Founders and Coders.
        </p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.flexRow}`}
      >
        <h2 className={utilStyles.headingLg}>
          <Link href={`..`}>Home</Link>
        </h2>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <h2 className={utilStyles.headingLg}>
          <Link href={`/reviews`}>Reviews</Link>
        </h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={`${utilStyles.list} ${utilStyles.grid}`}>
          {allProjectsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Image
                priority
                src={`/images/${id}.png`}
                // className={utilStyles.borderCircle}
                height={500}
                width={800}
              />
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
export default Projects;
