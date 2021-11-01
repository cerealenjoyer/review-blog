import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <h1 className={utilStyles.headingX}>
        Oh no! 404 error, this page has not been found
      </h1>
      <div className={utilStyles.lightText}>
        <p>
          🤠 Looks like you f*cked up big time hombre. Why don't you{" "}
          <Link href="/">
            <a>mosey on back</a>
          </Link>
          to the home page and try again?{" "}
        </p>
      </div>
    </Layout>
  );
}
