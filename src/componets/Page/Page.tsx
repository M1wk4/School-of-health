import { JSX, ReactNode } from "react";

import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import classes from "./Page.module.scss";

type PageProps = {
  title: string | undefined;
  children: ReactNode | undefined;
};

const Page = (props: PageProps) => {
  const { title, children } = props;

  return (
    <>
      <Layout direction="column" className={classes.title}>
        <Text view={"primary"} size="2xl" weight="bold">
          {title}
        </Text>
      </Layout>
      <Layout direction="column" className={classes.content}>
        {children}
      </Layout>
    </>
  );
};

export default Page;
