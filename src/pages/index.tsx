import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

import { isMobile } from "../utils/IsMobile";

import AiProject from "../components/Projects/AiProject";
import ProjectLayout from "../components/Layouts/ProjectLayout";
import ZeroProject from "../components/Projects/ZeroProject";

const Home = ({ subdomain, isMobile }: { subdomain: string; isMobile: boolean }) => {
  const [faviconFileName, setFaviconFileName] = useState("favicon");

  useEffect(() => {
    getFaviconName();
  }, []);

  const getFaviconName = () => {
    if (subdomain == "project-site-ai") {
      return setFaviconFileName("favicon-ai");
    }

    if (subdomain == "project-site-zero") {
      return setFaviconFileName("favicon-zero");
    }

    return setFaviconFileName("favicon");
  };

  const getContent = () => {
    if (subdomain == "project-site-ai") {
      return <AiProject isMobile={isMobile} />;
    }

    if (subdomain == "project-site-zero") {
      return <ZeroProject isMobile={isMobile} />;
    }

    return <AiProject isMobile={isMobile} />;
  };

  return (
    <>
      <Head>
        <link rel="icon" href={`/${faviconFileName}.ico`} />
      </Head>
      <ProjectLayout isMobile={isMobile}>{getContent()}</ProjectLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  console.log(context.req.headers.host.split(".")[0]);

  return {
    props: {
      subdomain: context.req.headers.host.split(".")[0],
      isMobile: isMobile(context.req),
    },
  };
};

export default Home;
