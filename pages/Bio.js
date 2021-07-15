import Layout from "../components/layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "../styles/Bio.module.css";

export default function Bio() {
  return (
    <Layout>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1
            className={style.title}
            onClick={(e) =>
              e.target.innerHTML === "YUHENG SHAO"
                ? (e.target.innerHTML = "ALLEN SHAO")
                : (e.target.innerHTML = "YUHENG SHAO")
            }
          >
            YUHENG SHAO
          </h1>
        </div>
      </div>
      <div className={style.article}>
        <p>
          I got to learn how to love without you
          <br />
          I got to carry my cross without you
          <br />
          Stuck in the middle and I'm just about to
          <br />
          Figure it out without you
          <br />
          And I'm done sitting home without you
          <br />
          Fuck, I'm going up without you
          <br />
          I'm going to tear this city down without you
          <br />
          I'm going Bonnie and Clyde without you
          <br />
        </p>
      </div>
      <Footer />
    </Layout>
  );
}
