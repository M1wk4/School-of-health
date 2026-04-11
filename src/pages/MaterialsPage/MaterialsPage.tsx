import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import Page from "@/componets/Page/Page";
import DownloadCard from "@/componets/DownloadCard/DownloadCard";

import { File } from "@/types/file.types";

import classes from "./MaterialsPage.module.scss";

const fileList: File[] = [
  {
    filePath: "files/MaterialsPage/Конспект к занятию 1.pdf",
    fileName: "Конспект к занятию 1",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "183 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 2.pdf",
    fileName: "Конспект к занятию 2",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "186 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 3.pdf",
    fileName: "Конспект к занятию 3",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "182 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 4.pdf",
    fileName: "Конспект к занятию 4",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "190 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 5.pdf",
    fileName: "Конспект к занятию 5",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "181 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 6.pdf",
    fileName: "Конспект к занятию 6",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "186 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 7.pdf",
    fileName: "Конспект к занятию 7",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "207 КБ",
  },
  {
    filePath: "files/MaterialsPage/Конспект к занятию 8.pdf",
    fileName: "Конспект к занятию 8",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "187 КБ",
  },
];

const MaterialsPage = () => {
  return (
    <Page title={"Методические материалы для медицинских работников"}>
      <>
        <Text view={"primary"} className={classes.italic}>
          Всё для организации «Школы здоровья» в вашем отделении гемодиализа
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Уважаемые коллеги!
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Этот раздел создан для фельдшеров, медицинских сестёр и врачей,
          которые планируют внедрить или уже проводят образовательную программу
          «Школа здоровья» для пациентов, находящихся на гемодиализе. Здесь вы
          найдёте полный учебно-методический комплекс, разработанный на основе
          клинических рекомендаций и Приказа Минздрава РФ № 1177н.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Все материалы готовы к использованию – скачивайте, адаптируйте под
          свои условия и проводите обучение.
        </Text>

        <Text view={"primary"} className={classes.subtitle}>
          Что входит в методический комплект
        </Text>

        <ol className={classes.list}>
          <li>
            <Text view={"primary"}>Конспекты всех 8 занятий</Text>
            <Text view={"primary"}>
              Подробные сценарии для ведущего. Каждый конспект включает:
            </Text>
            <ul className={classes.list} style={{ listStyleType: "disc" }}>
              <li>
                <Text view={"primary"}>тему, цель и задачи занятия;</Text>
              </li>
              <li>
                <Text view={"primary"}> продолжительность (45–60 минут);</Text>
              </li>

              <li>
                <Text view={"primary"}>
                  перечень необходимого оборудования и материалов;
                </Text>
              </li>

              <li>
                <Text view={"primary"}>
                  пошаговый ход занятия с указанием времени на каждый этап;
                </Text>
              </li>

              <li>
                <Text view={"primary"}>
                  методы работы (мини-лекция, дискуссия, разбор кейсов,
                  практикум);
                </Text>
              </li>
              <li>
                <Text view={"primary"}>
                  примерные вопросы для обсуждения и ответы.
                </Text>
              </li>
            </ul>
          </li>
          <li>
            <Text view={"primary"}>Комплект презентаций</Text>
            <Text view={"primary"}>
              Визуальный ряд к каждому занятию в едином стиле. Слайды содержат
              упрощённые схемы, таблицы, пиктограммы и краткие текстовые выводы.
              Презентации можно демонстрировать на экране или распечатать в
              качестве раздаточного материала. Скачать их можно на
              соответствующих страницах занятий.
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              Анкеты для оценки эффективности обучения и обратной связи
            </Text>
            <ol className={classes.list}>
              <li>
                <Text view={"primary"}>
                  Анкета входного контроля – для оценки исходного уровня знаний
                  пациентов (до начала цикла занятий).
                </Text>
              </li>
              <li>
                <Text view={"primary"}>
                  {" "}
                  Анкета выходного контроля – для оценки динамики знаний после
                  завершения обучения.
                </Text>
              </li>

              <li>
                <Text view={"primary"}>
                  Анкета обратной связи – для сбора мнения пациентов о программе
                  и работе ведущего.
                </Text>
              </li>
            </ol>{" "}
            <Text view={"primary"} className={classes.paragraph}>
              Все анкеты представлены в формате PDF, готовы к печати и
              тиражированию.
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              Рекомендации по организации «Школы здоровья»
            </Text>
            <Text view={"primary"}>Практические советы по:</Text>
            <ul className={classes.list} style={{ listStyleType: "disc" }}>
              <li>
                <Text view={"primary"}>
                  формированию групп (оптимальный размер 5–8 человек, целевая
                  аудитория – пациенты в первые 3–6 месяцев диализа или с низкой
                  приверженностью);
                </Text>
              </li>
              <li>
                <Text view={"primary"}>
                  {" "}
                  графику занятий (цикл из 8 встреч, 1–2 раза в неделю);
                </Text>
              </li>

              <li>
                <Text view={"primary"}>
                  подготовке помещения и оборудования (ноутбук, проектор, экран,
                  доступ к принтеру);
                </Text>
              </li>

              <li>
                <Text view={"primary"}>
                  вовлечению пациентов и поддержанию мотивации;
                </Text>
              </li>
              <li>
                <Text view={"primary"}>
                  оценке эффективности обучения (анализ анкет, наблюдение за
                  динамикой лабораторных показателей).
                </Text>
              </li>
            </ul>
          </li>
        </ol>

        <Text
          view={"primary"}
          className={classes.subtitle}
          style={{ margin: "0px 0 10px" }}
        >
          Как использовать материалы
        </Text>

        <ol className={classes.list}>
          <li>
            <Text view={"primary"}>Скачайте все необходимые файлы.</Text>
          </li>
          <li>
            <Text view={"primary"}>
              Ознакомьтесь с конспектами и презентациями – каждый конспект
              содержит чёткий план занятия.
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              Распечатайте анкеты входного контроля для первой встречи.
            </Text>
          </li>

          <li>
            <Text view={"primary"}>
              Проведите цикл из 8 занятий, используя конспекты и презентации.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Раздавайте пациентам памятки, рабочие листы и дневник самоконтроля
              (все эти файлы есть на сайте в соответствующих разделах для
              пациентов – вы можете указать им на это или скачать и распечатать
              самостоятельно).
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              После завершения цикла проведите выходное анкетирование и
              анкетирование обратной связи, проанализируйте результаты.
            </Text>
          </li>
        </ol>

        <Text view={"primary"} className={classes.paragraph}>
          Все методические материалы могут быть адаптированы под особенности
          вашего отделения (график диализа, доступное оборудование, потребности
          пациентов).
        </Text>

        <DownloadCard fileList={fileList} />
      </>
    </Page>
  );
};

export default MaterialsPage;
