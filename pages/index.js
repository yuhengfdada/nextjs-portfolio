import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../../nextjs-portfolio/components/layout";
export default function Home() {
  return (
    <Layout>
      <div className={styles.logoDiv}>
        <Image src="/../public/YS_Final.svg" width={356} height={421}></Image>
      </div>
      <div>
        <ul className={styles.links}>
          <li className={styles.linkElem}>
            <Link href="/Bio">
              <a>
                <strong>BIO</strong>
              </a>
            </Link>
          </li>
          <li className={styles.linkElem}>
            <Link href="">
              <a>
                <strong>PROJECTS</strong>
              </a>
            </Link>
          </li>
          <li className={styles.linkElem}>
            <Link href="">
              <a>
                <strong>BLOG</strong>
              </a>
            </Link>
          </li>
          <li className={styles.linkElem}>
            <Link href="">
              <a>
                <strong>CONTACT</strong>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
