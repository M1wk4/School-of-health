import { Text } from "@consta/uikit/Text";

import Page from "@/componets/Page/Page";

import { File } from "@/types/file.types";

import classes from "./FormsPage.module.scss";
import DownloadCard from "@/componets/DownloadCard/DownloadCard";

const fileList: File[] = [
  {
    filePath: "files/MaterialsPage/Анкета входного контроля.pdf",
    fileName: "Анкета входного контроля",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "139 КБ",
  },
  {
    filePath: "files/MaterialsPage/Анкета выходного контроля.pdf",
    fileName: "Анкета выходного контроля",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "137 КБ",
  },
  {
    filePath: "files/MaterialsPage/Анкета обратной связи.pdf",
    fileName: "Анкета обратной связи",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "94 КБ",
  },
];

const FormsPage = () => {
  return (
    <Page title={"Анкеты для контроля знаний и оценки эффективности"}>
      <>
        <Text view={"primary"} className={classes.paragraph}>
          В рамках дипломного проекта разработаны три анкеты, которые позволяют
          оценить исходный уровень знаний пациентов, динамику после обучения и
          получить обратную связь о качестве программы.
        </Text>

        <div className={classes.clear} />
        <Text view={"primary"} className={classes.subtitle}>
          Для медицинских работников
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Использование анкет до и после обучения — стандарт доказательного
          подхода в медицинской педагогике. Предложенные инструменты помогут вам
          объективно проанализировать результаты работы «Школы здоровья» для
          пациентов, находящихся на гемодиализе.
        </Text>

        <Text view={"primary"} className={classes.subtitle}>
          1. Анкета входного контроля (до занятий)
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          <strong>Цель: </strong>определить базовые знания пациента о
          гемодиализе, диете, контроле жидкости, а также оценить его физическое,
          эмоциональное состояние и приверженность лечению.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Результаты позволяют адаптировать программу под реальный уровень
          группы.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          <strong>Содержание блоков:</strong>
        </Text>

        <ul className={classes.list} style={{ listStyleType: "disc" }}>
          <li>
            <Text view={"primary"}>
              Общая информация (пол, возраст, стаж диализа)
            </Text>
          </li>
          <li>
            <Text view={"primary"}> Физическое самочувствие и поведение</Text>
          </li>

          <li>
            <Text view={"primary"}>Эмоциональное состояние</Text>
          </li>

          <li>
            <Text view={"primary"}>Социальная активность и поддержка</Text>
          </li>

          <li>
            <Text view={"primary"}>
              Информированность о диализе, диете, контроле веса
            </Text>
          </li>
        </ul>

        <Text view={"primary"} className={classes.subtitle}>
          2. Анкета выходного контроля (после 8 занятий)
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          <strong>Цель: </strong>оценить изменения в самочувствии, поведении,
          эмоциональном состоянии и уровне знаний после прохождения «Школы
          здоровья».
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Сравнение результатов входного и выходного контроля позволяет
          количественно измерить эффективность обучения.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          <strong>Содержание блоков:</strong>
        </Text>

        <ul className={classes.list} style={{ listStyleType: "disc" }}>
          <li>
            <Text view={"primary"}>
              Изменение самочувствия и поведения (физическая активность,
              контроль давления)
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              {" "}
              Изменение эмоционального состояния (тревога, уверенность)
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              {" "}
              Уровень знаний (калий, фосфор, эритропоэтин, жидкость, диета)
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              Оценка «Школы здоровья» и дальнейшие пожелания
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              Информированность о диализе, диете, контроле веса
            </Text>
          </li>
        </ul>

        <Text view={"primary"} className={classes.subtitle}>
          3. Анкета обратной связи (о сайте и программе)
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          <strong>Цель: </strong>получить мнение участников о полезности
          занятий, качестве раздаточных материалов, наиболее ценных темах и
          собрать предложения по улучшению образовательной программы.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Этот инструмент важен для дальнейшего развития проекта.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          <strong>Содержание блоков:</strong>
        </Text>

        <ul className={classes.list} style={{ listStyleType: "disc" }}>
          <li>
            <Text view={"primary"}>Общая польза занятий</Text>
          </li>
          <li>
            <Text view={"primary"}> Наиболее полезные темы</Text>
          </li>

          <li>
            <Text view={"primary"}>Оценка раздаточных материалов</Text>
          </li>

          <li>
            <Text view={"primary"}>Применимость знаний в жизни</Text>
          </li>

          <li>
            <Text view={"primary"}>Свободные пожелания и предложения</Text>
          </li>
        </ul>

        <DownloadCard fileList={fileList} />
      </>
    </Page>
  );
};

export default FormsPage;
