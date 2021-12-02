import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}
function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX}>
          <Link href={projectData.link}>
            <a>{projectData.title}</a>
          </Link>
        </h1>
        <Image
          priority
          src={`/images/${projectData.id}.png`}
          // className={utilStyles.borderCircle}
          height={500}
          width={800}
        />
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />{" "}
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        <Link href={projectData.repo}>
          <a>Github repo</a>
        </Link>
      </article>
    </Layout>
  );
}
export default Project;
