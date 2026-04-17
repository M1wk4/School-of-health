import { Card } from "@consta/uikit/Card";
import { Layout } from "@consta/uikit/Layout";
import { Grid, GridItem } from "@consta/uikit/Grid";

import classes from "./PreviewCard.module.scss";

type PreviewCardProps = {
  previewList?: string[];
  text?: string;
};

const PreviewCard = (props: PreviewCardProps) => {
  const { previewList, text } = props;

  return (
    <Card verticalSpace="xl" horizontalSpace="2xl" shadow={false}>
      <Grid
        cols={1}
        breakpoints={{
          768: {
            cols: previewList?.length === 1 ? 1 : 2,
          },
        }}
      >
        {previewList?.map((image) => (
          <GridItem>
            <Layout
              direction="row"
              className={classes.content}
              style={previewList?.length === 1 ? { justifyContent: "center", alignItems: "center" } : {}}
            >
              <img
                className={
                  previewList?.length === 1
                    ? classes.previewImageSingle
                    : classes.previewImage
                }
                src={image}
                alt="preview"
              />
            </Layout>
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
};

export default PreviewCard;
