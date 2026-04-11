import React, { useCallback, useEffect, useState } from "react";

import { Card } from "@consta/uikit/Card";
import { Attachment } from "@consta/uikit/Attachment";
import { IconDownload } from "@consta/icons/IconDownload";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Grid, GridItem } from "@consta/uikit/Grid";

import { useBreakpoints } from "@consta/uikit/useBreakpoints";

import { File } from "@/types/file.types";

import classes from "./DownloadCard.module.scss";

type DownloadCardProps = {
  fileList?: File[];
};

const handleDownload = (url: string, name: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const DownloadCard = (props: DownloadCardProps) => {
  const { fileList } = props;

  return (
    <Card verticalSpace="xl" horizontalSpace="2xl" border={true}>
      <Text view="primary" weight="bold" className={classes.text}>
        Файлы для скачивания:{" "}
      </Text>
      <Grid
        cols={1}
        breakpoints={{
          768: {
            cols: 2,
          },
        }}
      >
        {fileList?.map((file) => (
          <GridItem>
            <Layout direction="row" className={classes.content}>
              <Attachment
                size="m"
                fileName={file.fileName}
                fileExtension={file.fileExtension}
                withPictogram={true}
                fileDescription={`${file.fileSize} ${file.fileDiscription}`}
              />
              <Button
                size="m"
                onlyIcon
                className={classes.button}
                iconLeft={IconDownload}
                view="ghost"
                label="Скачать"
                onClick={() => handleDownload(file.filePath, file.fileName)}
                download
              />
            </Layout>
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
};

export default DownloadCard;
