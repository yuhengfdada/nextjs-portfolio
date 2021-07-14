import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800"
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
