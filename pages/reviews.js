import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

function Reviews({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {" "}
        <p>
          In my spare time I write theatre reviews, I've put them here if you're
          interested.
        </p>
        <p> All reviews have been written by myself unless stated otherwise.</p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.flexRow}`}
      >
        <h2 className={utilStyles.headingLg}>
          <Link href={`/..`}>Portfolio</Link>
        </h2>
        <h2 className={utilStyles.headingLg}>
          <Link href={`/projects`}>Projects</Link>
        </h2>
        <h2 className={utilStyles.headingLg}>Reviews</h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, theatre }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
                <span>, {theatre}</span>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default Reviews;
