import Layout from "../components/layout";
import Header from "../components/Header/Header";
import style from "../styles/Bio.module.css";

export default function Bio() {
  return (
    <Layout>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1
            className={style.title}
            onMouseOver={(e) => (e.target.innerHTML = "ALLEN SHAO")}
            onMouseLeave={(e) => (e.target.innerHTML = "YUHENG SHAO")}
          >
            YUHENG SHAO
          </h1>
        </div>
      </div>
      <div className={style.article}>
        <p>Some description of myself...</p>
      </div>
    </Layout>
  );
}
