import { CSSProperties, JSX, ReactNode } from "react";

import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import classes from "./Image.module.scss";

type ImageProps = {
  key: string | number;
  src: string;
  alt: string;
  style?: CSSProperties | undefined;
  float?: 'left' | 'right' | undefined;
};

const Image = (props: ImageProps) => {
  const { key, src, style, alt, float } = props;

  return (
    <div style={float ? {float: float} : undefined} className={classes.container}>
      <img key={key} src={src} alt={alt} style={style} />
    </div>
  );
};

export default Image;
