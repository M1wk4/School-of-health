import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@consta/uikit/Button";
import { Sidebar } from "@consta/uikit/Sidebar";
import { ModalHeader, ModalLayout } from "@consta/uikit/Modal";
import { List } from "@consta/uikit/ListCanary";
import type { SideBarList, SideBarItem } from "@/types/sideBar.types";

import classes from "./SideBar.module.scss";

type SideBarProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
  checked: SideBarItem | undefined;
  setChecked: (item: SideBarItem) => void;
};


const getItemLabel = (item: SideBarItem) => item?.label;

const items: SideBarList = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Теоретико-методические основы и структура программы",
    link: "/theory",
  },
  {
    label: "Занятие 1 ",
    link: "/lesson",
    lessonId: "1",
  },
  {
    label: "Занятие 2",
    link: "/lesson",
    lessonId: "2",
  },
  {
    label: "Занятие 3 ",
    link: "/lesson",
    lessonId: "3",
  },
  {
    label: "Занятие 4 ",
    link: "/lesson",
    lessonId: "4",
  },
  {
    label: "Занятие 5",
    link: "/lesson",
    lessonId: "5",
  },
  {
    label: "Занятие 6",
    link: "/lesson",
    lessonId: "6",
  },
  {
    label: "Занятие 7",
    link: "/lesson",
    lessonId: "7",
  },
  {
    label: "Занятие 8",
    link: "/lesson",
    lessonId: "8",
  },
  {
    label: "Методические материалы для медицинских работников",
    link: "/materials",
  },
];

const SideBar = (props: SideBarProps) => {
  const { setOpen, open, checked, setChecked  } = props;

  const navigate = useNavigate();

  return (
    <Sidebar
      isOpen={open}
      onClickOutside={() => setOpen(false)}
      onEsc={() => setOpen(false)}
      style={{ zIndex: 2000 }}
      border
      position="left"
    >
      <ModalLayout border fixed space={{ p: "s" }}>
        <ModalHeader> Meню </ModalHeader>
        <List
          size="m"
          items={items}
          getItemLabel={getItemLabel}
          getItemChecked={(item) => checked ? checked === item : item?.link === '/'}
          onItemClick={(item) => {
            setChecked(item);
            setOpen(false);

            if (item?.lessonId) {
              navigate(`${item?.link}/${item?.lessonId}`);

              return;
            }

            navigate(item?.link);
          }}
        />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button
            onClick={() => setOpen(false)}
            size="s"
            view="primary"
            label="Закрыть"
            width="default"
            style={{ width: '300px' }}
          />
        </div>
      </ModalLayout>
    </Sidebar>
  );
};

export default SideBar;
