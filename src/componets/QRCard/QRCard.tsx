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

import classes from "./QRCard.module.scss";

const QRCard = () => {
  const [show, setShow] = useState(true);

  return (
    show && (
      <Card
        verticalSpace="l"
        horizontalSpace="l"
        border={true}
        className={classes.content}
      >
        <Layout direction="column">
          <Text view="primary" weight="bold" size="xl" className={classes.text}>
            Открой на мобильном устройстве
          </Text>
          <Text view="primary" className={classes.textMain}>
            Отсканируй QR-код и продолжи обучение в удобном формате
          </Text>

          <Button
            className={classes.button}
            size="m"
            view="ghost"
            label="Закрыть"
            onClick={() => setShow(!show)}
          />
        </Layout>

        <Card className={classes.qrCode} justify="center">
          <img
            style={{ width: "150px", height: "150px" }}
            src="svg/qr.svg"
            alt="QR Code"
          />
          <Text view="primary" align="center" size="xs">
            Сканируй камерой телефона
          </Text>
        </Card>
      </Card>
    )
  );
};

export default QRCard;
