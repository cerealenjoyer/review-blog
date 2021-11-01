import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {" "}
        <p>
          Hi, I'm Sasha! A goth-adjacent web dev from South London. I like
          writing, #aesthetic stuff and the theatre!
        </p>
        <p>
          This portfolio page was built by following this extremely thorough{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>. All reviews
          have been written by myself unless stated otherwise, and were first
          published in the{" "}
          <a href="https://www.parikiaki.com/">Parikiaki newspaper </a>. With
          thanks to Panikos Efthimiou, a remarkable editor and an incomparable
          wit.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default Home;
