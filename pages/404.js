import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <h1 className={utilStyles.headingX}>
        My kingdom for a horse! 404 error, this page has not been found
      </h1>
      <div className={utilStyles.lightText}>
        <p>
          🤠 Where shall we three meet again? Back on the{" "}
          <Link href="/">home page </Link>
          to try again?{" "}
        </p>
      </div>
    </Layout>
  );
}
