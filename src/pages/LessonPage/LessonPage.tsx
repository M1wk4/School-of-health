import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Modal } from "@consta/uikit/Modal";

import Page from "@/componets/Page/Page";
import Carousel from "@/componets/Carousel/Carusel";
import DownloadCard from "@/componets/DownloadCard/DownloadCard";
import PreviewCard from "@/componets/PreviewCard/PreviewCard";

import { Lesson, LessonContentBlock } from "@/types/lesson.types";

import { lessonsMap } from "@/constants/lessonsMap";

import classes from "./LessonPage.module.scss";

const LessonPage = () => {
  const { id } = useParams();

  const [lessonInfo, setLessonInfo] = useState<Lesson | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLessonInfo(lessonsMap[id]);
  }, [id]);

  const getContent = (block: LessonContentBlock): React.ReactNode => {
    switch (block.type) {
      case "subtitle":
        return (
          <>
            <div className={classes.clear} />
            <Text view={"primary"} className={classes.subtitle}>
              {" "}
              {block.text}{" "}
            </Text>
          </>
        );

      case "paragraph":
        return (
          <>
            <Text view={"primary"} className={classes.paragraph}>
              {block.text}{" "}
            </Text>
            {block?.subText &&
              block?.subText?.map((item) => {
                return <> {getContent(item)} </>;
              })}
          </>
        );

      case "formula":
        return (
          <Text view={"primary"} className={classes.formula}>
            {block.text}{" "}
          </Text>
        );

      case "ol":
        return (
          <ol className={classes.list}>
            {block.content.map((item) => (
              <li>{getContent(item)}</li>
            ))}
          </ol>
        );

      case "ul":
        return (
          <ul className={classes.list}>
            {block.content.map((item, index) => (
              <li style={{ color: block?.colors?.[index] }}>
                {getContent(item)}
              </li>
            ))}
          </ul>
        );

      case "presentation":
        return (
          <Carousel
            lessonInfo={lessonInfo}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        );

      case "preview":
        return <PreviewCard previewList={lessonInfo?.previewList} />;

      case "files":
        return <DownloadCard fileList={lessonInfo?.fileList} />;

      default:
        return null;
    }
  };

  return (
    <Page title={lessonInfo?.label}>
      <Layout direction="column" className={classes.container}>
        <Text className={classes.text} view={"primary"} size="xl">
          {lessonInfo?.lessonName}
        </Text>

        {lessonInfo?.content?.map((block, index) => {
          return getContent(block);
        })}
      </Layout>
      <>
        <Modal
          className={classes.modal}
          isOpen={isModalOpen}
          hasOverlay
          onClickOutside={() => setIsModalOpen(false)}
          onEsc={() => setIsModalOpen(false)}
        >
          <Carousel
            lessonInfo={lessonInfo}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </Modal>
      </>
    </Page>
  );
};

export default LessonPage;
