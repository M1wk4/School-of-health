import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { Badge } from "@consta/uikit/Badge";
import { IconExpand } from "@consta/icons/IconExpand";
import { IconCollapse } from "@consta/icons/IconCollapse";
import { Button } from "@consta/uikit/Button";

import Image from "../Image/Image";

import { Lesson } from "@/types/lesson.types";

import classes from "./Carousel.module.scss";

type CaruselProps = {
  lessonInfo: Lesson | undefined;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
};

const Carousel = (props: CaruselProps) => {
  const { lessonInfo, setIsModalOpen, isModalOpen } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const updateButtons = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCurrentSlide(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons(emblaApi);
    onSelect(emblaApi);

    const handleSelect = () => {
      updateButtons(emblaApi);
      onSelect(emblaApi);
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, updateButtons, onSelect, lessonInfo]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [lessonInfo]);

  return (
    <div className={classes.container}>
      <div className={classes.embla} ref={emblaRef}>
        <div className={classes.emblaContainer}>
          {lessonInfo?.lessonFiles?.map((slide: any, index: number) => (
            <div className={classes.emblaSlide} key={slide}>
              <Image
                key={index}
                src={`${lessonInfo.lessonFolder}/${slide}`}
                alt={`${lessonInfo.label} - Слайд ${index + 1}`}
                style={{ maxWidth: "95%", borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.button}>
          <Button
            label="<--"
            size="s"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            form="roundBrick"
          />
          <Button
            label="-->"
            size="s"
            onClick={scrollNext}
            disabled={!canScrollNext}
            form="brickRound"
          />
          <Button
            style={{ margin: "15px" }}
            size="s"
            onClick={() => setIsModalOpen(!isModalOpen)}
            form="round"
            iconLeft={isModalOpen ? IconCollapse : IconExpand}
            onlyIcon
          />
        </div>
        {lessonInfo?.lessonFiles?.length && (
          <Badge
            status="normal"
            size="m"
            form="round"
            label={`${currentSlide + 1}/${lessonInfo?.lessonFiles?.length}`}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
