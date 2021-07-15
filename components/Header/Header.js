import Layout from "../layout";
import Image from "next/image";
import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <Layout>
      <div className={style.flexBar}>
        <div className={style.icon}>
          <Link href="/Bio">
            <a>
              <img
                className={style.iconImg}
                src="/YS_Final.svg"
                width={100}
                height={100}
              ></img>
            </a>
          </Link>
        </div>
        <div className={style.headerElem}>
          <Link href="/Projects">
            <a>PROJECTS</a>
          </Link>
        </div>
        <div className={style.headerElem}>
          <Link href="/Blog">
            <a>BLOG</a>
          </Link>
        </div>
      </div>
      <div className={style.links}></div>
    </Layout>
  );
}
