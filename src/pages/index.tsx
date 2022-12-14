import { GetServerSideProps } from "next";
import Head from "next/head";

import { isMobile } from "../utils/IsMobile";

import AiProject from "../components/Projects/AiProject";
import ProjectLayout from "../components/Layouts/ProjectLayout";

const Home = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectLayout isMobile={isMobile}>
        <AiProject isMobile={isMobile} />
      </ProjectLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  console.log(context.req.headers.host.split(".")[0]);

  return {
    props: {
      isMobile: isMobile(context.req),
    },
  };
};

export default Home;