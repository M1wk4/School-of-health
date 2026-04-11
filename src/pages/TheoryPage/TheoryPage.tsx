import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import Page from "@/componets/Page/Page";
import DownloadCard from "@/componets/DownloadCard/DownloadCard";

import { File } from "@/types/file.types";

import classes from "./TheoryPage.module.scss";

const fileList: File[] = [
  {
    filePath:
      "public/files/TheoryPage/Характеристика учебно-методических материалов по тематическим.pdf",
    fileName: "Характеристика учебно-методических материалов по тематическим",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "142 КБ"
  },
  {
    filePath:
      "public/files/TheoryPage/Тематический план образовательной программы.pdf",
    fileName: "Тематический план образовательной программы",
    fileExtension: "pdf",
    fileDiscription: "",
    fileSize: "119 КБ"
  },
];

const TheoryPage = () => {
  return (
    <Page title={"Теоретико-методические основы и структура программы"}>
      <>
        <Text view={"primary"} className={classes.italic}>
          Как устроена «Школа здоровья» и почему она работает
        </Text>
        <Text view={"primary"} className={classes.subtitle}>
          Концепция программы{" "}
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Наша программа базируется на понимании того, что эффективность
          гемодиализа наполовину зависит от действий самого пациента между
          процедурами. Школа здоровья – это не лекции, а практическое обучение.
          Мы не просто даём информацию, а формируем устойчивые навыки
          самоконтроля.
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Программа разработана в соответствии с Приказом Минздрава РФ № 1177н
          (об организации профилактики неинфекционных заболеваний) и опирается
          на многолетний опыт работы школ здоровья.
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Ключевая идея: пациент – не пассивный получатель помощи, а активный
          участник лечения. Наша задача – вооружить его понятными инструментами.
        </Text>

        <div className={classes.clear} />

        <Text view={"primary"} className={classes.subtitle}>
          Цели и задачи программы{" "}
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Цель: сформировать у пациентов, находящихся на гемодиализе, систему
          знаний и практических навыков для осознанного управления своим
          здоровьем в междиализный период.
        </Text>

        <Text view={"primary"} className={classes.paragraph}>
          Задачи:
        </Text>

        <ol className={classes.list}>
          <li>
            <Text view={"primary"}>
              Объяснить суть хронической болезни почек и принцип работы
              гемодиализа.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Научить ежедневному контролю жидкости (расчёт «сухого веса»,
              допустимой прибавки).
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Сформировать навыки диетического самоконтроля (ограничение калия,
              фосфора, натрия).
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Обучить правильному уходу за сосудистым доступом (фистула/катетер)
              и распознаванию тревожных сигналов.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Разъяснить цели и правила приёма ключевых лекарственных
              препаратов.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Научить измерять и анализировать артериальное давление.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Внедрить Дневник самоконтроля как интегральный инструмент
              управления состоянием.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Обеспечить психологическую поддержку и мотивацию к долгосрочной
              терапии.
            </Text>
          </li>
        </ol>
        <div className={classes.clear} />

        <Text view={"primary"} className={classes.subtitle}>
          Структура программы: 8 занятий
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Обучение построено по принципу «от простого к сложному»:
        </Text>
        <ol className={classes.list}>
          <li>
            <Text view={"primary"}>
              Понимание болезни: почему нужен гемодиализ?
            </Text>
            <Text view={"primary"}>
              Как работают почки, что происходит при их отказе и как аппарат
              «искусственная почка» помогает жить.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Контроль жидкости: расчёты, от которых зависит жизнь
            </Text>
            <Text view={"primary"}>
              Что такое «сухой вес», как рассчитать свою норму воды и почему
              перебор жидкости опасен.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Диализная диета: правила безопасности и разнообразие
            </Text>
            <Text view={"primary"}>
              Калий, фосфор, натрий – что это и почему их надо ограничивать.
              Система «светофор» для продуктов.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Сосудистый доступ: уход, наблюдение, тревожные сигналы
            </Text>
            <Text view={"primary"}>
              Как ухаживать за фистулой или катетером, что проверять каждый день
              и когда бить тревогу.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Лекарственная терапия: союзники в лечении
            </Text>
            <Text view={"primary"}>
              Фосфат-связывающие, препараты железа, эритропоэтин, лекарства от
              давления – зачем они и как их правильно принимать.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Самоконтроль артериального давления и самочувствия{" "}
            </Text>{" "}
            <Text view={"primary"}>
              Как правильно измерять давление, вести таблицу и видеть связь
              между тем, что вы едите/пьёте, и вашими цифрами.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Инструмент самоконтроля: как вести и использовать дневник
            </Text>{" "}
            <Text view={"primary"}>
              Знакомство с Дневником самоконтроля – вашим главным рабочим
              инструментом, который объединяет всё.
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              Итоги и перспективы: управление качеством жизни
            </Text>{" "}
            <Text view={"primary"}>
              Как жить полноценно с гемодиализом, справляться со стрессом и
              ставить реалистичные цели.
            </Text>
          </li>
        </ol>
        <Text view={"primary"} className={classes.paragraph}>
          Каждое занятие длится 45–60 минут и включает мини-лекцию, дискуссию,
          разбор клинических примеров и практикум. Ниже предоставлен для
          скачивания файл с тематическим планом занятий.
        </Text>
        <div className={classes.clear} />

        <Text view={"primary"} className={classes.subtitle}>
          Учебно-методическое обеспечение{" "}
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Для проведения занятий разработан полный комплект материалов.
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          Для ведущего (фельдшера/медсестры):{" "}
        </Text>
        <ul className={classes.list}>
          <li>
            <Text view={"primary"}>
              методические конспекты каждого занятия (сценарий, время, методы);
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              комплект презентаций (их же могут использовать и сами
              пациенты).{" "}
            </Text>
          </li>
        </ul>
        <Text view={"primary"} className={classes.paragraph}>
          Для пациентов (раздаточные материалы):{" "}
        </Text>
        <ul className={classes.list}>
          <li>
            <Text view={"primary"}>памятки-алгоритмы по каждой теме; </Text>
          </li>
          <li>
            <Text view={"primary"}>
              дневник самоконтроля (недельный бланк).
            </Text>
          </li>
        </ul>

        <div className={classes.clear} />

        <Text view={"primary"} className={classes.subtitle}>
          Ожидаемые результаты
        </Text>
        <Text view={"primary"} className={classes.paragraph}>
          После прохождения полного курса «Школы здоровья» пациент сможет:{" "}
        </Text>
        <ul className={classes.list}>
          <li>
            <Text view={"primary"}>
              самостоятельно рассчитывать допустимый объём жидкости между
              диализами;
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              составлять безопасное меню с учётом ограничений по калию, фосфору
              и соли;
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              правильно принимать назначенные лекарства;
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              вести Дневник самоконтроля и использовать его для разговора с
              врачом;
            </Text>
          </li>
          <li>
            <Text view={"primary"}>
              лучше понимать своё состояние и чувствовать себя увереннее.
            </Text>
          </li>
        </ul>

        <DownloadCard fileList={fileList} />
      </>
    </Page>
  );
};

export default TheoryPage;
