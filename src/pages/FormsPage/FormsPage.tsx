import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import Header from "@/componets/Header/Header";
import Page from "@/componets/Page/Page";

import classes from "./FormsPage.module.scss";

const FormsPage = () => {
  return (
    <Page title="Анкеты для оценки и обратной связи">
      <>
        <Text view="primary" size="m">
          Тут анкета 
        </Text>
        <Text view="primary" size="m">
          И тут анкета
        </Text>
        <Text view="primary" size="m">
          Мб и тут анкета
        </Text>
        <Text view="primary" size="m">
          Мб будут как то обыграть?
        </Text>
      </>
    </Page>
  );
};

export default FormsPage;
