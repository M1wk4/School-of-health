import { Layout } from "@consta/uikit/Layout";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <Layout direction="column" className={classes.container}>
      <Layout className={classes.header}>
        <Header />
      </Layout>
      <Layout direction="column" className={classes.main}>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
