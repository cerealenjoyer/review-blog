import Layout from "../../components/layout";
import { getPortfolioIds, getPortfolioData } from "../../lib/portfolio";
import Head from "next/head";
import Date from "../../components/date";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.id);
  return {
    props: {
      portfolioData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getPortfolioIds();
  return {
    paths,
    fallback: false,
  };
}
function Portfolio({ portfolioData }) {
  return (
    <Layout tab={"portfolio"}>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX}>{portfolioData.title}</h1>
        <Image
          priority
          src={`/images/${portfolioData.id}.png`}
          // className={utilStyles.borderCircle}
          height={340}
          width={612}
        />
        <div className={utilStyles.lightText}>
          <Date dateString={portfolioData.dateStart} /> <span> to </span>
          {portfolioData.present ? (
            "present"
          ) : (
            <Date dateString={portfolioData.dateEnd} />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} />
      </article>
    </Layout>
  );
}
export default Portfolio;
