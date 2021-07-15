import style from "./Footer.module.css";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <Link href="/">
          <a className={style.link}>HOME</a>
        </Link>
        <Link href="/Contact">
          <a className={style.link}>CONTACT</a>
        </Link>
        <div className={style.icons}>
          <a href="https://www.github.com/yuhengfdada" target="_blank">
            <AiFillGithub>size="3rem"</AiFillGithub>
          </a>
        </div>
      </div>
    </>
  );
}
